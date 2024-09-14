import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173",
    // origin: process.env.CORS_ORIGIN,
    credentials: true, // Allow cookies and authentication information
    optionSuccessStatus:200

  })
);  

// Middleware setup
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));
app.use(cookieParser());

// Routes import
import userRouter from "./routes/user.routes.js";

// Routes declaration
app.use("/api/v1/users", userRouter);

export { app };
