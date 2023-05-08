import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  commonApiUrl: string = 'http://localhost:3000/videos';

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get<any>(this.commonApiUrl);
  }

  postData(data: any) {
    console.log(data)
    return this.http.post<any>(this.commonApiUrl, data);
  }
}
