package com.example.BlowFish_In_SB.Controller;

import com.example.BlowFish_In_SB.Service.*;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.csrf.CsrfToken;
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
    @Autowired
    private Appellation1Service appellation1Service;
    @Autowired
    private SuffixService suffixService;
    @Autowired
    private ServiceGroupService serviceGroupService;
    @Autowired
    private DesignationMasterService designationMasterService;
    @Autowired
    private LastEmployeeTypeService lastEmployeeTypeService;
    @Autowired
    private EventMasterService eventMasterService;
    @Autowired
    private  EmpClassMasterService empClassMasterService;


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
    public ResponseEntity<Map> test(HttpServletRequest security) throws NoSuchAlgorithmException {
      Map essentialMap = new HashMap();
    CsrfToken csrfToken=(CsrfToken) security.getAttribute(CsrfToken.class.getName());
      essentialMap.put("departmentList",departmentMasterService.findAll());
      essentialMap.put("centerList",centreMasterService.findAll());
      essentialMap.put("nationalityList",nationalityMasterService.findAll());
      essentialMap.put("natureOfJobList",natureOfJobService.findAll());
      essentialMap.put("Appellation1",appellation1Service.findAll());
      essentialMap.put("suffix",suffixService.findAll());
      essentialMap.put("ServiceGroupMaster",serviceGroupService.findAll());
      essentialMap.put("designations",designationMasterService.findAll());
      essentialMap.put("lastemptype",lastEmployeeTypeService.findAll());
      essentialMap.put("eventMaster",eventMasterService.findAll());
      essentialMap.put("empClassMaster",empClassMasterService.findAll());
       return ResponseEntity.ok(essentialMap);
    }
}
