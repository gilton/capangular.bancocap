import { Conta } from "./conta.model";

export interface Deposito {    
    data: string; //new Date().toLocaleString()
    valor: number;
    conta: Conta;
}