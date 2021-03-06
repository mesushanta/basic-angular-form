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

  getSingleFriend(id): Observable<Friend>{
    const singleUrl = `http://localhost:6969/api/update-best-friend/${id}`;
    return this.http.get<Friend>(singleUrl);
  }
  updateFriendAsBest(friend: Friend): Observable<Friend> {
    const url = `http://localhost:6969/api/update-best-friend/${friend._id}`;
    return this.http.put<Friend>(url, friend, httpOptions);
  }

  addNewFriend(friend:FriendModel): Observable<any> {
    return this.http.post<FriendModel>('http://localhost:6969/api/friend/add',friend, httpOptions);
  }

  newPost() {
    return this.http.post('http://localhost:6969/api/friend/add','' ,httpOptions);
  }

}
