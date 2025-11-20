<script setup>
defineProps({
  value: {
    type: Boolean,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const emit = defineEmits(["update:value"]);

function handleChange(event){
  emit('update:value', event.target.checked);
}

</script>

<template>
  <div class="mb-3">
    <label class="form-label pe-2" :for="id">{{label}}:</label>
    <input :id="id" type="checkbox"
           :checked="value"
           @change="handleChange"
           class="form-check-input"/>
  </div>
</template>

<style scoped>

</style>