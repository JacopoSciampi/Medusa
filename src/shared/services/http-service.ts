import { Http, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";

import { urlLogin } from "../config/url";
import { iLogin } from "../interfaces/iLogin";

@Injectable()
export class HttpService {
  constructor(private http: Http) {}

  public login(loginData: iLogin) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(urlLogin, JSON.stringify(loginData));
  }
}
