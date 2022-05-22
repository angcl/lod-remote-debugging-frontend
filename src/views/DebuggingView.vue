<script setup>
import { ref } from 'vue';
import { useAppStore } from '../stores/app'
import OpcodeView from '../components/OpcodeView.vue';

const appStore = useAppStore()
const scripts = ref([])
const selected = ref(null);

function handleAppStoreChanges(change) {
  if (change.events.key === 'scripts') {
    scripts.value = change.events.newValue
  }
}
appStore.$subscribe(handleAppStoreChanges, { detached: true })

function pause() {
  console.log("pause")
}

function step() {
  console.log("step")
}

function resume() {
  console.log("resume")
}

</script>

<template>
  <main>
    <div style="display: flex; flex-direction: column">
      <div style="padding: 1em 0em">
        <label>Script Selector</label>
        <select v-model="selected">
          <option v-for="script in scripts">{{ script }}</option>
        </select>
        {{ selected }}
        <button @click="pause">Pause</button>
        <button @click="step" >Step</button>
        <button @click="resume" >Resume</button>
      </div>
      <div style="display: flex;">
        <OpcodeView />
        <div style="flex: 1;">
          <div>
            <h2>Params</h2>
          </div>
          <div>
            <h2>Script vars</h2>
          </div>
          <div>
            <h2>Global vars</h2>
          </div>                    
        </div>
      </div>
    </div>
  </main>
</template>