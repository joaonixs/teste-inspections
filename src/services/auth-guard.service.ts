import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isAuthenticated: any;

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';

    if (!isAuthenticated) {
      this.router.navigate(['/auth']);
    }

    return isAuthenticated;
  }
}
