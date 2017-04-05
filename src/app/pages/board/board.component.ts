import { Component, OnInit } from '@angular/core';
import { NativeWindowRefService } from "app/services/nativewindowref.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(
    private nativeWindowRefService: NativeWindowRefService
  ) { }

  ngOnInit() {

    let five = this.nativeWindowRefService.nativeWindow.DATA.five;
    let board = new five.Board();
    

  }

}
