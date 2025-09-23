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

export async function createData(req, res) {
    // res.status(201).json({ message: "Data added successfully!"});
    try {
        const { title, content } = req.body;
        const newData = new mern({ title: title, content: content });

        await newData.save();
        res.status(201).json({ message: "Data Successfully created!" });
        // if(newData) {

        // } else {

        // }
    } catch (error) {
        console.log("Error in creatingData controller");
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateData(req, res) {
    // res.status(200).send("Successfully update data!");

    try {
        const { title, content } = req.body;
        const updateData = new mern({ title: title, content: content });
        const userID = req.params.id;
        const user = await updateData.findByID(userID);

        if(!user) {
            
        } else {
            res.json({ message: "Failed to update the data!" });
        }
    } catch (error) {
        res.json({ message: "Internal error in updateData in controller!" });
    }
}

export function deleteData(req, res) {
    res.status(200).send("Successfully deleted the data!");
}