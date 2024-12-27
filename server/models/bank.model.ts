import { Schema, model } from "mongoose";

const BankSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    country: {
        required: true,
        type: String
    },
})

export const Bank = model('Bank', BankSchema);