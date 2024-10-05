import { Component, OnInit } from '@angular/core';
import { Ipost } from './shared/model/posts';
import { postArr } from './shared/const/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'postcard';
  postData! : Array<Ipost>

  ngOnInit(): void {
      this.postData = postArr;
  }
}
