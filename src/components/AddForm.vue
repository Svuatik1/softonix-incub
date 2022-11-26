<template>
  <div class="w-full px-20">
    <div class="w-max h-max m-auto rounded-xl px-8 bg-blue-500">
      <p class=" font-bold text-lg pt-5">Name:</p>
      <input
        v-model="newContact.name"
        class="w-[500px] h-10 rounded-md"
        type="text"
        @input="validation"
      >
      <p class="font-bold mt-5 text-lg">Description:</p>
      <input
        v-model="newContact.description"
        class="w-[500px] h-10 rounded-md" type="text" name=""
        @input="validation"
      >
      <p class=" font-bold mt-5 text-lg">Link for image:</p>
      <input
        v-model="newContact.image"
        class="block w-[500px] h-10 rounded-md" type="text" name=""
        @input="validation"
      >
      <button
        ref="saveRef"
        class="font-bold text-lg h-10 w-32 border-white m-5 rounded-md ml-0 bg-white text-gray pointer-events-none"
        @click="saveNewContact"
      >
        Save
      </button>
      <button
        class="text-red-600 font-bold text-lg h-10 w-32 border-white m-5 rounded-md bg-white"
        @click="$emit('cancel')"
      >
        Cancle
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IContact } from '@/types'
import { ref } from 'vue'

const newEmit = defineEmits(['cancel', 'newContactSave'])
const saveRef = ref()

const newContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

function saveNewContact () {
  newEmit('cancel')
  newEmit('newContactSave', newContact.value)
}

function validation () {
  if (newContact.value.name === '' || newContact.value.description === '' || newContact.value.image === '') {
    saveRef.value.style.color = 'gray'
    saveRef.value.style.pointerEvents = 'none'
  } else {
    saveRef.value.style.color = 'rgb(59 130 246 / var(--tw-text-opacity))'
    saveRef.value.style.pointerEvents = 'auto'
  }
}

</script>
