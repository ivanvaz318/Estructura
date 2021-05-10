import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../implementation/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(
    private http: HttpClientService,
  ) { }

  verpaises(){
    this.http
    .get(`${environment.paises}all`)
    .subscribe(
      (res: any) => {
        console.log(res);
        
      }

    );
    
  }
}
