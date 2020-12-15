import { Component, OnInit } from '@angular/core';
import { Deposito } from 'src/app/model/deposito.model';

@Component({
  selector: 'app-deposito-view',
  templateUrl: './deposito-view.component.html',
  styleUrls: [ './deposito-view.component.css' ]
})
export class DepositoViewComponent implements OnInit {
  
  mock_deposito:Deposito ={
    data: '',
    valor: 45.00,    
    conta: {
      hcode: '12rt1534mf5r67yt33b4r58578ut8643cfd4b40e',
      cliente:{
        nome:'TERRY LEE MACLEITE',
        cpf:'130.126.859-75'
      },
      saldo:1250000
    }
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
