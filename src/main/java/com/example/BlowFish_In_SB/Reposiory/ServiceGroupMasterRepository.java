package com.example.BlowFish_In_SB.Reposiory;

import com.example.BlowFish_In_SB.Entity.ServiceGroupMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceGroupMasterRepository extends JpaRepository<ServiceGroupMaster,Integer> {


    List<ServiceGroupMaster> findAllByIsValid(Integer id);
}
