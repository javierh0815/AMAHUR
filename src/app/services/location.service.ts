import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { Comuna } from '../models/apiComuna';
import { Region } from '../models/apiRegion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  async getRegion(){
    return await lastValueFrom(this.http.get<ApiResponse<Region>>(`${environment.apiUrl}region`));
  }

  async getComuna(idRegion:number){
    return await lastValueFrom(this.http.get<ApiResponse<Comuna>>(`${environment.apiUrl}comuna` + idRegion));
  }
}
