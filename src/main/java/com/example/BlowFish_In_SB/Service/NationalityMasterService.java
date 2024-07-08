package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Dtos.responseNationality;
import com.example.BlowFish_In_SB.Entity.gblt_nationality_mst;
import com.example.BlowFish_In_SB.Reposiory.gblt_nationality_mst_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NationalityMasterService {

    @Autowired
    private gblt_nationality_mst_repository gblt_nationality_mst_repository;

    public List<responseNationality> findAll(){
        List<gblt_nationality_mst> gblt_nationality_mst = gblt_nationality_mst_repository.findAllByIsValid(1);
        List<responseNationality> responseNationalities = gblt_nationality_mst.stream().map(gblt_nationality_mst1 ->
                new responseNationality(gblt_nationality_mst1.getNationalityCode(),gblt_nationality_mst1.getNationalityName())).toList();
return responseNationalities;
    }

}
