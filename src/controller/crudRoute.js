import mern from "../models/mern.js";

export async function getAlldata(req, res) {
    // res.status(200).send("This is the mern practice routing");
    try {
        const getmern = await mern.find();
        res.status(200).json(getmern);
    } catch (error) {
        console.log("Error in getAlldata controller");
        res.status(500).json({ message: "Internal server error" });
    }
}

export function createData(req, res) {
    // res.status(201).json({ message: "Data added successfully!"});
    try {
        const { title, content } = req.body;
    } catch (error) {
        console.log("Error in creatingData controller");
        res.status(500).json({ message: "Internal server error" });
    }
}

export function updateData(req, res) {
    res.status(200).send("Successfully update data!");
}

export function deleteData(req, res) {
    res.status(200).send("Successfully deleted the data!");
}