import express from "express";
import BrandService from "../services/brand-service";
import { dbError, successResponse } from "../../helper";

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const [brand, err] = await BrandService.getById(req.path.id);
  if (err != null) {
    next(dbError(err));
    return;
  }

  next(successResponse(brand));
});

router.get("all", async (req, res, next) => {
  const [brands, err] = await BrandService.getAll();
  if (err != null) {
    next(dbError(err));
    return;
  }

  next(successResponse(brands));
});

router.post("/", async (req, res, next) => {
  const [, err] = await BrandService.create(req.body);
  if (err != null) {
    next(dbError(err));
    return;
  }

  next(successResponse(null));
});

router.put("/:id", async (req, res, next) => {
  const [, err] = await BrandService.update(req.path.id, req.body);
  if (err != null) {
    next(dbError(err));
    return;
  }

  next(successResponse(null));
});

export default router;
