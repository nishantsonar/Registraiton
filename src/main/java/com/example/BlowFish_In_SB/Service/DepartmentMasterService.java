package com.example.BlowFish_In_SB.Service;


import com.example.BlowFish_In_SB.Dtos.ResponseDepatment;
import com.example.BlowFish_In_SB.Entity.gbltDepartmentMst;
import com.example.BlowFish_In_SB.Reposiory.gblt_department_mst_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentMasterService {

    @Autowired
    private gblt_department_mst_repository gbltDepartmentMstRepository;

    public List<ResponseDepatment> findAll(){
        List<gbltDepartmentMst> gbltDepartmentMstList=gbltDepartmentMstRepository.findAll();
        List<ResponseDepatment> responseDepartments = gbltDepartmentMstList.stream().map(departmentMst1 -> new ResponseDepatment(departmentMst1.getDeptCode(),departmentMst1.getDeptName())).toList();
        return responseDepartments;
    }
}
