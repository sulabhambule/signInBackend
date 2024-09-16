import { Router } from "express";
import {
  loginUser,
  refreshAccessToken,
  registerUser,
} from "../controller/user.controller.js";

const router = Router();

router.route("/register").post(async (req, res, next) => {
  try {
    await registerUser(req, res);
  } catch (err) {
    next(err); // Pass errors to the global error handler
  }
});

router.route("/login").post(async (req, res, next) => {
  try {
    await loginUser(req, res);
  } catch (err) {
    next(err); // Pass errors to the global error handler
  }
});

router.route("/refresh-token").post(async (req, res, next) => {
  try {
    await refreshAccessToken(req, res);
  } catch (err) {
    next(err); // Pass errors to the global error handler
  }
});

export default router;
