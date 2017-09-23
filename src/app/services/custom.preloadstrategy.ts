import { Observable } from 'rxjs';
import { PreloadingStrategy, Route } from '@angular/router';

export class CustomPreloadStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<boolean>): Observable<boolean> {
    return Observable.of(true).delay(12000).flatMap(() => fn());
  }
}