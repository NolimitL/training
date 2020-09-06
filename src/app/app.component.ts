import { Component, OnChanges, AfterViewChecked } from '@angular/core';
import { AuthService } from './services/auth.service';
import { HTTPPostService } from './services/http-post.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked{

  howMuch:number

  constructor(
    protected authService: AuthService,
    private httpService:HTTPPostService,

    private title: Title,       // для изменения title
    private metaTags: Meta      // для создания мета тегов
  ){
    title.setTitle('My Application')
    metaTags.addTag({
      name:'search-keys', content:'angular, work, application'
    })
  }

  ngAfterViewChecked(): void {
    this.httpService.setHowMuch(this.howMuch)
  }
}
