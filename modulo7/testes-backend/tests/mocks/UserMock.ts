import { User, USER_ROLES } from "../../src/model/User";

export const userMock = new User (
    "id",
    "Luna",
    "email",
    "123456",
    USER_ROLES.ADMIN
)