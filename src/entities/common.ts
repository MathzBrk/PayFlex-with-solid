import { DocumentType, User } from "./user";

export class UserCommon extends User{
    
    constructor(
        fullName: string,
        email: string,
        password: string,
        document: string,
        documentType: DocumentType
        
      ) {
          super(fullName, email, password, document, documentType);
      }
}