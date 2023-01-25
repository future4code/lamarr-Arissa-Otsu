import {app} from "./app"
import { UserController } from "./controller/UserController"

app.get("/", async function(){
   console.log("endpoint teste")
})

const userController = new UserController()

app.post("/createUser", userController.createUser)

app.get("/all", userController.getAll)

app.delete("/:id", userController.deleteUser)
