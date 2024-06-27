package com.example.BlowFish_In_SB.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Setter
@Getter
@ToString
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tab_registration_data", schema = "ahistrn")
public class RegistrationForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "registration_id")
    private Integer registrationId;

    @Column(name = "employee_category")
    private String employeeCategory;
    @Column(name = "is_existing_employee")
    private boolean isExistingEmp;
    @Column(name = "last_employment_type")
    private String lastEmploymentType;
    @Column(name = "old_employment_ref_no")
    private String oldEmploymentRefNo;

    @Column(name = "appellation")
    private String appellation;

    @Column(name = "full_name")
    private String fullName;
    @Column(name = "short_name")
    private String short_name;

    @Column(name = "suffix")
    private String suffix;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "gender")
    private String gender;

    @Column(name = "nationality ")
    private String nationality;

    @Column(name = "center")
    private String center;

    @Column(name = "dealing_office_or_establishment")
    private String DealingOfficeEstablishment;
    @Column(name = "department")
    private String department;
    @Column(name = "designation")
    private String designation;
    @Column(name = "emp_class")
    private String empClass;
    @Column(name = "pan_card")
    private String panCard;
    @Column(name = "mobile_number")
    private String mobileNumber;

    @Column(name = "email")
    private String emailId;


}
