import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

// import userRoutes from "./routes/userRoutes";
// import errorMiddleware from "./middlewares/errorMiddleware";

dotenv.config();
const app = express();

// Middleware
app.use(json());
app.use(cors());
app.use(helmet()); // more security
app.use(morgan("dev")); // for logging

// Routes
// app.use("/api/users", userRoutes);

// Error Handling
// app.use(errorMiddleware);

export default app;
