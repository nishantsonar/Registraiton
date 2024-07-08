package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Dtos.ResponseDesignationMaster;
import com.example.BlowFish_In_SB.Entity.DesignationMaster;
import com.example.BlowFish_In_SB.Reposiory.DesignationMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DesignationMasterService {

    @Autowired
    private DesignationMasterRepository designationMasterRepository;

    public List<ResponseDesignationMaster> findAll(){
        List<DesignationMaster> designationMasterList=designationMasterRepository.findAllByIsValid(1);
//        System.out.println("designationMaster:::: "+designationMasterList);
        List<ResponseDesignationMaster> responseDesignationMasters=designationMasterList.stream().map(designationMaster -> new ResponseDesignationMaster(designationMaster.getDesignationCode(),
                designationMaster.getDesignationName())).toList();
        return responseDesignationMasters;

    }
}
