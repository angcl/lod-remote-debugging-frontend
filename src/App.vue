<script setup>
import { ref, reactive, onMounted } from "vue"
import { RouterLink, RouterView } from "vue-router"
import { useAppStore } from "./stores/app"

const appStore = useAppStore()

let connection = ref(null)

function handleMessage(event) {
  // If scriptlist packet, set scriptlist
  var data = JSON.parse(event.data)
  if (data["script-list"] !== undefined) {
    appStore.setScripts(data["script-list"])
    console.log(data["script-list"])
  }
}

onMounted(() => {
  connection.value = new WebSocket("ws://localhost:12345")
  connection.value.addEventListener('message', handleMessage)
})

</script>

<template>
  <h1>LoD Script Debugger</h1>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>