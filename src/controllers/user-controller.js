import express from "express";
import UserService from "../services/user-service";
import { dbError, successResponse } from "../../helper";

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const [brand, err] = await UserService.getById(req.path.id);
  if (err != null) {
    next(dbError(err));
    return;
  }

  next(successResponse(brand));
});

router.get("all", async (req, res, next) => {
  const [brands, err] = await UserService.getAll();
  if (err != null) {
    next(dbError(err));
    return;
  }

  next(successResponse(brands));
});

router.post("/", async (req, res, next) => {
  const [, err] = await UserService.create(req.body);
  if (err != null) {
    next(dbError(err));
    return;
  }

  next(successResponse(null));
});

router.put("/:id", async (req, res, next) => {
  const [, err] = await UserService.update(req.path.id, req.body);
  if (err != null) {
    next(dbError(err));
    return;
  }

  next(successResponse(null));
});

export default router;
