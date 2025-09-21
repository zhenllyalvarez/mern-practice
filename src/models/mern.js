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

const mern = mongoose.model("mern", mernSchema);

export default mern;