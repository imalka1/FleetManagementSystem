package lk.fleet.service.impl;

import lk.fleet.dto.DriverDTO;
import lk.fleet.entity.Driver;
import lk.fleet.repository.DriverRepository;
import lk.fleet.repository.UserAccountRepository;
import lk.fleet.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private UserAccountRepository userAccountRepository;

    @Override
    public Object addDriver(Driver driver) {
        userAccountRepository.save(driver.getUserAccount());
        return driverRepository.save(driver);
    }

    @Override
    public Object updateDriver(String driverID, Driver driver) {
        Optional<Driver> optionalDriver = driverRepository.findById(driverID);
        if (optionalDriver.isPresent()){
            Driver driver1 = optionalDriver.get();
            driver1.setDriverID(driver.getDriverID());
            driver1.setLisenseID(driver.getLisenseID());

            return new DriverDTO(driverRepository.save(driver1));
        }
        return null;
    }

    @Override
    public boolean deleteDriver(String driverID) {
        driverRepository.deleteById(driverID);
        return true;
    }

}
