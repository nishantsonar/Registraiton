package com.example.BlowFish_In_SB.Entity;


import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@Table(name = "pist_configuration_mst", schema = "ahism")
public class ServiceGroupMaster {
    @Id
    @Column(name = "num_configuration_id", nullable = false)
    private Long numConfigurationId;

    @Column(name = "str_configuration_code", length = 6)
    private String strConfigurationCode;

    @Column(name = "str_configuration_name", length = 110)
    private String strConfigurationName;

    @Column(name = "str_attri_code", length = 6, nullable = false)
    private String strAttriCode;

    @Column(name = "str_attri_value", length = 30)
    private String strAttriValue;

    @Column(name = "gnum_isvalid", nullable = false)
    private Integer isValid;

    @Column(name = "gnum_seat_id", nullable = false)
    private Long gnumSeatId;

    @Column(name = "gdt_entry", nullable = false)
    private Timestamp gdtEntry;

    @Column(name = "str_remarks", length = 100)
    private String strRemarks;

    @Column(name = "num_retirement_age")
    private Integer numRetirementAge;

    @Column(name = "str_sec_head_emp_no", length = 12)
    private String strSecHeadEmpNo;
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "num_configuration_id")
//    private Integer configurationId;
//    @Column(name = "str_configuration_code")
//    private Integer configurationCode;
//    @Column(name = "str_configuration_name")
//    private String configurationName;
//    @Column(name = "str_attri_code")
//    private String attriCode;
//    @Column(name = "str_attri_value")
//    private String attriValue;
//    @Column(name = "gnum_isvalid")
//    private Integer isValid;
//    @Column(name = "gnum_seat_id")
//    private Integer seatId;
//    @Column(name = "gdt_entry")
//    private Date entryDate;
//    @Column(name = "str_remarks")
//    private String remarks;
//    @Column(name ="num_retirement_age" )
//    private int retirementAge;
//    @Column(name = "str_sec_head_emp_no")
//    private String secHeadEmpNo;

    /*
    num_configuration_id numeric(5,0) NOT NULL,
    str_configuration_code character varying(6) COLLATE pg_catalog."default",
    str_configuration_name character varying(110) COLLATE pg_catalog."default",
    str_attri_code character varying(6) COLLATE pg_catalog."default" NOT NULL,
    str_attri_value character varying(30) COLLATE pg_catalog."default",
    gnum_isvalid numeric(1,0) NOT NULL,
    gnum_seat_id numeric(5,0) NOT NULL,
    gdt_entry timestamp without time zone NOT NULL,
    str_remarks character varying(100) COLLATE pg_catalog."default",
    num_retirement_age numeric(2,0),
    str_sec_head_emp_no character varying(12) COLLATE pg_catalog."default",
    CONSTRAINT pist_configuration_mst_pk PRIMARY KEY (num_configuration_id)
)
     */
}
