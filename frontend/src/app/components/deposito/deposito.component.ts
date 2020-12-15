import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Deposito } from 'src/app/model/deposito.model';

@Component({
  selector: 'app-deposito',
  templateUrl:'./deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {  
  rotaNovoDeposito:string = '/depositos-view';
  submitted = false;
  dataAgora = new Date().toLocaleDateString();

  deposito: Deposito ={
    data: '',
    valor: 0,    
    conta: {
      hcode: '',
      cliente:{
        nome:'FERNANDO ANDRADE LEITE',
        cpf:'103.106.089-82'
      },
      saldo:1250000
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    this.submitted = true;
    
  } 
}
