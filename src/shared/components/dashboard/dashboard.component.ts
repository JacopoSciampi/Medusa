import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashbaord",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public remove: string;
  ngOnInit() {
    this.remove = "Ewway";
  }
}
