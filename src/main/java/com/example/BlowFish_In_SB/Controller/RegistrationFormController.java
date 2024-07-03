package com.example.BlowFish_In_SB.Controller;

import com.example.BlowFish_In_SB.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class RegistrationFormController {
    @Autowired
    private RegistrationFormService registrationFormService;
    @Autowired
    private DepartmentMasterService departmentMasterService;
    @Autowired
    private CentreMasterService centreMasterService;
    @Autowired
    private NationalityMasterService nationalityMasterService;
    @Autowired
    private NatureOfJobService natureOfJobService;


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
      Map essentialMap = new HashMap();
      essentialMap.put("departmentList",departmentMasterService.findAll());
      essentialMap.put("centerList",centreMasterService.findAll());
      essentialMap.put("nationalityList",nationalityMasterService.findAll());
      essentialMap.put("natureOfJobList",natureOfJobService.findAll());
       return ResponseEntity.ok(essentialMap);
    }
}
