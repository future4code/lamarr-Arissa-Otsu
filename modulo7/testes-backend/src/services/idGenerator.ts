import { v4 } from "uuid";
import { IIdGenerator } from "../business/ports";

export class IdGenerator implements IIdGenerator {
  public generate(): string {
    return v4();
  }
}

export default new IdGenerator()