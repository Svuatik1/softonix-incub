<template>
  <div class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <AppButton @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </AppButton>
  </div>

  <SearchField
    v-model="currentValue"
    @update:model-value="validationName"
  />

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in visibleContacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
  <SortByRole
    @select="validationRole"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useContactsStore } from '@/store'
import ContactItem from '@/components/ContactItem.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import SearchField from '@/components/SearchField.vue'
import type { IContact } from '@/types'
import { storeToRefs } from 'pinia'
import SortByRole from '@/components/SortByRole.vue'

let newArr: Array<IContact>

const router = useRouter()
const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { deleteContact, updateContact } = contactsStore

const visibleContacts: Array<IContact> = ref(contacts.value)

function createNewContact () {
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: 'upsertContact', params: { contactId } })
}

const currentValue = ref<string | null>()

function validationName () {
  newArr = contacts.value.filter(item => item.name.toLowerCase().indexOf(currentValue.value?.toLowerCase()) > -1 ||
  item.description.toLowerCase().indexOf(currentValue.value?.toLowerCase()) > -1)

  if (newArr.length !== 0) {
    visibleContacts.value = newArr
  } else visibleContacts.value = null
}

function validationRole (param: string) {
  if (newArr === undefined && param === undefined) {
    visibleContacts.value = contacts.value
  } else if (newArr === undefined && param !== undefined) {
    const filteredArrByRoleWithoutSort = contacts.value.filter(item => item.role === param)
    visibleContacts.value = filteredArrByRoleWithoutSort
  } else if (param !== undefined) {
    const filteredArrByRole = newArr.filter(item => item.role === param)
    visibleContacts.value = filteredArrByRole
  }
}
</script>
