import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import { urlLogin, urlServerList } from "../config/url";
import { iLogin } from "../interfaces/iLogin";

@Injectable()
export class HttpService {
  constructor(private http: Http) {}

  public login(loginData: iLogin) {
    return this.http.post(urlLogin, JSON.stringify(loginData));
  }

  public getServerList() {
    return this.http.get(urlServerList);
  }
}
