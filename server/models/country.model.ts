import { Schema, model } from "mongoose";

const CountrySchema = new Schema({
    name: {
        required: true,
        type: String
    },
})

export const Country = model('Country', CountrySchema)