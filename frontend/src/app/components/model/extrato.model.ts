export interface Extrato {    
    data: string; //new Date().toLocaleString()
    valor: number;
    tipoOperacao:string;
    hashOrigem:string;
}