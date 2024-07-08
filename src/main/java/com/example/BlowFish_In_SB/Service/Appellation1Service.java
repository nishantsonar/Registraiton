package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Dtos.ResponseAppellation1;
import com.example.BlowFish_In_SB.Dtos.ResponseEmployeeOffice;
import com.example.BlowFish_In_SB.Entity.Appellation_1_Master;
import com.example.BlowFish_In_SB.Reposiory.Appellation1Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Appellation1Service {

    @Autowired
    private Appellation1Repository appellation1Repository;
    public List<ResponseAppellation1> findAll(){
        List<Appellation_1_Master>appellation1List= appellation1Repository.findAllByIsValid(1);
        List<ResponseAppellation1> responseAppellation1List = appellation1List.stream().map(appellation1 ->
                new ResponseAppellation1(appellation1.getAppellationCode(),appellation1.getAppellationName())).toList();
        return responseAppellation1List;
    }
}
