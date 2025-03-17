import { validateCpfAndGetItFormatted } from "../utils/document-validator";
import { User } from "./user";

export class UserCommon extends User{
    private cpf: string;
    
    constructor(
        fullName: string,
        email: string,
        password: string,
        cpf: string
        
      ) {
          super(fullName, email, password);
          this.cpf = validateCpfAndGetItFormatted(cpf);
      }
}