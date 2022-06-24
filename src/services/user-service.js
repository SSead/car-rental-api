import { handlePromise } from "../../helper";
import db from "../db-client";

const create = async (data) => {
  const [, err] = await handlePromise(db("users").insert(data));
  if (err !== null) {
    return [null, err];
  }

  return [null, null];
};

const getAll = async () => {
  const [users, err] = await handlePromise(db("users"));
  if (err !== null) {
    return [null, err];
  }

  return [users, null];
};

const getById = async (id) => {
  const [user, err] = await handlePromise(db("users").where("id", id).first());
  if (err !== null) {
    return [null, err];
  }

  return [user, null];
};

const update = async (id, data) => {
  const [, err] = await handlePromise(db("users").update(data).where("id", id));
  if (err !== null) {
    return [null, err];
  }

  return [null, null];
};

const UserService = { create, getAll, getById, update };
export default UserService;
