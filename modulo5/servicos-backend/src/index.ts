import { app } from "./app";
import createUser from "./endpoints/createUser";
import getAddress from "./endpoints/getAddress";

app.post("/users/create", createUser);
app.get("/address", getAddress);