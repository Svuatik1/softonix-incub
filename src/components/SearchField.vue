<template>
  <input
    :value="modelValue"
    update:modelValue
    placeholder="Search by name or description "
    class="rounded-md font-medium border
   border-gray-medium
    focus:border-gray-dark
    text-sm p-2 block w-80 mt-4"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<script lang="ts" setup>

withDefaults(defineProps<{
  modelValue: string | null
}>(), {
})

defineEmits(['update:modelValue'])

</script>
