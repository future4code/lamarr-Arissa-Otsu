import { CustomError } from "../error/customError";
import { InsertMovieInputDTO } from "../model/movieDTO";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create(movie: InsertMovieInputDTO): Promise<void> {
    await MovieDatabase.connection
      .insert(movie)
      .into(MovieDatabase.TABLE_NAME);
  }

  getAll = async(): Promise<any> => {
    try {
        const result = await MovieDatabase.connection().select("*").from(MovieDatabase.TABLE_NAME)
        return result
    } catch (error:any) {
        throw new CustomError(error.statusCode, error.message)
    }
  }
}
