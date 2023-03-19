import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../model/user'

export class TokenGenerator {

    public generateToken = ({id, role}: AuthenticationData )   => {
        const token = jwt.sign(
            { id, role },
            process.env.JWT_KEY as string,
            { expiresIn: "1h" }
        )
        return token 
    }

    public tokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as jwt.JwtPayload

        return {id: payload.id as string, role: payload.role as string}
    }
}