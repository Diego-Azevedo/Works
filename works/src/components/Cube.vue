<template>
  <div ref="container" class="scene-container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'

const container = ref(null)

onMounted(() => {
  // SCENE
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  // CAMERA
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 4

  // RENDERER
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value.appendChild(renderer.domElement)

  // CUBE
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  // FRONT MARK (visual indicator)
  const markerGeometry = new THREE.CircleGeometry(0.2, 32)
  const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
  const marker = new THREE.Mesh(markerGeometry, markerMaterial)
  marker.position.z = 0.51
  cube.add(marker)

  // LIGHTS
  const light = new THREE.PointLight(0xffffff, 1)
  light.position.set(5, 5, 5)
  scene.add(light)

  const ambient = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambient)

  // MOUSE
  const mouse = { x: 0, y: 0 }

  window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = (event.clientY / window.innerHeight) * 2 - 1
  })

  // ANIMATION
  const speed = 0.2
  const maxRotation = 0.9

  const animate = () => {
    requestAnimationFrame(animate)

    cube.rotation.y += (mouse.x - cube.rotation.y) * speed
    cube.rotation.x += (mouse.y - cube.rotation.x) * speed

    // Limita rotação
    cube.rotation.x = Math.max(-maxRotation, Math.min(maxRotation, cube.rotation.x))
    cube.rotation.y = Math.max(-maxRotation, Math.min(maxRotation, cube.rotation.y))

    renderer.render(scene, camera)
  }

  animate()

  // RESIZE
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
})
</script>

<style scoped>
.scene-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
