import mongoose from "mongoose";

// schema first -> model base on schema

const mernSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const mern = mongoose.Model("mern", mernSchema);

export default mern;