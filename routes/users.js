import express from "express";
import {
  getAllUsers,
  createNewUser,
  getSpecificUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

// all routes
router.get("/", getAllUsers);

// Add data
router.post("/", createNewUser);

// Get data
// /users/2 => req.params
router.get("/:id", getSpecificUser);

// delete user
router.delete("/:id", deleteUser);

// Update specified user data
router.patch("/:id", updateUser);

export default router;
