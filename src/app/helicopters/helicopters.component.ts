import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helicopters',
  templateUrl: './helicopters.component.html',
  styleUrls: ['./helicopters.component.scss']
})
export class HelicoptersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
