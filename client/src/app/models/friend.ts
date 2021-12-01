export class Friend {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  favourite_language: string;
  is_best_friend: boolean;
  avatar: string;
  age?: number;

  constructor(first_name:string,last_name:string,email:string,phone: string,favourite_language:string,is_best_friend:boolean,avatar:string,age:number) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
    this.favourite_language = favourite_language;
    this.is_best_friend = is_best_friend;
    this.avatar = avatar;
    this.age = age;
  }
}
