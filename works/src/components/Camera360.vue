<template>
  <div ref="container" class="scene-container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const container = ref(null)

onMounted(() => {
  // CENA
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  // CÂMERA
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  // camera.position.set(0, 1, 5)
  camera.position.z = 1

  // RENDERER
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.value.appendChild(renderer.domElement)

  // LUZES
  const ambient = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambient)

  const directional = new THREE.DirectionalLight(0xffffff, 1)
  directional.position.set(5, 5, 5)
  scene.add(directional)

  // MOUSE
  const mouse = { x: 0, y: 0 }

  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1
  })

  // LOAD MODEL
  const loader = new GLTFLoader()
  let cameraModel = null

  loader.load(
    '/models/camera360.glb',
    (gltf) => {
      cameraModel = gltf.scene

      cameraModel.scale.set(1.2, 1.2, 1.2)
      cameraModel.position.set(0, 0, 0)

      scene.add(cameraModel)
    },
    undefined,
    (error) => {
      console.error('Erro ao carregar modelo:', error)
    }
  )

  // ANIMAÇÃO
  const speed = 0.08
  const maxRotation = 0.5

  const animate = () => {
    requestAnimationFrame(animate)

    if (cameraModel) {
      cameraModel.rotation.y += (mouse.x - cameraModel.rotation.y) * speed
      cameraModel.rotation.x += (mouse.y - cameraModel.rotation.x) * speed

      cameraModel.rotation.x = Math.max(
        -maxRotation,
        Math.min(maxRotation, cameraModel.rotation.x)
      )

      cameraModel.rotation.y = Math.max(
        -maxRotation,
        Math.min(maxRotation, cameraModel.rotation.y)
      )
    }

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
