import { Router } from "express";
const router = Router();
import { addDriver, getDriverHistory } from "../controllers/driverController.js";
import { validate } from "../middlewares/validationHandler.js";

router.post("/", createDriverValidation, validate, addDriver);
router.get("/:id/history", getDriverHistory);

export default router;
