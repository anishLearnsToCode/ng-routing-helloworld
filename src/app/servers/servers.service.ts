import {ArrayIndexOutOfBoundsException} from '../ArrayIndexOutOfBoundsException';
import {Server} from './Server.model';
import {ServerStatus} from './ServerStatus.enum';

export class ServersService {
  private servers: Server[] = [
    new Server(1, 'Production', ServerStatus.ONLINE),
    new Server(2, 'Test', ServerStatus.ONLINE),
    new Server(3, 'Development', ServerStatus.OFFLINE)
  ];

  public getServersAsync(): Promise<Server[]> {
    return new Promise<Server[]>(resolve => {
      return this.servers;
    });
  }

  public getServers(): Server[] {
    return this.servers;
  }

  public getServer(id: number) {
    if (id > this.servers.length) {
      throw new ArrayIndexOutOfBoundsException(id);
    }

    return this.servers[id - 1];
  }

  public updateServer(id: number, serverInfo: Server) {
    this.servers[id - 1] = serverInfo;
  }
}
