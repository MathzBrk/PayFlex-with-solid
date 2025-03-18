import { UserCommon } from "./common";
import { User } from "./user";

export class Transaction {
    constructor(
        public payer: UserCommon,
        public payee: User,
        public amount: number
    ){
        this.validateTransaction();
    }

    private validateTransaction() {
        if (this.amount <= 0) {
            throw new Error("Amount should be more than 0");
        }

        if (this.payer.id === this.payee.id) {
            throw new Error("Payer and payee must be different users");
        }
    }
}