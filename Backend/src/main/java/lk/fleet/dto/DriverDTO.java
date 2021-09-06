package lk.fleet.dto;

import lk.fleet.entity.Driver;
import lk.fleet.entity.OverTime;

public class DriverDTO {
    private String driverID;
    private String lisenseID;
    private UserAccountDTO userAccount;

    public DriverDTO(String driverID, String lisenseID) {
        this.driverID = driverID;
        this.lisenseID = lisenseID;
    }

    public DriverDTO(Driver driver) {
        this.driverID = driver.getDriverID();
        this.lisenseID = driver.getLisenseID();
    }

    public DriverDTO(Driver driver, UserAccountDTO userAccountDTO){
        this(driver);
        this.userAccount = userAccountDTO;
    }

    public String getDriverID() {
        return driverID;
    }

    public void setDriverID(String driverID) {
        this.driverID = driverID;
    }

    public String getLisenseID() {
        return lisenseID;
    }

    public void setLicenseID(String lisenseID) {
        this.lisenseID = lisenseID;
    }

    public UserAccountDTO getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccountDTO userAccount) {
        this.userAccount = userAccount;
    }
}
