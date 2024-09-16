import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js"; // 

const app = express();

app.use(
  cors({
    origin: "https://sign-in-frontend-delta.vercel.app", 
    methods: ["POST", "GET"], 
    credentials: true, 
  })
);

app.options('*', cors());


app.use(express.json({ limit: "16kb" })); 
app.use(express.urlencoded({ extended: true, limit: "16kb" })); 
app.use(express.static("public")); 
app.use(cookieParser()); 


app.use("/api/v1/users", userRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "An internal error occurred!",
    error: err.message,
  });
});

// Exporting the app
export { app };
