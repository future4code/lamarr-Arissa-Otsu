import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieInputDTO } from "../model/movieDTO";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const title = req.body.title
      const description = req.body.description 
      const durationInMinutes = req.body.durationInMinutes 
      const yearOfRelease = req.body.yearOfRelease 

      const input: MovieInputDTO = {
        title,
        description,
        durationInMinutes,
        yearOfRelease
      }

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create(input);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const movies = await new MovieBusiness().getAll();
        res.send(movies).status(200);
    } catch (error:any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }
}
