import { tap } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpPostInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clonedReq = req.clone({
      headers: req.headers.append('plus-header-intreceptor','true'),
      params: req.params.set('_limit','15')
    })
    return next.handle(clonedReq)
              .pipe(
                tap(event => {
                  if (event.type === HttpEventType.Response) {
                    console.log('Event interceptor:', event)
                  }
                })
              )
  }

}
