<template>
    <div>
        <RadioGroup v-for="(btn, key) in btnList" v-model="btnRef[key]" class="flex justify-center gap-16 my-10">
            <RadioGroupOption v-for="b in btn" as="template" :value="b" :key="b">
                <button
                    class="w-60 list-none h-16 leading-[4rem] text-center text-3xl border-2 rounded-full ui-checked:bg-blue-500 ui-checked:text-slate-100 capitalize select-none">
                    {{b}}
                </button>
            </RadioGroupOption>
        </RadioGroup>
        <button class="w-60 border-2 h-16 text-3xl bg-blue-700 text-slate-100" @click="findExercise">Find
            Exercise</button>
        <ExerciseList v-if="exerciseList" :exercise-list="exerciseList" />
    </div>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { fetchData } from '../utils/fetchData';

// Button List used to render Buttons
const btnList = {
    type: ['strength', 'cardio'],
    area: ['full', 'upper', 'lower', 'core'],
    level: ['beginner', 'intermediate', 'advanced']
};

// Store Reference of which button is pressed
const btnRef = ref<{ type: string, area: string, level: string }>({
    type: 'strength',
    area: 'full',
    level: 'beginner'
});

// Watcher to change value of url based on button selected
watch(btnRef.value, () => {
    options.url = `https://api.sebhulse.com/v1/filter/?type=${btnRef.value.type}&area=${btnRef.value.area}&level=${btnRef.value.level}`;
})

const options = {
    method: 'GET',
    url: `https://api.sebhulse.com/v1/filter/?type=${btnRef.value.type}&area=${btnRef.value.area}&level=${btnRef.value.level}`
};

const exerciseList = ref();
const findExercise = async () => {
    exerciseList.value = await fetchData(options);
    exerciseList.value = exerciseList.value.workout;
};

</script>