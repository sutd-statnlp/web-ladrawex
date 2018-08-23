import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';

export const DEBUG_INFO_ENABLED: boolean = environment.debugInfoEnabled;

export const API_URL = environment.apiUrl;

export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
