package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Dtos.ResponseLastEmployeeType;
import com.example.BlowFish_In_SB.Entity.LastEmployeeType;
import com.example.BlowFish_In_SB.Reposiory.LastEmployeeTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LastEmployeeTypeService {

    @Autowired
    private LastEmployeeTypeRepository lastEmployeeTypeRepository;

    public List<ResponseLastEmployeeType> findAll(){
        List<LastEmployeeType> lastEmployeeTypeList=lastEmployeeTypeRepository.findAllByIsValid(1);
//        System.out.println("lastEmpType::;: "+lastEmployeeTypeList);
        List<ResponseLastEmployeeType> responseLastEmployeeTypes=lastEmployeeTypeList.stream().map(lastEmployeeType ->
                new ResponseLastEmployeeType(Math.toIntExact(lastEmployeeType.getId()),lastEmployeeType.getTypeName())).toList();
        return responseLastEmployeeTypes;
    }
}
