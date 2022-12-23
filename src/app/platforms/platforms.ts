import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import * as AOS from "aos";

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.html',
  styleUrls: ['./platforms.scss']
})
export class Platforms implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
      AOS.refresh()
  }



}
