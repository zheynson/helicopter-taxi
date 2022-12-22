import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MailerService} from "./mailer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  allHelicopter = ['AGUSTAWESTLAND AW109 GRAND', 'AGUSTAWESTLAND AW139', 'BELL 407',
    'BELL 429', 'EUROCOPTER AS350', 'EUROCOPTER AS355', 'EUROCOPTER EC130', 'EUROCOPTER EC135', 'ROBINSON R44', 'КА-32', 'МИ-8']
  heliForInput = '';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplayTimeout: 3100,
    smartSpeed: 3000,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      },
    },
    nav: false
  }
  form: FormGroup;

  constructor(
    private mailerService: MailerService ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      dateGo: new FormControl('', [
        Validators.required
      ]),
      timeGo: new FormControl('', [
        Validators.required
      ]),
      heliModel: new FormControl(`${this.heliForInput}`, [
        Validators.required
      ]),
      placeStart: new FormControl('', [
        Validators.minLength(4),
        Validators.required
      ]),
      placeEnd: new FormControl('', [
        Validators.required,
        Validators.min(4)
      ]),
      numberOfPassenger: new FormControl('', [
        Validators.required
      ]),
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      telephone: new FormControl('', [
        Validators.min(11),
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      card: new FormControl(''),
      bitcoin: new FormControl(''),
      dataSave: new FormControl('', [])
    })
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  submit() {
    const formData = this.form.value;
    console.log(formData)
    this.mailerService
      .orderForm(formData)
      .subscribe((res: any) => {
        console.log(res);
      })
    this.form.reset()

  }
  chooseHeli(lalo: any) {
    this.heliForInput = lalo;
  }

}
