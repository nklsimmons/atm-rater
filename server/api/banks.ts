import { Bank } from "~~/server/models/bank.model";

export default defineEventHandler(async (event) => {

    const banks = await Bank.find();

    return {
        banks
    }


    try {
        const response = data.save();

        return {
            response
            // response,
            // env: process.env
        }

    }
    catch(error) {
        return {
            error
        }
    }

})