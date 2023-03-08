import { IHashGenerator } from "../../src/business/ports";

export class HashGeneratorMock implements IHashGenerator {
    public hash = jest.fn (async(s: string) => {
        return "hash"
    })

    public compareHash = jest.fn (async(s: string, hash: string) => {
        return s === hash
    })
}