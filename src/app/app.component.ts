import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gemography';
  url =
    'https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc';
  pageNumber: number = 1;
  arr: any = [];
  timeArr: string[] = [];
  calcTime = 0;
  calcTime2 = 0;
  now = 0;

  constructor(private http: HttpClient) {
    this.Onload();
  }
  // All functionality ---------------
  Onload() {
    this.http
      .get(this.url)
      .toPromise()
      .then((data: any) => {
        this.arr = data.items;
        var currentDate = new Date();
        this.now = currentDate.getHours();
        this.timeArr = [];
        for (const key in this.arr) {
          if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
            this.calcTime =
              this.now - Number(new Date(this.arr[key].updated_at));
            let ho = new Intl.DateTimeFormat('en', { hour: 'numeric' })
              .format(this.calcTime)
              .slice(0, 2);
            this.timeArr.push(ho);
          }
        }
        console.log(this.timeArr);
      });
  }
  Onclick2() {
    this.url = this.url + '&page=2';
    this.pageNumber = 2;
    this.Onload();
  }
  Onclick1() {
    this.url = this.url + '&page=1';
    this.pageNumber = 1;
    this.Onload();
  }
  Onclick3() {
    this.url = this.url + '&page=3';
    this.pageNumber = 3;
    this.Onload();
  }
  Onclick4() {
    this.url = this.url + '&page=4';
    this.pageNumber = 4;
    this.Onload();
  }
  Onclick5() {
    this.url = this.url + '&page=5';
    this.pageNumber = 5;
    this.Onload();
  }
  Onclick6() {
    this.url = this.url + '&page=6';
    this.pageNumber = 6;
    this.Onload();
  }
  OnclickN() {
    this.pageNumber++;
    this.url = this.url + `&page=${this.pageNumber}`;
    this.Onload();
    //we can set max number of pages to show in here !!
  }
  OnclickP() {
    if (this.pageNumber != 1) {
      this.pageNumber--;
      this.url = this.url + `&page=${this.pageNumber}`;
      this.Onload();
    }
  }
}
// json: object = {};
// JsonObj: obj = { total_count: 1, incomplete_results: true, items: Array() };
// time: number = 0;
// // console.log(data.items[key]);
// // this.arr.push(data.items[key]);
// this.img = data.items[key].owner.avatar_url;
// this.repoName = data.items[key].name;
// this.repoDes = data.items[key].description;
// this.repoStars = data.items[key].stargazers_count;
// this.repoIssue = data.items[key].open_issues;
// this.userName = data.items[key].owner.login;

// this.time = Date.now();
// console.log(data);
// for (const key in data) {
//   this.json.push(data);
// }
// console.log(this.json[0].items);
//  this.JsonObj= data;
// console.log(data.items[0].owner.avatar_url);
// console.log(data.items[0].name);
// console.log(data.items[0].description);
// console.log(data.items[0].stargazers_count);
// console.log(data.items[0].open_issues);
// console.log(data.items[0].updated_at);
// console.log(data.items[0]);
// console.log(this.repoUpdateTime);
// interface obj {
//   total_count: number;
//   incomplete_results: boolean;
//   items: object[];
// }

// let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
//   this.calcTime
// );
// let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(
//   this.calcTime
// );
// let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(
//   this.calcTime
// );

// img: string = '';
// userName: string = '';
// repoName: string = '';
// repoDes: string = '';
// repoStars: string = '';
// repoIssue: string = '';
// repoUpdate: string = '';
// repoUpdateTime: number = 0;
