package lk.fleet.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDate;

@Entity
public class VehicleMaintenance {

    @Id
    private String maintenanceID;
    private LocalDate maintenanceDate;
    private String maintenanceType;
    private String companyName;
    private String maintenanceStatus;


    @ManyToOne
    private AccidentMaintenanceManager accidentMaintenanceManager;


    public String getMaintenanceID() {
        return maintenanceID;
    }

    public void setMaintenanceID(String maintenanceID) {
        this.maintenanceID = maintenanceID;
    }

    public LocalDate getMaintenanceDate() {
        return maintenanceDate;
    }

    public void setMaintenanceDate(LocalDate maintenanceDate) {
        this.maintenanceDate = maintenanceDate;
    }

    public String getMaintenanceType() {
        return maintenanceType;
    }

    public void setMaintenanceType(String maintenanceType) {
        this.maintenanceType = maintenanceType;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getMaintenanceStatus() {
        return maintenanceStatus;
    }

    public void setMaintenanceStatus(String maintenanceStatus) {
        this.maintenanceStatus = maintenanceStatus;
    }

    public AccidentMaintenanceManager getAccidentMaintenanceManager() {
        return accidentMaintenanceManager;
    }

    public void setAccidentMaintenanceManager(AccidentMaintenanceManager accidentMaintenanceManager) {
        this.accidentMaintenanceManager = accidentMaintenanceManager;
    }

}