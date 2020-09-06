import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppComponent } from './app.component';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule } from './router.module';
import { HttpPostInterceptor } from './services/http-post.interceptor';
import { WindowComponent } from './components/window/window.component';
import { RefDirective } from './components/window/ref.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const INTERCEPTOR_PROVIDER: Provider = {
  provide:HTTP_INTERCEPTORS,
  useClass:HttpPostInterceptor,
  multi:true
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomeComponent,
    WindowComponent,
    RefDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [INTERCEPTOR_PROVIDER],
  entryComponents:[WindowComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
