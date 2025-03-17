export class DocumentInvalid extends Error {
    constructor(message: string){
        super(message);
        this.name = "DocumentInvalid";
    }
}