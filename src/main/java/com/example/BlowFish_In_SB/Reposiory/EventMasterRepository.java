package com.example.BlowFish_In_SB.Reposiory;

import com.example.BlowFish_In_SB.Entity.EventMaster;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventMasterRepository extends JpaRepository<EventMaster,Integer> {
    List<EventMaster> findAllByIsValid(Integer id);
}
