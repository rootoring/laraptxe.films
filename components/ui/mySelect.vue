<template>
  <div class="drop-cont">
    <p class="color-gray300"><slot /></p>
    <div class="dropdown">
      <select
        class="dropdown-select"
        :value="props.modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      >
        <option v-for="option in data" :key="option" :value="option.name">
          {{ option.slug || "Все" }}
        </option>
      </select>
      <span class="dropdown-arrow"></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: String,
  data: Array,
});
const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
option::first-letter {
  text-transform: uppercase;
}
.dropdown {
  position: relative;
  display: inline-block;
  width: 200px; /* Adjust the width as needed */
  display: flex;
  flex-direction: column;
}

.dropdown-select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #212121;
  border: 1px solid #555;
  border-radius: 5px;
  appearance: none;
  cursor: pointer;
  outline: none;
  padding-right: 30px; /* Space for the arrow */
}

.dropdown-select:focus {
  border-color: rgb(145, 47, 202);
}

.dropdown-select option {
  background-color: #212121;
  color: #fff;
  padding: 10px;
}

.dropdown-arrow {
  position: absolute;
  top: 50%;
  right: 10px;
  width: 0;
  height: 0;
  pointer-events: none;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #fff;
  transform: translateY(-50%);
}
@media (max-width: 1050px) {
  .drop-cont {
    width: 100%;
  }
  .dropdown {
    width: 100% !important;
  }
}
</style>
