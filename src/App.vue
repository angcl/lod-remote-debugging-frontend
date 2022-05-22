<script setup>
import { ref, reactive, onMounted } from "vue"
import { RouterLink, RouterView } from "vue-router"
import { useAppStore } from "./stores/app"

const appStore = useAppStore()

let connection = ref(null)

function handleMessage(event) {
  // If scriptlist packet, set scriptlist
  console.log(event.data)
  appStore.setScripts(["Script 1", "Script 2"])
}

onMounted(() => {
  connection.value = new WebSocket("wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self")
  connection.value.addEventListener('message', handleMessage)
})

function increment() {
  counter.count++;
}

function sendCommand() {
  connection.value.send('Test')
}

</script>

<template>
  <h1>LoD Script Debugger</h1>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>