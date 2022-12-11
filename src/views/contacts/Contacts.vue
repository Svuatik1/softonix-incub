<template>
  <div class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <el-button :type="$elComponentType.primary" @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </el-button>

    <el-button
      class="!ml-0"
      :type="$elComponentType.danger"
      @click="$router.replace({ name: $routeNames.login })"
    >
      Logout
    </el-button>

    <div class="flex justify-space-between flex-wrap gap-4">
      <el-button
        :class="{'opacity-40': activeMode === 'card'}"
        type="primary"
        link
        @click="checkActiveMode('card')"
      >
        Card
      </el-button>
    </div>
    <el-button
      :class="{'opacity-40': activeMode === 'table'}"
      type="primary"
      link
      @click="checkActiveMode('table')"
    >
      Table
    </el-button>
  </div>

  <div v-if="activeMode === 'card'" class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in contacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>

  <ContactItemsTable
    v-else-if="activeMode === 'table'"
    class="cursor-pointer"
    @delete="deleteContact"
  />
</template>

<script lang="ts" setup>
const activeMode = ref('card')

const { $routeNames } = useGlobalProperties()

const router = useRouter()
const { contacts, updateContact, deleteContact } = useContactsStore()

function checkActiveMode (val: string) {
  activeMode.value = val
}

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
  console.log(contactId)
}

</script>
