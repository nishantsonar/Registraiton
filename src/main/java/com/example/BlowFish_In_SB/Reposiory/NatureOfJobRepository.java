package com.example.BlowFish_In_SB.Reposiory;

import com.example.BlowFish_In_SB.Entity.NatureOfJob;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NatureOfJobRepository extends JpaRepository<NatureOfJob,Integer> {

    List<NatureOfJob> findAlByIsValid(Integer id);
}
