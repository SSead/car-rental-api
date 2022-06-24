import { handlePromise } from "../../helper";
import db from "../db-client";

const create = async (data) => {
  const [, err] = await handlePromise(db("brands").insert(data));
  if (err !== null) {
    return [null, err];
  }

  return [null, null];
};

const getAll = async () => {
  const [brands, err] = await handlePromise(db("brands"));
  if (err !== null) {
    return [null, err];
  }

  return [brands, null];
};

const getById = async (id) => {
  const [brand, err] = await handlePromise(
    db("brands").where("id", id).first()
  );
  if (err !== null) {
    return [null, err];
  }

  return [brand, null];
};

const update = async (id, data) => {
  const [, err] = await handlePromise(
    db("brands").update(data).where("id", id)
  );
  if (err !== null) {
    return [null, err];
  }

  return [null, null];
};

const BrandService = { create, getAll, getById, update };
export default BrandService;
