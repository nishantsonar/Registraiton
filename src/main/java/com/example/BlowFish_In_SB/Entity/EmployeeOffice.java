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
@Table(name = "pist_configuration_mst",schema = "ahism")
public class EmployeeOffice {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "num_configuration_id")
    private Integer configurationId;
    @Column(name = "str_configuration_code")
    private String configurationCode;
    @Column(name = "str_configuration_name")
    private String configurationName;
    @Column(name = "str_attri_code")
    private String attriCode;
    @Column(name = "str_attri_value")
    private String attriValue;
    @Column(name = "gnum_isvalid")
    private Integer isValid;
    @Column(name = "gnum_seat_id")
    private Integer seatId;
    @Column(name = "gdt_entry")
    private Date entryDate;
    @Column(name = "str_remarks")
    private String remarks;
    @Column(name = "num_retirement_age")
    private Integer retirementAge;
    @Column(name = "str_sec_head_emp_no")
    private String secHeadEmployeeNo;

    /*CREATE TABLE IF NOT EXISTS ahism.pist_configuration_mst
(
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
)*/
}
