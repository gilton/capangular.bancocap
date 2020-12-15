import { Component, OnInit } from '@angular/core';
import { Deposito } from 'src/app/model/deposito.model';
import { Extrato } from 'src/app/model/extrato.model';
import { Saque } from 'src/app/model/saque.model';
import { Transferencia } from 'src/app/model/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl:'./extrato.component.html' ,
  styleUrls: [ './extrato.component.css'  ]
})
export class ExtratoComponent implements OnInit {

  dataAgora = new Date().toLocaleDateString();

  extrato: Extrato = {data: '', valor: 0, tipoOperacao: '', hashOrigem: ''};

  saque: Saque ={
    data: '09/11/2020 10:28:42',
    valor: 50,
    conta: {
      hcode: '2hr4157bf75ry20733a9a4853be98643cfd4b40e',
      cliente:{
        nome:'IGOR VIANA ANDRADE',
        cpf:'823.452.389-22'
      },
      saldo:1000000
    }
  }

  deposito: Deposito ={
    data: '14/08/2020 13:14:32',
    valor: 1700,    
    conta: {
      hcode: '2hr4157bf75ry20733a9a4853be98643cfd4b40e',
      cliente:{
        nome:'LEONICE SILVA COSTA',
        cpf:'123.126.579-17'
      },
      saldo:5000000
    }
  }

  transferencia: Transferencia ={
    data: '22/10/2020 17:35:10',
    valor: 120,    
    contaOrigem: {
      hcode: '2hr4157bf75ry20733a9a4853be98643cfd4b40e',
      cliente:{
        nome:'PAULO RICARDO PEREIRA',
        cpf:'093.456.099-77'
      },
      saldo:700000
    },
    contaDestino: {
      hcode: '478ik57b6re432473bh54485po098321wfd4abf4',
      cliente:{
        nome:'SUSAN GRAND VOLTIER',
        cpf:'453.346.709-12'
      },
      saldo:1200000
    }
  }

  columnDefs = [    
    { field: 'data', sortable: true, filter: true  },
    { field: 'valor', sortable: true, filter: true },
    { field: 'tipoOperacao', sortable: true, filter: true },
    { field: 'hashOrigem', sortable: true, filter: true }
  ];

  rowData : Array<Extrato> = [
    {data: this.saque.data, valor: this.saque.valor, tipoOperacao: 'Saque', hashOrigem:this.saque.conta.hcode},
    {data: this.deposito.data, valor: this.deposito.valor, tipoOperacao: 'Depósito', hashOrigem:this.deposito.conta.hcode},
    {data: this.transferencia.data, valor: this.transferencia.valor, tipoOperacao: 'Transferência', hashOrigem:this.transferencia.contaOrigem.hcode}
  ];

  constructor() { }

  ngOnInit(): void {
  } 

}
