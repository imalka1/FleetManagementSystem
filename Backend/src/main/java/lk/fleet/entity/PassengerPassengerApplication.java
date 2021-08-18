package lk.fleet.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class PassengerPassengerApplication {

    @EmbeddedId
    private PassengerPassengerApplicationPK passengerPassengerApplicationId;
    @ManyToOne
    @JoinColumn(name="passengerId",referencedColumnName = "passengerId",insertable = false, updatable = false,nullable = false)
    private  Passenger passenger;

    @ManyToOne
    @JoinColumn(name="passengerApplicationID",referencedColumnName = "passengerApplicationID",insertable = false, updatable = false,nullable = false)
    private PassengerApplication passengerApplication;

    public PassengerPassengerApplicationPK getPassengerPassengerApplicationId() {
        return passengerPassengerApplicationId;
    }

    public void setPassengerPassengerApplicationId(PassengerPassengerApplicationPK passengerPassengerApplicationId) {
        this.passengerPassengerApplicationId = passengerPassengerApplicationId;
    }

    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

    public PassengerApplication getPassengerApplication() {
        return passengerApplication;
    }

    public void setPassengerApplication(PassengerApplication passengerApplication) {
        this.passengerApplication = passengerApplication;
    }
}
