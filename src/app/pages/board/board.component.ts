import { Component, OnInit } from '@angular/core';
import { NativeWindowRefService } from "app/services/nativewindowref.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: any;

  constructor(
    private nativeWindowRefService: NativeWindowRefService
  ) { }

  ngOnInit() {

    let five = this.nativeWindowRefService.nativeWindow.DATA.five;
    this.board = new five.Board({repl:false});
    
    this.board.on('ready', () => {
           
    });

  }

}
