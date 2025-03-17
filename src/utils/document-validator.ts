import {cnpj, cpf} from "cpf-cnpj-validator";
import { DocumentInvalid } from "../errors/document-invalid.error";
export const validateCnpjAndGetItFormatted = (cnpjUser: string) => {
     if(cnpj.isValid(cnpjUser)) {
        return cnpj.strip(cnpjUser);
     }
     else{
        throw new DocumentInvalid("CNPJ informed is invalid");
     }
}

export const validateCpfAndGetItFormatted = (cpfUser: string) => {
    if(cpf.isValid(cpfUser)) {
       return cpf.strip(cpfUser);
    }
    else{
       throw new DocumentInvalid("CPF informed is invalid");
    }
}