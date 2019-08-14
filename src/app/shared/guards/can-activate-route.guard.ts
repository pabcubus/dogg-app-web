import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { AuthService } from '../../services/auth.service'

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.auth.getUserByToken();

    if (user) {
      return true;
    }
    
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}