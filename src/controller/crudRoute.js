import mern from "../models/mern.js";

export async function getAlldata(req, res) {
    // res.status(200).send("This is the mern practice routing");
    try {
        
    } catch (error) {
        
    }
}

export function createData(req, res) {
    res.status(201).json({ message: "Data added successfully!"});
}

export function updateData(req, res) {
    res.status(200).send("Successfully update data!");
}

export function deleteData(req, res) {
    res.status(200).send("Successfully deleted the data!");
}