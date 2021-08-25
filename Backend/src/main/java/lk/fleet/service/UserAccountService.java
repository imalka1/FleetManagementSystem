package lk.fleet.service;

import lk.fleet.dto.BookingManagementClerkDTO;
import lk.fleet.dto.TransportManagerDTO;
import lk.fleet.dto.UserAccountDTO;
import lk.fleet.dto.VehicleDriverManagementClerkDTO;
import lk.fleet.entity.*;

public interface UserAccountService {

    UserAccountDTO addGeneralManagerUserAccount(UserAccount userAccount);

    UserAccountDTO updateGeneralManagerUserAccount(String employeeID, UserAccount userAccount);

    TransportManagerDTO addTransportManagerUserAccount(TransportManager transportManager);

    BookingManagementClerkDTO addBookingManagementClerkUserAccount(BookingManagementClerk bookingManagementClerk);

    boolean deleteUserAccount(String employeeID);



    VehicleDriverManagementClerkDTO addVehicleDiverManagementClerkUserAccount(VehicleDriverManagementClerk vehicleDriverManagementClerk);

    TransportManagerDTO updateTransportManagerAccount(String transportManagerId, TransportManager transportManager);

    BookingManagementClerkDTO updateBookingManagementClerkAccount(String bookingManagementClerkId, BookingManagementClerk bookingManagementClerk);

    VehicleDriverManagementClerkDTO updateVehicleDiverManagementClerkAccount(String vehicleDriverManagementId, VehicleDriverManagementClerk vehicleDriverManagementClerk);

    UserAccountDTO login(UserAccount userAccount);

    Object addAccidentMaintenanceManagerUserAccount(AccidentMaintenanceManager accidentMaintenanceManager);
}
