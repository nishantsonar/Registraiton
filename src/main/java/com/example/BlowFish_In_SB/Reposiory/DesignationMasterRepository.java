package com.example.BlowFish_In_SB.Reposiory;

import com.example.BlowFish_In_SB.Entity.DesignationMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DesignationMasterRepository extends JpaRepository<DesignationMaster,Integer> {

    List<DesignationMaster> findAllByIsValid(Integer id);
}
