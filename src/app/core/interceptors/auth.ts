import {inject} from "@angular/core";
import { HttpRequest, HttpHandlerFn } from "@angular/common/http";

import { AuthService } from '../services/auth/auth.service'

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  // Inject the current `AuthService` and use it to get an authentication token:
  const authToken = inject(AuthService).getAuthToken();

  // Clone the request to add the authentication header.
  const newReq = req.clone({
    url: `http://localhost:3000/api/${req.url}`,
  });

  newReq.headers.set('Authorization', `Bearer ${authToken}`);

  return next(newReq);
}
