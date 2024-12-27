<script setup lang="ts">
const route = useRoute()
const { data } = await useFetch('/api/banks')
const newBankName = ref(null)

async function onSubmit(event: Event) {

    console.log(event)
    event.preventDefault()

    const res = await $fetch('/api/createBank', {
        method: 'POST',
        body: {
            name: newBankName.value,
            country: route.params.country,
        }
    })

    console.log(res)
}

</script>

<template>

    <h1>{{ route.params.country }}</h1>


    <div>
        <div v-for="bank in data">{{ bank.name }}</div>

    </div>

    <div>
        <h3>Add New Bank</h3>

        <form @submit="onSubmit">
            <label for="newBankName">Name:</label>
            <input type="text" v-model="newBankName">
            <button type="submit">Submit</button>
        </form>


    </div>

</template>