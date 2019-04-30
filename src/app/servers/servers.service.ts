import {ArrayIndexOutOfBoundsException} from '../ArrayIndexOutOfBoundsException';
import {Observable} from 'rxjs';
import {Server} from './Server.model';

export class ServersService {
  private servers: Server[] = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServersAsync(): Promise<Server[]> {
    return new Promise<Server[]>(resolve => {
      return this.servers;
    });
  }

  getServers(): Server[] {
    return this.servers;
  }

  getServer(id: number) {
    if (id > this.servers.length) {
      throw new ArrayIndexOutOfBoundsException(id);
    }

    return this.servers[id - 1];
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
