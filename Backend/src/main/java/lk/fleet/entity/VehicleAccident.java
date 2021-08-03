package lk.fleet.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class VehicleAccident {

  @Id
  private String refNumber;
  private LocalDate accidentDate;
  private LocalTime accidentTime;


    public String getRefNumber() {
        return refNumber;
    }

    public void setRefNumber(String refNumber) {
        this.refNumber = refNumber;
    }

    public LocalDate getAccidentDate() {
        return accidentDate;
    }

    public void setAccidentDate(LocalDate accidentDate) {
        this.accidentDate = accidentDate;
    }

    public LocalTime getAccidentTime() {
        return accidentTime;
    }

    public void setAccidentTime(LocalTime accidentTime) {
        this.accidentTime = accidentTime;
    }

}
