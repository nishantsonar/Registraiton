package com.example.BlowFish_In_SB.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@Table(name = "gblt_designation_mst", schema = "ahism")
public class DesignationMaster
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "gnum_desig_code")
    private Integer designationCode;

    @Column(name = "gstr_desig_name", length = 150)
    private String designationName;

    @Column(name = "gstr_desig_st_name", length = 10)
    private String designationShortName;

    @Column(name = "gnum_isvalid", nullable = false)
    private Integer isValid;

    @Column(name = "gnum_seat_id", nullable = false)
    private Long seatId;

    @Column(name = "gdt_entry_date", nullable = false)
    private Timestamp entryDate;

    @Column(name = "gstr_remarks", length = 100)
    private String remarks;

    @Column(name = "gnum_emp_class_id")
    private Long empClassId;

    @Column(name = "num_priority")
    private Integer priority;

    @Column(name = "gnum_is_rotationshift_req")
    private Integer isRotationShiftRequired;

    @Column(name = "gstr_fmr_code", length = 25)
    private String fmrCode;

    @Column(name = "num_max_salary")
    private BigDecimal maxSalary;
    /*
    CREATE TABLE IF NOT EXISTS ahism.gblt_designation_mst
(
    gnum_desig_code numeric(3,0) NOT NULL,
    gnum_ser_grp_id numeric(5,0) NOT NULL,
    gstr_desig_name character varying(150) COLLATE pg_catalog."default",
    gstr_desig_st_name character varying(10) COLLATE pg_catalog."default",
    gnum_isvalid numeric(1,0) NOT NULL,
    gnum_seat_id numeric(5,0) NOT NULL,
    gdt_entry_date timestamp without time zone NOT NULL,
    gstr_remarks character varying(100) COLLATE pg_catalog."default",
    gnum_hospital_code numeric(6,0) NOT NULL,
    gnum_emp_class_id numeric(5,0),
    num_priority numeric(3,0),
    gnum_is_rotationshift_req numeric(1,0),
    gstr_fmr_code character varying(25) COLLATE pg_catalog."default",
    num_max_salary numeric,
    CONSTRAINT gblt_designation_code_pkey PRIMARY KEY (gnum_desig_code, gnum_hospital_code)
)
     */
}
