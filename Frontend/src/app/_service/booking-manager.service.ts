import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookingManagerService {

  shift;
  booking;
  specialBooking;
  vipBooking;

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getCurDate() {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  }

  addShift(shiftDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/booking/addDriverShift", shiftDetail);
  }

  updateShift(shiftDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/booking/updateDriverShift/" + shiftDetail.shiftId, shiftDetail);
  }

  deleteDriverShift(shiftId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/booking/deleteDriverShift/" + shiftId);
  }

  getDriveVehicles(driverId): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getDriverVehicles/" + driverId);
  }

  getAllShifts(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getDriverShifts");
  }

  getAllShiftsByDriver(driverId): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getDriverShiftsByDriverId/" + driverId);
  }
  getAllShiftsByVehicle(vehicleType): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getDriverShiftsByVehicleType/" + vehicleType);
  }



  addBooking(BookingDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/booking/addBooking" ,BookingDetail);
  }

  updateBooking(BookingDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/booking/updateBooking/" + BookingDetail.bookingId, BookingDetail);
  }

  deleteBooking(bookingId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/booking/deleteBooking/" + bookingId);
  }

  getAllBookings(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getBookings");
  }
  getBookingsByBookingId(bookingId): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/booking/getBookingsByBookingId/" + bookingId);
  }


  getBookingsByBookingManagementClerkId(bookingManagementClerkId: any) {
    return this.http.get<any>(environment.backend_url + "/booking/getBookingsByBookingManagementClerkId/" + bookingManagementClerkId);
  }

  addSpecialBooking(SpecialBookingDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/specialBooking/addSpecialBooking" ,SpecialBookingDetail);
  }
  updateSpecialBooking(SpecialBookingDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/specialBooking/updateSpecialBooking/" + SpecialBookingDetail.specialBookingId, SpecialBookingDetail);
  }

  deleteSpecialBooking(specialBookingId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/specialBooking/deleteSpecialBooking/" + specialBookingId);
  }

  getAllSpecialBooking(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/specialBooking/getSpecialBooking");
  }
  getSpecialBookingBySpecialBookingId(specialBookingId: any) {
    return this.http.get<any>(environment.backend_url + "/specialBooking/getSpecialBookingBySpecialBookingId/" + specialBookingId);
  }
  addVipBooking(VipBookingDetail): Observable<any> {
    return this.http.post<any>(environment.backend_url + "/vipBooking/addVipBooking" ,VipBookingDetail);
  }
  updateVipBooking(VipBookingDetail): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/vipBooking/updateVipBooking/" + VipBookingDetail.vipBookingId, VipBookingDetail);
  }

  deleteVipBooking(vipBookingId): Observable<any> {
    return this.http.delete<any>(environment.backend_url + "/vipBooking/deleteVipBooking/" + vipBookingId);
  }

  getAllVipBooking(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/vipBooking/getVipBooking");
  }


  getVipBookingByVipBookingId(vipBookingId: any) {
    return this.http.get<any>(environment.backend_url + "/vipBooking/getVipBookingByVipBookingId/" + vipBookingId);
  }
}
