import express from "express";

import { createUser, loginUser } from "./controllers/userController.js";

import {
  createDrawing,
  deleteDrawing,
  editDrawing,
  getDrawing,
  getDrawings,
  getUserDrawings,
} from "./controllers/drawingController.js";

const router = express.Router();

// users
router.post("/users", createUser);
router.put("/users", loginUser);

// drawings
router.post("/drawings", createDrawing);
router.get("/drawings", getDrawings);
router.get("/drawings/me", getUserDrawings);
router.get("/drawings/:id", getDrawing);
router.delete("/drawings/:id", deleteDrawing);
router.put("/drawings/:id", editDrawing);
export default router;
