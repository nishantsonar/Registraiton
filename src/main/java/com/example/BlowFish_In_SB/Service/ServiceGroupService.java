package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Dtos.ResponseServiceGroup;
import com.example.BlowFish_In_SB.Dtos.responseNationality;
import com.example.BlowFish_In_SB.Entity.ServiceGroupMaster;
import com.example.BlowFish_In_SB.Reposiory.ServiceGroupMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceGroupService {

    @Autowired
    private ServiceGroupMasterRepository serviceGroupMasterRepository;

    public List<ResponseServiceGroup> findAll(){
        List<ServiceGroupMaster> serviceGroupMasterList=serviceGroupMasterRepository.findAllByIsValid(1);
       // System.out.println("ServiceList::: "+serviceGroupMasterList);
        List<ResponseServiceGroup> responseServiceGroups = serviceGroupMasterList.stream().map(gblt_nationality_mst1 ->
                new ResponseServiceGroup(Math.toIntExact(gblt_nationality_mst1.getNumConfigurationId()),gblt_nationality_mst1.getStrConfigurationName())).toList();

//        List<ResponseServiceGroup>responseServiceGroups=serviceGroupMasterList.stream().map(serviceGroupMaster -> new ResponseServiceGroup(serviceGroupMaster.getConfigurationCode(),serviceGroupMaster.getConfigurationName())).toList();
        return  responseServiceGroups;
    }
}
