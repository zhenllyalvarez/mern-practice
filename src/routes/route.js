import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("This is the mern practice routing");
});

router.post('/', (req, res) => {
    res.status(201).json({message: "sucessfully created post"});
});

export default router;