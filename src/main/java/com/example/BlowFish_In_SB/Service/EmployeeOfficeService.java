package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Dtos.ResponseDepatment;
import com.example.BlowFish_In_SB.Dtos.ResponseEmployeeOffice;
import com.example.BlowFish_In_SB.Entity.EmployeeOffice;
import com.example.BlowFish_In_SB.Reposiory.EmployeeOfficeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeOfficeService {
    @Autowired
    private EmployeeOfficeRepository employeeOfficeRepository;

    public List<ResponseEmployeeOffice> findAll(){
        List<EmployeeOffice> employeeOfficeList=employeeOfficeRepository.findAll();
        List<ResponseEmployeeOffice> responseEmployeeOfficeList = employeeOfficeList.stream().map(employeeOffice1 ->
                new ResponseEmployeeOffice(employeeOffice1.getConfigurationCode(),employeeOffice1.getConfigurationName())).toList();
        return responseEmployeeOfficeList;
    }
}
