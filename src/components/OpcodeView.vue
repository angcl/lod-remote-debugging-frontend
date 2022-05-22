<script setup>
import OpcodeViewItem from './OpcodeViewItem.vue';
</script>

<template>
  <div class="opcode-view-container" style="flex: 1;">
    <div class="opcode-view-header">
      <h2>Opcode View</h2>
    </div>
    <div class="opcode-view">
      <OpcodeViewItem />
    </div>
  </div>
</template>

<style>
.opcode-view {
  border: 1px solid #ccc;
}
</style>