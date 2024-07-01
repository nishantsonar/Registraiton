package com.example.BlowFish_In_SB.Entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.Date;



@Entity
@Table(name = "GBLT_DEPARTMENT_MST", schema = "ahiscl")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Data
public class gbltDepartmentMst {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "gnum_dept_code")
    private Integer deptCode;
    @Column(name = "gstr_dept_name")
    private String deptName;
    @Column(name = "gstr_hod_code")
    private String hodCode;
    @Column(name = "gstr_dept_short")
    private String deptShort;
    @Column(name = "gnum_location_code")
    private Integer locationCode;
    @Column(name = "gnum_isvalid")
    private Integer isValid;
    @Column(name = "gnum_seat_id")
    private Integer seatId;
    @Column(name = "gnum_age_limit")
    private Integer ageLimit;
    @Column(name = "gstr_gender_code")
    private String GenderCode;
    @Column(name = "gdt_entry_date")
    private Date entryDate;
    @Column(name = "gdt_lstmod_date")
    private Date lastModifiedDate;
    @Column(name = "gnum_lstmod_seatid")
    private Integer lastModifiedSeatId;
    @Column(name = "gstr_remarks")
    private String remark;
    @Column(name = "gnum_hospital_code")
    private Integer hospitalCode;
    @Column(name = "gnum_dept_type")
    private int deptartmentType;
    @Column(name = "gnum_is_rotationshift_req")
    private Integer isRotationalShiftRequired;
    @Column(name = "gdt_eff_date")
    private Date effectiveDate;
    @Column(name = "gnum_is_no_due_form_req")
    private Integer isNoDueFormRequired;
    @Column(name = "gnum_is_ward_req")
    private Integer isWardRequired;
    @Column(name = "gnum_is_academic_dept")
    private Integer isAcademicDepartment;
    /*
   -- * gnum_dept_code numeric(5,0) NOT NULL,
    /gstr_dept_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    /gstr_hod_code character varying(18) COLLATE pg_catalog."default",
    gstr_dept_short character varying(5) COLLATE pg_catalog."default",
    gnum_location_code numeric(4,0),
    gnum_isvalid numeric(1,0) NOT NULL DEFAULT 1,
    gnum_seat_id numeric(5,0),
    gnum_age_limit numeric(3,0),
    gstr_gender_code character(1) COLLATE pg_catalog."default",
    gdt_entry_date timestamp without time zone NOT NULL DEFAULT sysdate,
    gdt_lstmod_date timestamp without time zone,
    gnum_lstmod_seatid numeric(5,0),
    gstr_remarks character varying(50) COLLATE pg_catalog."default",
    gnum_hospital_code numeric(6,0) NOT NULL,
    gnum_dept_type numeric(1,0),
    gnum_is_rotationshift_req numeric(1,0) NOT NULL,
    gdt_eff_date timestamp without time zone,
    gnum_is_no_due_form_req numeric(1,0) NOT NULL,
    gnum_is_ward_req numeric(1,0) NOT NULL,
    gnum_is_academic_dept numeric(1,0) NOT NULL,
    * */
}
