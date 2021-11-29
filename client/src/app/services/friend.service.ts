import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import { Friend } from "../../Interface/Friend";
import {Language} from "../../Interface/Language";
import {LANGUAGES} from "../mock-language";

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private apiUrl = 'http://localhost:4999/friends';
  constructor(private http: HttpClient) { }

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(this.apiUrl);
  }

}
