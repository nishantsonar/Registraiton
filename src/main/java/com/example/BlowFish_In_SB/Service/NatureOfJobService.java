package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Dtos.ResponseNatureOfJob;
import com.example.BlowFish_In_SB.Entity.NatureOfJob;
import com.example.BlowFish_In_SB.Reposiory.NatureOfJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NatureOfJobService {

    @Autowired
    private NatureOfJobRepository natureOfJobRepository;

    public List<ResponseNatureOfJob> findAll() {
        List<NatureOfJob> natureOfJobList=natureOfJobRepository.findAll();
        List<ResponseNatureOfJob> responseNatureOfJobs=natureOfJobList.stream().map(a->new ResponseNatureOfJob(a.getNatureOfJobId(),a.getJobName())).toList();
        return responseNatureOfJobs;
    }
}

