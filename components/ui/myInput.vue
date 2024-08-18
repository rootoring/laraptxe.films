<template>
  <div class="form-group">
    <label class="color-gray400" for="page"><slot /></label>
    <input
      :type="props.inputType"
      :value="props.modelValue"
      @change="updateModelValue"
      id="page"
      class="form-control"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: String,
  inputType: {
    default: "text",
  },
  data: Object,
  max: String,
});

const emit = defineEmits(["update:modelValue"]);

function updateModelValue(event) {
  emit("update:modelValue", event.target.value);
}
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
}

.form-control {
  background-color: #212121;
  border: 1px solid #555 !important;
  border-radius: 5px;
  color: white;
  padding: 0.5rem;
  font-size: 16px;
  border-radius: 5px;
  padding: 10px;
  height: 39px;
  width: auto;
}
</style>
