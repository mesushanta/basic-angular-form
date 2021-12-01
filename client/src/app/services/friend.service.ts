import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Friend } from "../../Interface/Friend";
import { Friend as FriendModel } from "../models/friend";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}
@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private apiUrl = 'http://localhost:6969/api/friends';
  constructor(private http: HttpClient) { }

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(this.apiUrl);
  }

  updateFriendAsBest(friend: Friend): Observable<Friend> {
    const url = `${this.apiUrl}/${friend._id}`;
    return this.http.put<Friend>(url, friend, httpOptions);
  }

  addNewFriend(friend:FriendModel): Observable<FriendModel> {
    // return this.http.post<FriendModel>(this.apiUrl,friend, httpOptions);
    return this.http.post<FriendModel>('http://localhost:6969/api/friend/add',friend, httpOptions);
  }

  newPost() {
    return this.http.post('http://localhost:6969/api/friend/add','' ,httpOptions);
  }

}
