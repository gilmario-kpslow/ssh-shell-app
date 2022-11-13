import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class TerminalService {

  private url = environment.websocket;
  private connection : any;

  iniciar() {
    if(this.connection) {
      return;
    }
    this.connection = new WebSocket(this.url + "/gilmario");

    this.connection.onopen = this.open;
    this.connection.onmessage = this.recebeMessagem;
    this.connection.onerror = this.error;
    this.connection.onclose = this.close;
  }

  open(info: any) {
    console.log(info.data);
  }

  recebeMessagem(info: any) {
    console.log(info.data);
  }

  error(info: any) {
    console.log(info);
  }

  close(info: any) {
    console.log(info);
  }

 enviar(messagem: string) {
  console.log(messagem);
  this.connection.send(messagem);
 }
}
