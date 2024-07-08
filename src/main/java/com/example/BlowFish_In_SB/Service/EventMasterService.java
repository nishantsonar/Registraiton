package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Dtos.ResponseEventMaster;
import com.example.BlowFish_In_SB.Entity.EventMaster;
import com.example.BlowFish_In_SB.Reposiory.EventMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventMasterService {

    @Autowired
    private EventMasterRepository eventMasterRepository;

    public List<ResponseEventMaster> findAll(){
        List<EventMaster> eventMasterList=eventMasterRepository.findAllByIsValid(1);
//        System.out.println("EventMasterList:::: "+eventMasterList);
        List<ResponseEventMaster> responseEventMasters=eventMasterList.stream().map(eventMaster -> new ResponseEventMaster(Math.toIntExact(eventMaster.getEventId()),eventMaster.getEventName())).toList();
        return responseEventMasters;
    }

}


