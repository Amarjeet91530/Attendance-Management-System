import { Router } from "express";
import {
  createAttendance,
  getAttendance,
  updateAttendance
} from "../controllers/attendanceController.js";

const router = Router();

router.get("/", getAttendance);
router.post("/", createAttendance);
router.put("/:id", updateAttendance);

export default router;
