import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  providers: [MessageService]
})
export class FirstComponentComponent implements OnInit {
  public mensaje: String;

  constructor(private messageService: MessageService) {
    this.mensaje = 'Hola Mojon';
  }

  ngOnInit() {}

  test() {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Via MessageService'
    });
  }
}
