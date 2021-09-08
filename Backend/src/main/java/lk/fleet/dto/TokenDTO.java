package lk.fleet.dto;

import lk.fleet.entity.Token;

import java.time.format.DateTimeFormatter;

public class TokenDTO {
    private String tokenID;
    private String departureDate;
    private String departureTime;
    private String departureTimeActual;
    private String arrivalDate;
    private String arrivalTime;
    private String arrivalTimeActual;
    private boolean transportStatus;
    private MeterDetailDTO meterDetail;

    public TokenDTO(Token token) {
        if (token != null) {
            this.tokenID = token.getTokenID();
            this.departureDate = token.getDepartureDateTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
            this.departureTime = token.getDepartureDateTime().format(DateTimeFormatter.ofPattern("hh:mm a"));
            this.departureTimeActual = token.getDepartureDateTime().format(DateTimeFormatter.ofPattern("HH:mm"));
//            this.arrivalDate = token.getArrivalDateTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
//            this.arrivalTime = token.getArrivalDateTime().format(DateTimeFormatter.ofPattern("hh:mm a"));
//            this.arrivalTimeActual = token.getArrivalDateTime().format(DateTimeFormatter.ofPattern("HH:mm"));
            this.transportStatus = token.isTransportStatus();
        }
    }

    public TokenDTO(Token token, MeterDetailDTO meterDetail) {
        this(token);
        this.meterDetail = meterDetail;
    }

    public String getTokenID() {
        return tokenID;
    }

    public void setTokenID(String tokenID) {
        this.tokenID = tokenID;
    }

    public String getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(String departureDate) {
        this.departureDate = departureDate;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public String getArrivalDate() {
        return arrivalDate;
    }

    public void setArrivalDate(String arrivalDate) {
        this.arrivalDate = arrivalDate;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public boolean isTransportStatus() {
        return transportStatus;
    }

    public void setTransportStatus(boolean transportStatus) {
        this.transportStatus = transportStatus;
    }

    public String getDepartureTimeActual() {
        return departureTimeActual;
    }

    public void setDepartureTimeActual(String departureTimeActual) {
        this.departureTimeActual = departureTimeActual;
    }

    public String getArrivalTimeActual() {
        return arrivalTimeActual;
    }

    public void setArrivalTimeActual(String arrivalTimeActual) {
        this.arrivalTimeActual = arrivalTimeActual;
    }

    public MeterDetailDTO getMeterDetail() {
        return meterDetail;
    }

    public void setMeterDetail(MeterDetailDTO meterDetail) {
        this.meterDetail = meterDetail;
    }
}
