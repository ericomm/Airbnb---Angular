import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accommodation } from './accommodation.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListHotelsService {
  public constructor(private httpClient: HttpClient){}
  
  public getAccommodations(): Observable<Accommodation[]>{
    return this.httpClient.get<Accommodation[]>(environment.API_URL);
  }
}
