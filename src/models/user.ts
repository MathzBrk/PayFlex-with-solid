import { v4 as uuidv4 } from 'uuid';

export class User { 
    private id: string = uuidv4();
    constructor(
      private readonly fullName: string,
      private email: string,
      private password: string,
    ){}

}