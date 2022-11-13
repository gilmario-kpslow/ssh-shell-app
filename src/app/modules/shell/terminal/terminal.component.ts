import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Quadrado } from './quadrado';
import { TerminalService } from '../terminal.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  largura = 600;
  altura = 600;
  context: CanvasRenderingContext2D | null | undefined;

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>| undefined;

  constructor(private service: TerminalService) { }

  ngOnInit(): void {
    // this.context = this.canvas?.nativeElement.getContext('2d');
    // this.animate();
  }

  animate(): void {
    if(!this.context) {
      return;
    }

    this.context.fillStyle = 'red';
    this.context.fillRect(0, 0, 5, 5);

    const square = new Quadrado(this.context);
    square.draw(5, 1, 20);
  }

  conect() {
    this.service.iniciar();
  }

  messagem() {
    this.service.enviar('HI')
  }

}
