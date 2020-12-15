import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/model/transferencia.model';

@Component({
  selector: 'app-transferencia-view',
  templateUrl: './transferencia-view.component.html',
  styleUrls: ['./transferencia-view.component.css']
})
export class TransferenciaViewComponent implements OnInit {

  mock_transferencia:Transferencia ={
    data: new Date().toLocaleString(),
    valor: 20.00,
    
    contaOrigem: {
      hcode: '1534mf5ymI9r67yt33b4r5gr458ut8643cfd4b40e',
      cliente:{
        nome:'GREG STAN LEE',
        cpf:'430.056.059-50'
      },
    },
    contaDestino: {
      hcode: '12rt1534mf5r67yt33b4r58578ut8643cfd4b40e',
      cliente:{
        nome:'TERRY LEE MACLEITE',
        cpf:'130.126.859-75'
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
