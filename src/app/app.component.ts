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
    'https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=1';
  // json: object = {};
  // JsonObj: obj = { total_count: 1, incomplete_results: true, items: Array() };
  img: string = '';
  userName: string = '';
  repoName: string = '';
  repoDes: string = '';
  repoStars: string = '';
  repoIssue: string = '';
  repoUpdate: string = '';
  repoUpdateTime: number = 0;
  time: number = 0;
  constructor(private http: HttpClient) {
    this.http
      .get(this.url)
      .toPromise()
      .then((data: any) => {
        this.img = data.items[0].owner.avatar_url;
        this.repoName = data.items[0].name;
        this.repoDes = data.items[0].description;
        this.repoStars = data.items[0].stargazers_count;
        this.repoIssue = data.items[0].open_issues;
        this.userName = data.items[0].owner.login;
        this.repoUpdate = data.items[0].updated_at;
        this.time = Date.now();
        // console.log(this.time);
        // console.log(Number(new Date(this.repoUpdate)));
        var currentDate = new Date();
        currentDate.getHours();
        this.repoUpdateTime = currentDate.getHours();
        -Number(new Date(this.repoUpdate));
        // console.log(this.repoUpdateTime);
      });
  }
}
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
// interface obj {
//   total_count: number;
//   incomplete_results: boolean;
//   items: object[];
// }
