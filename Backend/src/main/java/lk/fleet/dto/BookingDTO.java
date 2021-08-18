package lk.fleet.dto;

import lk.fleet.entity.Booking;

import java.time.LocalDateTime;

public class BookingDTO {

    private String bookingId;
    private LocalDateTime bookingDateTime;
    private String destination;
    private boolean bookingStatus;

    public BookingDTO(Booking booking){
        this.bookingId = booking.getBookingId();
        this.bookingDateTime = booking.getBookingDateTime();
        this.destination = booking.getDestination();
        this.bookingStatus = booking.isBookingStatus();
    }

    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public LocalDateTime getBookingDateTime() {
        return bookingDateTime;
    }

    public void setBookingDateTime(LocalDateTime bookingDateTime) {
        this.bookingDateTime = bookingDateTime;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public boolean isBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(boolean bookingStatus) {
        this.bookingStatus = bookingStatus;
    }
}
