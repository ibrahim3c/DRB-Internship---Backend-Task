import { Router } from "express";
const router = Router();
import {
  addRoute,
  getAllRoutes,
  getSchedule,
} from "../controllers/routeController.js";

router.post("/", addRoute);
router.post("/", createRouteValidation, validate, addRoute);
router.get("/", getAllRoutes);
router.get("/schedule", getSchedule);

export default router;
