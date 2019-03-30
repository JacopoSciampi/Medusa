import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { trigger } from "@angular/core";
import { transition } from "@angular/core";
import { style } from "@angular/core";
import { animate } from "@angular/core";
import { HttpService } from "../../services/http-service";
import "rxjs/add/operator/takeWhile";
import { IServerList } from "../../interfaces/iServerList";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateY(-100%)" }),
        animate("150ms ease-in", style({ transform: "translateY(0%)" }))
      ]),
      transition(":leave", [
        animate("150ms ease-in", style({ transform: "translateY(-100%)" }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  isShowingServerList = false;
  messageStatus: string;
  isAlive = true;
  actualServerSelected: IServerList;

  serverListData: any[] = [];

  constructor(private router: Router, private httpService: HttpService) {}

  public ngOnInit() {
    const data = JSON.parse(localStorage.getItem("loginData"));

    if (!!data && data.username && data.password) {
      this.router.navigate(["dashboard"]);
    }
  }

  toggleServerList() {
    this.isShowingServerList = !this.isShowingServerList;

    if (!this.isShowingServerList) {
      this.messageStatus = "";
      return;
    }

    this.messageStatus = "Loading servers, please wait...";
    this.httpService
      .getServerList()
      .takeWhile(() => this.isAlive)
      .subscribe(
        (data: any) => {
          this.serverListData = JSON.parse(data._body) as IServerList[];
          this.messageStatus = "";
        },
        () => {
          this.isShowingServerList = false;
          this.messageStatus = "Error retrieving the server list.";
        }
      );
  }

  public selectServer(server: IServerList) {
    this.isShowingServerList = false;
    this.actualServerSelected = server;
  }

  public ngOnDestroy() {
    this.isAlive = false;
  }
}
