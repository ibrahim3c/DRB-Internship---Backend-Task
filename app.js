import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import userRoutes from "./routes/userRoutes";
import errorMiddleware from "./middlewares/errorMiddleware";

const app = express();

// Middleware
app.use(json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/users", userRoutes);

// Error Handling
app.use(errorMiddleware);

export default app;
