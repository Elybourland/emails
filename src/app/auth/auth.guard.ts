import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { take, skipWhile } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.signedin$.pipe(
      skipWhile(value => value === null),
      take(1),
      map(value => !!value)
    );
  }
}
