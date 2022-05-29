import express from "express";

import { createUser, loginUser } from "./controllers/userController.js";

import {
  createDrawing,
  editDrawing,
  getDrawings,
} from "./controllers/drawingController.js";

const router = express.Router();

// users
router.post("/users", createUser);
router.put("/users/login", loginUser);

// drawings
router.post("/drawings", createDrawing);
router.put("/drawings", editDrawing);
router.get("/drawings", getDrawings);

export default router;
