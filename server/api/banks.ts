import { Bank } from "~~/server/models/bank.model";

export default defineEventHandler(async (event) => {
    const banks = await Bank.find();
    return banks
})