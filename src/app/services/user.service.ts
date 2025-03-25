import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();

  getUsers(): Observable<any[]> {
    return this.users$;
  }

  addUser(user: any) {
    const currentUsers = this.usersSubject.getValue();
    const updatedUsers = [...currentUsers, user];
    this.usersSubject.next(updatedUsers);
  }
}
