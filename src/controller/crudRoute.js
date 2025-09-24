import mern from "../models/mern.js";

export async function getAlldata(req, res) {
    // res.status(200).send("This is the mern practice routing");
    try {
        const getmern = await mern.find();
        res.status(200).json(getmern);
    } catch (error) {
        console.log("Error in getAlldata controller");
        res.status(500).json({ message: "Internal server error!" });
    }
}

export async function getOneData(req, res) {
    try {
        const userId = req.params.id;
        const getData = await mern.findById(userId);

        if(!getData) {
            return res.status(404).json({ message: "Data not found!" });
        } else {
            return res.status(200).json(getData);
        }
    } catch (error) {
        console.log("Error in getOneData controller");
        res.status(500).json({ message: "Internal server error!"});
    }
}

export async function createData(req, res) {
    // res.status(201).json({ message: "Data added successfully!"});
    try {
        const { title, content } = req.body;
        const newData = new mern({ title: title, content: content });

        await newData.save();
        if(newData) {
            return res.status(201).json({ message: "Data Successfully created!" });
        }
    } catch (error) {
        console.log("Error in creatingData controller");
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateData(req, res) {
    // res.status(200).send("Successfully update data!");
    try {
        const { title, content } = req.body;
        const userID = req.params.id;
        const user = await mern.findByIdAndUpdate(
            userID,
            { title, content },
            { new: true },
        );

        if(!user) {
            return res.status(404).json({ message: "Data not found!" });
        } else {
            return res.status(200).json({ message: "Successfully updated data!", user });
        }
    } catch (error) {
        res.json({ message: "Internal error in updateData in controller!" });
    }
}

export async function deleteData(req, res) {
    // res.status(200).send("Successfully deleted the data!");
    try {
        const deletedata = req.params.id;
        const userData = await mern.findByIdAndDelete(deletedata);

        if(!userData) {
            return res.status(404).json({ message: "No data found to delete!" });
        } else {
            return res.status(200).json({ message: "Successfully deleted the data!" });
        }
    } catch (error) {
        res.json({ message: "Internal error in deleteData in controller!" });
    }
}