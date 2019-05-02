import {ServerStatus} from './ServerStatus.enum';

export class Server {
  public id: number;
  public name: string;
  public status: ServerStatus;

  constructor(id: number, name: string, status: ServerStatus) {
    this.id = id;
    this.name = name;
    this.status = status;
  }

  public static mapToServerStatus(status: 'Online' | 'Offline'): ServerStatus {
    switch (status) {
      case 'Online': return ServerStatus.ONLINE;
      case 'Offline': return ServerStatus.OFFLINE;
    }
  }

  public getStatus(): 'Online' | 'Offline' {
    switch (this.status) {
      case ServerStatus.OFFLINE: return 'Offline';
      case ServerStatus.ONLINE: return 'Online';
    }
  }

}
