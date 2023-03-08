import { CustomError } from "../errors/CustomError";
import { User, stringToUserRole } from "../model/User";
import { IHashGenerator, IIdGenerator, ITokenGenerator } from "./ports";
import { UserRepository } from "./UserRepository";


export class UserBusiness {
   constructor(
      private userDatabase: UserRepository,
      private hashGenerator: IHashGenerator,
      private idGenerator: IIdGenerator,
      private tokenGenerator: ITokenGenerator
      ) {}

   public async signup(
      name: string,
      email: string,
      password: string,
      role: string
   ) {
      try {
         if (!name || !email || !password || !role) {
            throw new CustomError(422, "Missing input");
         }

         if (email.indexOf("@") === -1) {
            throw new CustomError(422, "Invalid email");
         }

         if (password.length < 6) {
            throw new CustomError(422, "Invalid password");
         }

         const id = this.idGenerator.generate();

         const cypherPassword = await this.hashGenerator.hash(password);

         await this.userDatabase.createUser(
            new User(id, name, email, cypherPassword, stringToUserRole(role))
         );

         const accessToken = this.tokenGenerator.generate({
            id,
            role,
         });
         return { accessToken };
      } catch (error:any) {
         if (error.message.includes("key 'email'")) {
            throw new CustomError(409, "Email already in use")
         }

         throw new CustomError(error.statusCode, error.message)
      }

   }

   public async login(email: string, password: string) {

      try {
         if (!email || !password) {
            throw new CustomError(422, "Missing input");
         }

         const user = await this.userDatabase.getUserByEmail(email);

         if (!user) {
            throw new CustomError(401, "Invalid credentials");
         }

         const isPasswordCorrect = await this.hashGenerator.compareHash(
            password,
            user.getPassword()
         );

         if (!isPasswordCorrect) {
            throw new CustomError(401, "Invalid credentials");
         }

         const accessToken = this.tokenGenerator.generate({
            id: user.getId(),
            role: user.getRole(),
         });

         return { accessToken };
      } catch (error:any) {
         throw new CustomError(error.statusCode, error.message)
      }
   }

   public async getUserById(id: string) {
      const user = await this.userDatabase.getUserById(id);

      if (!user) {
         throw new CustomError(404, "User not found");
      }

      return {
         id: user.getId(),
         name: user.getName(),
         email: user.getEmail(),
         role: user.getRole(),
      };
   }
}

