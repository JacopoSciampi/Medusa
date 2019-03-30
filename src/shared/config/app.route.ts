import { LoginComponent } from "../components/login/login.component";
import { Routes } from "@angular/router";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { AuthGuard } from "../../app/auth.guard";

export const RouteConfig: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    component: LoginComponent
  }
];
