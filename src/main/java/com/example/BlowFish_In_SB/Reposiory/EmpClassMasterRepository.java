package com.example.BlowFish_In_SB.Reposiory;

import com.example.BlowFish_In_SB.Entity.EmployeeClassMaster;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmpClassMasterRepository extends JpaRepository<EmployeeClassMaster,Integer> {

    List<EmployeeClassMaster> findAllByIsValid(Integer id);
}
