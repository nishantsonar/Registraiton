package com.example.BlowFish_In_SB.Controller;

import com.example.BlowFish_In_SB.Dtos.responseNationality;
import com.example.BlowFish_In_SB.Dtos.ResponseDepatment;
import com.example.BlowFish_In_SB.Entity.gbltDepartmentMst;
import com.example.BlowFish_In_SB.Entity.gblt_nationality_mst;
import com.example.BlowFish_In_SB.Reposiory.gblt_department_mst_repository;
import com.example.BlowFish_In_SB.Reposiory.gblt_nationality_mst_repository;
import com.example.BlowFish_In_SB.Service.RegistrationFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class RegistrationFormController {
    @Autowired
    private RegistrationFormService registrationFormService;
    @Autowired
    private gblt_nationality_mst_repository gblt_nationality_mst_repository;
    @Autowired
    private gblt_department_mst_repository gbltDepartmentMstRepository;
    @PostMapping("/")
    public String encryptedData(@RequestBody String data)  {

       return  registrationFormService.encryptData(data);
        //return registrationFormService.saveData(data);
    }
    @GetMapping("/dec")
    public String decryptData(@RequestBody String data){
        return registrationFormService.decryptData(data);
    }

@GetMapping("/test")
    public ResponseEntity<Map> test() throws NoSuchAlgorithmException {
       List<gblt_nationality_mst> gblt_nationality_mst = gblt_nationality_mst_repository.findAll();
       List<responseNationality> responseNationalities = gblt_nationality_mst.stream().map(gblt_nationality_mst1 -> new responseNationality(gblt_nationality_mst1.getNationalityCode(),gblt_nationality_mst1.getNationalityName())).toList();
    Map essentialMap = new HashMap();
    List<gbltDepartmentMst> gbltDepartmentMstList=gbltDepartmentMstRepository.findAll();
    List<ResponseDepatment> responseDepartments = gbltDepartmentMstList.stream().map(departmentMst1 -> new ResponseDepatment(departmentMst1.getDeptCode(),departmentMst1.getDeptName())).toList();
    essentialMap.put("list",responseNationalities);
    essentialMap.put("department",responseDepartments);
       return ResponseEntity.ok(essentialMap);
    }
}
