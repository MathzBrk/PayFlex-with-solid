import { v4 as uuidv4 } from 'uuid';
import { DocumentType } from './enum/document.type';

export class User { 

    public id: string = uuidv4();  
    
    constructor(
      public readonly fullName: string,
      public email: string,
      public password: string,
      public document: string,
      public documentType: DocumentType
    ){}

}