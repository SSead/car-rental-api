import { handlePromise } from "../../helper";
import db from "../db-client";

const create = async (data) => {
  const [, err] = await handlePromise(db("cars").insert(data));
  if (err !== null) {
    return [null, err];
  }

  return [null, null];
};

const getAll = async () => {
  const [cars, err] = await handlePromise(db("cars"));
  if (err !== null) {
    return [null, err];
  }

  return [cars, null];
};

const getById = async (id) => {
  const [car, err] = await handlePromise(db("cars").where("id", id).first());
  if (err !== null) {
    return [null, err];
  }

  return [car, null];
};

const update = async (id, data) => {
  const [, err] = await handlePromise(db("cars").update(data).where("id", id));
  if (err !== null) {
    return [null, err];
  }

  return [null, null];
};

const CarService = { create, getAll, getById, update };
export default CarService;
