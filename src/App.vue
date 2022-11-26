<template>
  <div class="max-w-[1440px] p-6">
    <AddFormVue
      v-if="statusAddMode"
      @cancel="AddMode"
      @newContactSave="onNewContactSave"
    />
    <div v-else>
      <h3 class="font-medium m-0">Contact list</h3>
      <button class="rounded w-32 h-8 bg-blue-500 text-white mt-2 font-medium" @click="AddMode">Add contact +</button>
      <div class="contact-list grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
        <ContactItem
          v-for="(contact, index) in contacts"
          :key="contact.id"
          :contact="contact "
          @delete="deleteContact(index)"
          @save="onContactSave($event, index)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AddFormVue from '@/components/AddForm.vue'
import ContactItem from '@/components/ContactItem.vue'
import { ref } from 'vue'
import type { IContact } from './types'

const contacts = ref<IContact[]>([
  {
    id: 1,
    name: 'Ester Howard',
    description: 'Forvard response developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 2,
    name: 'Jane Cooper',
    description: 'Regional Paradigm Technical',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 3,
    name: 'Cody Fisher',
    description: 'Product Directives Officer',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  }
])

const statusAddMode = ref(false)

function deleteContact (index: number) {
  contacts.value.splice(index, 1)
}

function onContactSave (contact: IContact, index: number) {
  contacts.value[index] = { ...contact }
}

function AddMode () {
  statusAddMode.value = !statusAddMode.value
}

function onNewContactSave (contact: IContact) {
  contacts.value.unshift(contact)
}

</script>
