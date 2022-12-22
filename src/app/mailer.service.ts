import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(
    public http: HttpClient) {
  }

  public orderForm(order: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/orderForm', order)
  }
}
