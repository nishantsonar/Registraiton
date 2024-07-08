package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Dtos.ResponseEmpClassMaster;
import com.example.BlowFish_In_SB.Entity.EmployeeClassMaster;
import com.example.BlowFish_In_SB.Reposiory.EmpClassMasterRepository;
import com.fasterxml.jackson.core.PrettyPrinter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpClassMasterService {
    @Autowired
    private EmpClassMasterRepository empClassMasterRepository;
public List<ResponseEmpClassMaster> findAll() {
     List<EmployeeClassMaster> employeeClassMasterList = empClassMasterRepository.findAllByIsValid(1);

    List<ResponseEmpClassMaster> responseEmpClassMasterList = employeeClassMasterList.stream().map(employeeClassMaster ->
            new ResponseEmpClassMaster(employeeClassMaster.getEmpClassId(), employeeClassMaster.getEmpClassName())).toList();
return responseEmpClassMasterList;
}
}
