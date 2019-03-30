import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from "@angular/platform-browser";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { HttpService } from "../shared/services/http-service";

import { AppComponent } from "./app.component";
import { LoginComponent } from "../shared/components/login/login.component";
import { RouteConfig } from "../shared/config/app.route";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "../shared/components/dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(RouteConfig)
  ],
  providers: [HttpService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
