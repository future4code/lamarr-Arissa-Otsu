import { IIdGenerator } from "../../src/business/ports";

export class IdGeneratorMock implements IIdGenerator {
    public generate = jest.fn(()=> {
        return "id"
    }) 
}