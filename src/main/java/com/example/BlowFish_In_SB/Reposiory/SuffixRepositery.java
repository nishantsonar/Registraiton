package com.example.BlowFish_In_SB.Reposiory;

import com.example.BlowFish_In_SB.Entity.SuffixMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface SuffixRepositery extends JpaRepository<SuffixMaster,Integer> {
    List<SuffixMaster> findAllByIsValid(Integer id);
}
