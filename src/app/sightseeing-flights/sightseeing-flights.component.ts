import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sightseeing-flights',
  templateUrl: './sightseeing-flights.component.html',
  styleUrls: ['./sightseeing-flights.component.scss']
})
export class SightseeingFlightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
