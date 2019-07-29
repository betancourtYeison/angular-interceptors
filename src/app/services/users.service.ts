import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    let params = new HttpParams().append("page", "2");
    params = params.append("name", "Yeison");

    return this.http
      .get("https://reqres.in/api/user", { params })
      .pipe(map((response: any) => response.data));
  }
}
