import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';

@Injectable()
export class ConfigService {

  getConfirmUrl(): string {
    return environment.confirmUrl;
  };

  getPactUrl(): string {
    return environment.pactUrl;
  };

  getTurnUrl(): string {
    return environment.turnUrl;
  };
}
