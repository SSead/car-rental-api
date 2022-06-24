import "dotenv";

import express from "express";

import ResponseMiddleware from "./src/middleware/response.middleware";
import { successResponse } from "./helper";

import BrandController from "./src/controllers/brand-controller";
import CarController from "./src/controllers/car-controller";
import UserController from "./src/controllers/user-controller";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res, next) => {
  next(
    successResponse({
      message: "Welcome to car-rental-api",
    })
  );
});

app.use("/users", UserController);
app.use("/brands", BrandController);
app.use("/car", CarController);

app.use(ResponseMiddleware);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
