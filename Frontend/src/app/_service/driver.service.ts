import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  ot;
  driver;
  shiftDetails;
  vehicle;

  constructor(private http: HttpClient) {
  }

  addDriver(driverDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + '/driverAccount/addDriver', driverDetail);
  }

  addOT(addOT): Observable<any> {
    return this.http.post(environment.backend_url + '/overTime/addOT', addOT);
  }

  getOT(): Observable<any> {
    return this.http.get<any>(environment.backend_url + '/overTime/getOT');
  }

  getDriver(driverId): Observable<any> {
    return this.http.get<any>(environment.backend_url + '/driverAccount/getDriver/' + driverId);
  }

  updateOT(ot): Observable<any> {
    return this.http.put<any>(environment.backend_url + '/overTime/updateOT/' + ot.overTimeID, ot);
  }

  getShift(): Observable<any> {
    return this.http.get(environment.backend_url + '/shift/getShift');
  }

  deleteOT(otID): Observable<any> {
    return this.http.delete<any>(environment.backend_url + '/overTime/deleteOT/' + otID);
  }

  getMyOT(driverID):Observable<any>{
    return this.http.get<any>(environment.backend_url + '/overTime/getOTbyID/' + driverID);
  }

  deleteDriver(driverID) {
    return this.http.delete<any>(environment.backend_url + '/driverAccount/deleteDriver/' + driverID);
  }

  updateVehicle(vehicleDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/vehicle/updateVehicle/" + vehicleDetail.vehicleId, vehicleDetail);
  }

  getAllVehicles(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vehicle/getAllVehicles");
  }

  getVehicleByNumber(vehicleNumber): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vehicle/getVehicleByNumber/" + vehicleNumber);
  }
}
