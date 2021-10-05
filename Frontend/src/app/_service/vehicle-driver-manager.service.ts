import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleDriverManagerService {

  vehicle;
  vipmember;

  constructor(private http: HttpClient) {
  }

  addVehicle(vehicleDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/vehicle/addVehicle", vehicleDetail);
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

  deleteVehicle(vehicleDetail): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/vehicle/deleteVehicle/" + vehicleDetail);
  }

  addVipmember(vipmemberDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/vipMember/addVipMember", vipmemberDetail);

  }

  updateVipMember(vipmemberDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/vipMember/updateVipMember/" + vipmemberDetail.vipMemberId, vipmemberDetail);
  }

  getAllVipMembers(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vipMember/getAllVipMembers");
  }

  deleteVipMember(vipmemberDetail): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/vipMember/deleteVipMember/" + vipmemberDetail);
  }

  getVipMemberByNumber(vipMemberNo): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vipMember/getVipMemberByNumber/" + vipMemberNo);
  }

  // getDriver():Observable<any> {
  //   return this.http.get<any>(environment.backend_url + "/vipMember/getDriver");
  // }
  updateFuel(vehicleId, cFuel): Observable<any> {
    return this.http.get<any>(environment.backend_url + '/vehicle/fuelUpdate/' + vehicleId + '/' + cFuel);
  }

  addDriverVehicle(driverVehicle): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/driverVehicle/addDriverVehicle", driverVehicle);
  }

  deleteDriverVehicle(driverVehicle): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/driverVehicle/deleteDriverVehicle/" + driverVehicle.driver.driverID + "/" + driverVehicle.vehicle.vehicleId);
  }

  getDriverVehicles(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/driverVehicle/getDriverVehicles");
  }
//view driver requsets
  getDriverRequest():Observable<any>  {
    return this.http.get<any>(environment.backend_url + "/vehicle/getDriverRequest");

  }
//approval
  approveDriver(driverID, approval): Observable<any>  {
    return this.http.get<any>(environment.backend_url + "/vehicle/approveDriver/" + driverID + "/" + approval);

  }
  // approveUserAccount(employeeId, approval): Observable<any> {
  //   return this.http.get<any>(environment.backend_url + "/userAccount/approveUserAccount/" + employeeId + "/" + approval);
  // }
}
