import { validateCnpjAndGetItFormatted } from "../utils/document-validator";
import { User } from "./user";


export class Merchant extends User {
    private cnpj: string;
    
    constructor(
        fullName: string,
        email: string,
        password: string,
        cnpj: string
        
      ) {
          super(fullName, email, password);
          this.cnpj = validateCnpjAndGetItFormatted(cnpj);
      }
}