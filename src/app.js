import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS configuration
app.use(
  cors({
    // origin: "https://sign-in-frontend-six.vercel.app",
    origin: "*",
    credentials: true, // Allow cookies and authentication information
    optionSuccessStatus:200

  })
);  

app.options('*', cors()); // Pre-flight requests


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
