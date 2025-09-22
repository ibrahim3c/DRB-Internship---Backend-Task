import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import driverRoutes from "./routes/driverRoutes.js";
import routeRoutes from "./routes/routeRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(json());
app.use(cors());
app.use(helmet()); // more security
app.use(morgan("dev")); // for logging

// Routes
app.get("/api", (req, res) => res.send("Route Scheduling System API"));
app.use("/api/drivers", driverRoutes);
app.use("/api/routes", routeRoutes);

// global middleware for not found router
app.all("*", (req, res, next) => {
  return res
    .status(404)
    .json({
      status: httpStatusText.ERROR,
      message: "this resource is not available",
    });
});

// global error handler
app.use((error, req, res, next) => {
  res
    .status(error.statusCode || 500)
    .json({
      status: error.statusText || httpStatusText.ERROR,
      message: error.message,
      code: error.statusCode || 500,
      data: null,
    });
});

export default app;
