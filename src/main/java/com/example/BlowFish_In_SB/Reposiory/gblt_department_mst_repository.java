package com.example.BlowFish_In_SB.Reposiory;

import com.example.BlowFish_In_SB.Entity.gbltDepartmentMst;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface gblt_department_mst_repository extends JpaRepository<gbltDepartmentMst,Integer> {

    List<gbltDepartmentMst> findAllByIsValid(Integer id);
}
