import express from "express";
import { getAlldata, createData, updateData, deleteData } from "../controller/crudRoute.js";

const router = express.Router();

router.get("/", getAlldata);
router.post("/", createData);
router.post("/:id", updateData);
router.delete("/:id", deleteData);

export default router;