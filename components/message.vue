<template>
  <TransitionGroup name="list" tag="div" class="message_list">
    <div
      v-for="(message, i) of store.messages"
      :class="`bg-${message.status} color-gray500 py-s px-l message`"
      :key="message.id"
    >
      {{ message.message }}
    </div>
  </TransitionGroup>
</template>
<script setup>
import { useStore } from "../store/store";

const store = useStore();
</script>
<style>
.message_list {
  position: fixed;
  top: 20px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 999999;
}
.message {
  border-radius: 5px;
}
</style>
