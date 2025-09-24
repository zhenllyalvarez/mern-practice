import express from "express";
import { getAlldata, getOneData, createData, updateData, deleteData } from "../controller/crudRoute.js";

const router = express.Router();

router.get("/", getAlldata);
router.get("/:id", getOneData);
router.post("/", createData);
router.post("/:id", updateData);
router.delete("/:id", deleteData);

export default router;