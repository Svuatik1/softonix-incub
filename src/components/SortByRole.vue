<template>
  <form action="sort" @submit.prevent>
    <label for="role">Choose role:</label>
    <div id="v-model-select" class="demo">
      <select
        v-model="selected"
        :update="$emit('select', selected)"
      >
        <option disabled value="">Выберите один из вариантов</option>
        <option>developer</option>
        <option>support</option>
        <option>head</option>
        <option>designer</option>
        <option>architect</option>
      </select>
    </div>
  </form>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

withDefaults(defineProps<{
  modelValue: string | null
}>(), {
})

defineEmits(['update:modelValue', 'select'])

const selected = ref()

</script>
