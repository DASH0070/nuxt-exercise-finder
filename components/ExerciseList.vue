<template>
    <div class="px-4 pt-16 mx-auto max-w-md">
        <div class="flex text-lg gap-2 justify-end">
            <button @click="counter--"> - </button>
            <p>{{counter + ' of ' + Math.ceil(exerciseList.length / 10 )}}</p>
            <button @click="counter++"> + </button>
        </div>
        <Disclosure v-for="exercise in exerciseList.slice((counter - 1) * 10, (counter - 1) * 10 + 10)">
            <NuxtLink :to="exercise" v-if="exercise"
                class="flex w-full justify-between rounded-lg bg-purple-100 px-4 my-1 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>{{exercise}}</span>
            </NuxtLink>
        </Disclosure>
    </div>
</template>
  
<script setup lang="ts">
import { Disclosure } from '@headlessui/vue';
const props = defineProps<{ exerciseList: string[] }>();
const counter = ref(1);

watch(counter, () => {
    if (counter.value < 1) counter.value = 28;
    else if (counter.value > Math.ceil(props.exerciseList.length / 10)) counter.value = 1;
})
</script>
  