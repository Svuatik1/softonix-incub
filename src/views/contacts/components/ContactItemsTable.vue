<template>
  <el-table
    :data="contacts"
    style="width: 100%"
    class="my-5"
  >
    <el-table-column label="Image" class="mx-auto mt-5">
      <template #default="scope">
        <img :src="scope.row.image" alt="some" class="w-12 h-12 mx-auto rounded-3xl">
      </template>
    </el-table-column>

    <el-table-column prop="name" label="Name">
      <template #default="scope">
        <p v-if="!editModeState" class="text-center">{{ scope.row.name }}</p>
        <el-input
          v-else-if="(editModeState && editModeId === scope.row.id)"
          v-model="scope.row.name"
        />
      </template>
    </el-table-column>

    <el-table-column prop="description" label="Description">
      <template #default="scope">
        <p v-if="!editModeState" class="text-center">{{ scope.row.description }}</p>
        <el-input
          v-else-if="(editModeState && editModeId === scope.row.id)"
          v-model="scope.row.description"
        />
      </template>
    </el-table-column>

    <el-table-column prop="actions" label="Actions">
      <template #default="scope">
        <div class="ml-[110px]">
          <el-button :type="$elComponentType.primary" @click="editMode(scope.row)">
            {{ editModeState && editModeId === scope.row.id? 'Save': 'Edit' }}
          </el-button>
          <el-button
            :type="$elComponentType.danger"
            @click.stop="editModeState? editModeState = !editModeState : $emit('delete', scope.row)"
          >
            {{ editModeState && editModeId === scope.row.id? "Cancel": "Delete" }}
          </el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>

const { contacts, updateContact } = useContactsStore()
const emit = defineEmits(['delete', 'save'])

const editModeState = ref(false)
const editModeId = ref('')

function editMode (val) {
  editModeState.value = !editModeState.value
  editModeId.value = val.id
}

</script>
