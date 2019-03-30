import { Component, OnInit } from "@angular/core";
import { HttpService } from "../shared/services/http-service";
import { iLoginResponse } from "../shared/interfaces/iResponse";

@Component({
  selector: "app-root",
  template: "<router-outlet></router-outlet>"
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit() {}
}
