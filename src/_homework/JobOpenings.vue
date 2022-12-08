<template>
  <div class="p-15 h-full" @click="focusIn($event)">
    <header class="w-1/2 ml-0 h-max border border-gray rounded-md">
      <div class="flex justify-between p-5">
        <p class="text-gray font-bold text-base">JOB OPENINGS</p>
        <button class="w-9 h-9 border rounded-md bg-blue-500 text-white font-bold">-></button>
      </div>

      <div class="p-5">
        <p class="text-gray font-normal text-sm">Departments:</p>
        <input
          id="custmInpt"
          class="w-full rounded-md h-10"
          type="text"
          name=""
          placeholder="Select departments"
        >
        <select
          v-show="selectMode"
          multiple
          class="w-2/3 p-2 rounded-md mt-2"
          name=""
        >
          <option
            v-for="(value, key, index) in filtredByDep"
            id="custmSelect" :key="index"
            :class="{ 'h-7': true, hidden: value.list.length === 0 }"
            @click="selectDepart($event.target)"
            @submit.prevent
          >
            {{ key }}
          </option>
        </select>
        <p
          class="text-gray font-normal text-sm mt-1"
        >
          Showing {{ currentCountOfOpenings }} of 2296
          job openings
        </p>
      </div>
    </header>
    <hr class="w-1/2 mt-5">
    <main class="w-1/2 mt-5 border border-gray rounded-md">
      <div v-for="(value, key, index) in filtredByDep" :key="index">
        <div
          v-if="((value.list.length !==0) && currentValue.length === 0)"
          class="font-bold p-3"
        >
          {{ key }} ({{ value.list.length }})
          <div v-for="(item, index) in value.list" :key="index" class="text-gray pl-10 font-normal">
            <div v-if="index < 5 || !value.isCollapsed">
              {{ item }}
            </div>
          </div>
          <button
            v-if="value.isCollapsed && value.list.length>5"
            class="text-blue-500 underline pl-10" @click="seeMore(value)"
          >
            see more...
          </button>
        </div>
        <div
          v-else-if="(((currentValue.length > 0)) && currentValue.includes(key))"
          class="font-bold p-3"
        >
          {{ key }} ({{ value.list.length }})
          <div v-for="(item, index) in value.list" :key="index" class="text-gray pl-10 font-normal">
            <div v-if="index < 5 || !value.isCollapsed">
              {{ item }}
            </div>
          </div>
          <button
            v-if="value.isCollapsed && value.list.length>5"
            class="text-blue-500 underline pl-10" @click="seeMore(value)"
          >
            see more...
          </button>
        </div>
        <div />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>

import { jobOpenings } from '@/_homework/job-openings'
import { departments } from '@/_homework/departments'

const currentValue = ref([])
const selectMode = ref(false)
let filtredByDep = ref({})
const currentCountOfOpenings = ref(0)

function seeMore (value) {
  selectMode.value = true
  value.isCollapsed = !value.isCollapsed
}

function transformData () {
  const obj = {}

  departments.map((depart) => {
    obj[depart.name] = {
      list: jobOpenings
        .filter(item => item.departments.includes(depart.value))
        .map((item) => item.title),
      isCollapsed: true
    }
    obj.Other = {
      list: jobOpenings
        .filter(item => !item.departments.includes(depart.value))
        .map((item) => item.title),
      isCollapsed: true
    }
  })

  const sorted = Object.keys(obj)
    .sort()
    .reduce((accumulator, key) => {
      accumulator[key] = obj[key]

      return accumulator
    }, {})

  filtredByDep = { ...sorted }

  jobOpenings.map(item => {
    currentCountOfOpenings.value = currentCountOfOpenings.value + item.departments.length
  })

  currentCountOfOpenings.value = 0

  Object.keys(filtredByDep).forEach(item => {
    if (currentValue.value.includes(item)) {
      currentCountOfOpenings.value = currentCountOfOpenings.value + filtredByDep[item].list.length
    }
  })
}

transformData()

function selectDepart (e: any) {
  if (e.style.backgroundColor === '') {
    e.style.backgroundColor = 'grey'
  } else e.style.backgroundColor = ''
  if (!currentValue.value.includes(e.value)) {
    currentValue.value.push(e.value)
  } else if (currentValue.value.includes(e.value)) {
    const i = currentValue.value.indexOf(e.value)
    if (i >= 0) {
      currentValue.value.splice(i, 1)
    }
  }
  transformData()
}

function focusIn (e) {
  if (e.target.id === 'custmInpt') {
    selectMode.value = !selectMode.value
  } else if (e.target.id === 'custmSelect') {
    selectMode.value = true
  } else selectMode.value = false
}

</script>
