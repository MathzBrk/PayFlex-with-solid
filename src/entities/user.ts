import { v4 as uuidv4 } from 'uuid';

export enum DocumentType {
  "CPF",
  "CNPJ"
}


export class User { 

    private id: string = uuidv4();  
    
    constructor(
      public readonly fullName: string,
      public email: string,
      public password: string,
      public document: string,
      public documentType: DocumentType
    ){}

}