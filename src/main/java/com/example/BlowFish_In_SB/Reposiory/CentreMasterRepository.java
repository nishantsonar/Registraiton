package com.example.BlowFish_In_SB.Reposiory;

import com.example.BlowFish_In_SB.Entity.CentreMaster;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CentreMasterRepository extends JpaRepository<CentreMaster,Integer> {

    List<CentreMaster> findAllByIsValid(Integer id);
}
