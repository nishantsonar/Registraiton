package com.example.BlowFish_In_SB.Entity;


import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@Table(name = "pist_emp_class_mst", schema = "ahism")
public class EmployeeClassMaster {
/*
CREATE TABLE IF NOT EXISTS ahism.pist_emp_class_mst
(
    num_emp_class_id numeric(5,0) NOT NULL,
    str_emp_class_code character varying(6) COLLATE pg_catalog."default",
    str_emp_class_name character varying(50) COLLATE pg_catalog."default",
    gnum_isvalid numeric(1,0) NOT NULL,
    gnum_user_id numeric(5,0) NOT NULL,
    gdt_entry timestamp without time zone NOT NULL,
    gnum_lstmod_user_id numeric(5,0) DEFAULT NULL::numeric,
    gdt_lstmod timestamp without time zone,
    gnum_hospital_code numeric(6,0) NOT NULL,
    str_remarks character varying(100) COLLATE pg_catalog."default",
    num_retirement_age numeric(2,0),
    CONSTRAINT pk_pist_emp_class_mst PRIMARY KEY (num_emp_class_id, gnum_hospital_code),
    CONSTRAINT uk1_pist_emp_class_mst UNIQUE (str_emp_class_code),
    CONSTRAINT uk2_pist_emp_class_mst UNIQUE (str_emp_class_name)
)
 */
    @Id
    @Column(name = "num_emp_class_id",nullable = false)
    private Integer empClassId;

    @Column(name = "str_emp_class_code")
    private String empClassCode;
    @Column(name = "str_emp_class_name")
    private String empClassName;
    @Column(name = "gnum_isvalid", nullable = false)
    private Integer isValid;

    @Column(name = "gnum_user_id", nullable = false)
    private Long userId;

    @Column(name = "gdt_entry", nullable = false)
    private Timestamp entryDate;

    @Column(name = "gnum_lstmod_user_id")
    private Long lastModifiedUserId;

    @Column(name = "gdt_lstmod")
    private Timestamp lastModifiedDate;

    @Column(name = "gnum_hospital_code")
    private Integer hospitalCode;

    @Column(name = "str_remarks", length = 100)
    private String remarks;

    @Column(name = "num_retirement_age")
    private Integer retirementAge;
}
