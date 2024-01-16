import { ApplicationConfig } from '@angular/core';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import { provideRouter } from '@angular/router';

/* Modules */
import { routes } from './app.routing.module';

/* Interceptors */
import { authInterceptor } from './core/interceptors/auth'
import { loggingInterceptor } from './core/interceptors/logging'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([loggingInterceptor, authInterceptor]),
    )
  ]
};
