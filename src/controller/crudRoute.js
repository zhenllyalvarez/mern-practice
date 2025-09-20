export function getAlldata(req, res) {
    res.status(200).send("This is the mern practice routing");
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