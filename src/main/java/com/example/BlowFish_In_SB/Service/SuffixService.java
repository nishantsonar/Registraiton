package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Dtos.ResponnseSuffix;
import com.example.BlowFish_In_SB.Entity.SuffixMaster;
import com.example.BlowFish_In_SB.Reposiory.SuffixRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuffixService {

    @Autowired
    private SuffixRepositery suffixRepositery;

    public List<ResponnseSuffix> findAll(){
        List<SuffixMaster> suffixMastersList=suffixRepositery.findAllByIsValid(1);
        List<ResponnseSuffix> responnseSuffixList=suffixMastersList.stream().map(suffixMaster -> new ResponnseSuffix(suffixMaster.getSuffixCode(),suffixMaster.getSuffixName())).toList();
        return responnseSuffixList;

    }
}


