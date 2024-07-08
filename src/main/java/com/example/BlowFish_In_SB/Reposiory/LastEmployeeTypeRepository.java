package com.example.BlowFish_In_SB.Reposiory;

import com.example.BlowFish_In_SB.Entity.LastEmployeeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LastEmployeeTypeRepository extends JpaRepository<LastEmployeeType,Integer> {

    List<LastEmployeeType> findAllByIsValid(Integer id);
}
