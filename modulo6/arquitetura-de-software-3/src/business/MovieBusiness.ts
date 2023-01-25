import { MovieDatabase } from "../data/MovieDatabase"
import { invalidData } from "../error/movieError"
import { InsertMovieInputDTO, MovieInputDTO } from "../model/movieDTO"
import { generateId } from "../services/idGenerator"


export class MovieBusiness {
  async create(input: MovieInputDTO):Promise<void> {
    const { title, description, durationInMinutes, yearOfRelease } = input

    if (!title || !description || !durationInMinutes || !yearOfRelease) {
      throw new invalidData()
    }

    const id = generateId()

    const movie: InsertMovieInputDTO = {
      id,
      title,
      description, 
      duration_in_minutes: durationInMinutes,
      year_of_release: yearOfRelease
    }
    const movieDatabase = new MovieDatabase()
    await movieDatabase.create(movie)
  }

  getAll = async (): Promise <any> => {
    const movies = await new MovieDatabase().getAll()
    return movies
  }
}
