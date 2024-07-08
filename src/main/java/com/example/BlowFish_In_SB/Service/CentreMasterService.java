package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Dtos.ResponseDepatment;
import com.example.BlowFish_In_SB.Entity.CentreMaster;
import com.example.BlowFish_In_SB.Reposiory.CentreMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CentreMasterService {
    @Autowired
    private CentreMasterRepository centreMasterRepository;
    public List<ResponseDepatment> findAll(){
        List<CentreMaster> CentreMasterList=centreMasterRepository.findAllByIsValid(1);
        List<ResponseDepatment> responseCentreMasterList = CentreMasterList.stream().map(centreMaster1 -> new ResponseDepatment(centreMaster1.getCentreId(),centreMaster1.getCenterName())).toList();
 return responseCentreMasterList;
    }
}
