import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transferencia } from 'src/app/model/transferencia.model';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: [ './transferencia.component.css' ]
})
export class TransferenciaComponent implements OnInit {

  rotaNovaTransferencia:string = '/transferencias-view';
  horaAgora = new Date().toLocaleDateString();
  submitted = false;

  transferencia: Transferencia ={
    data: '',
    valor: 0,    
    contaOrigem: {
      hcode: '',
      cliente:{ nome:'', cpf:'' },
      saldo:0
    },
    contaDestino: {
      hcode: '',
      cliente:{ nome:'', cpf:'' },
      saldo:0
    }
  }

  constructor() { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) { this.submitted = true; } 

}
