import { Conta } from "./conta.model";

export interface Saque {    
    data: string; //new Date().toLocaleString()
    valor: number;
    conta: Conta;
}