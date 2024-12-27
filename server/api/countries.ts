import { Country } from "~~/server/models/country.model";

export default defineEventHandler(async (event) => {
    const countries = await Country.find()
    return [...countries]
})