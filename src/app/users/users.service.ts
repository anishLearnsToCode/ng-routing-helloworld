import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public canUserEditServer(serverId: number): boolean {
    return serverId === 3;
  }
}
