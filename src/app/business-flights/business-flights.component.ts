import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-flights',
  templateUrl: './business-flights.component.html',
  styleUrls: ['./business-flights.component.scss']
})
export class BusinessFlightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
