import { Component, OnInit } from "@angular/core";
import { HttpService } from "../shared/services/http-service";
import { iLoginResponse } from "../shared/interfaces/iResponse";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public loginMessage: string;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService
      .login({ username: "ciao", password: "ciaone" })
      .subscribe((res: any) => {
        const data = JSON.parse(res._body) as iLoginResponse;
        this.loginMessage = data.message;
      });
  }
}
