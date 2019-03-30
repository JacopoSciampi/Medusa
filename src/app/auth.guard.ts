import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { HttpService } from "../shared/services/http-service";
import { iLogin } from "../shared/interfaces/iLogin";
import { iLoginResponse } from "../shared/interfaces/iResponse";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private httpService: HttpService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const data = JSON.parse(localStorage.getItem("loginData"));

    if (!!data && !!data.username && !!data.password) {
      const loginData: iLogin = {
        username: data.username,
        password: data.password
      };

      this.httpService.login(loginData).subscribe((res: any) => {
        const resp = JSON.parse(res._body) as iLoginResponse;
        if (resp.status == "ok") {
          this.router.navigate(["dashboard"]);
          return true;
        } else {
          this.router.navigate(["login"]);
          return false;
        }
      });
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
