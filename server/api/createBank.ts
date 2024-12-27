import { Bank } from "~~/server/models/bank.model";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const newBank = new Bank({
        name: body.name,
        country: body.country,
    })

    try {
        const response = newBank.save();

        return {
            response
        }

    }
    catch(error) {
        return {
            error
        }
    }

})