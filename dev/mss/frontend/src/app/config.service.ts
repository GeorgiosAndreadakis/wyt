import {Injectable} from '@angular/core';
import {environment} from './environments';

@Injectable()
export class ConfigService {

  static getConfirmUrl(): string {
    return environment.confirmUrl;
  };

  static getPactUrl(): string {
    return environment.pactUrl;
  };

  static getTurnUrl(): string {
    return environment.turnUrl;
  };
}
