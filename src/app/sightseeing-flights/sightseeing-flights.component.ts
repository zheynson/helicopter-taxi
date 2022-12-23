import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-sightseeing-flights',
  templateUrl: './sightseeing-flights.component.html',
  styleUrls: ['./sightseeing-flights.component.scss']
})
export class SightseeingFlightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      AOS.init();
      AOS.refresh()
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
