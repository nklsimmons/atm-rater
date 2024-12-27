<script setup lang="ts">
const { data } = await useFetch('/api/countries')
console.log(data)
</script>

<template>
    <div>
        <h1>Hello World</h1>
        <div v-for="country in data">
            <NuxtLink :to="{ name: 'banks', params: { id: country } }">
                {{ country.name }}
            </NuxtLink>
        </div>
    </div>
</template>