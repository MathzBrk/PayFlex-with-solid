import { DocumentType } from "./enum/document.type";
import { Transaction } from "./transaction";
import {User } from "./user";

export class UserCommon extends User{
    
    public transactionsSent: Transaction[] = [];
    public transactionsReceived: Transaction[] = [];

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