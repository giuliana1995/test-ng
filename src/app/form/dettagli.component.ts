import { Component, OnInit } from '@angular/core';
import { call } from '../interface/interface';
import { CallService } from '../service/call.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {

  retur_dettagli: Array<call> = []
  constructor(public call: CallService) { }

  ngOnInit(): void {
    this.retur_dettagli = this.call.dati_dettagli_call;
  }

}
