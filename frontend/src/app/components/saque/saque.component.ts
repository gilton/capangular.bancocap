import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Saque } from 'src/app/model/saque.model';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {  
  rotaNovoSaque:string = '/saques-view';
  
  dataAgora = new Date().toLocaleDateString();
  submitted = false;

  saque: Saque ={
    data: '',
    valor: 0,    
    conta: {
      hcode: '',
      cliente:{
        nome:'WENDEL VALERIANO ROCHA',
        cpf:'204.205.155-42'
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
