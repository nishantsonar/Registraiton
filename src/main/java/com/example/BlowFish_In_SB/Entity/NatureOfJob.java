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
@Table(name = "pist_nat_job_mst", schema = "ahism")
public class NatureOfJob {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "num_nat_job_id")
    private Integer jobId;
    @Column(name = "str_nat_job_code")
    private String jobCode;
    @Column(name = "str_nat_job_name")
    private String jobName;
    @Column(name = "gnum_isvalid")
    private Integer isValid;
    @Column(name = "gnum_seat_id")
    private Integer seatId;
    @Column(name = "gdt_entry")
    private Date entryDate;
    @Column(name = "str_remarks")
    private String remarks;
    @Column(name = "num_is_next_inc_dt_mand")
    private Integer isNextIncrementDateMandatory;
    @Column(name = "num_is_retirement_dt_mand")
    private Integer isRetirementDateMandatory;
    @Column(name = "num_p_nat_job_id")
    private Integer natureOfJobId;
    @Column(name = "gnum_hospital_code")
    private Integer hospitalCode;

    /*
    * CREATE TABLE IF NOT EXISTS ahism.pist_nat_job_mst
(
    num_nat_job_id numeric(2,0) NOT NULL,
    str_nat_job_code character varying(6) COLLATE pg_catalog."default",
    str_nat_job_name character varying(25) COLLATE pg_catalog."default",
    gnum_isvalid numeric(1,0) NOT NULL,
    gnum_seat_id numeric(5,0) NOT NULL,
    gdt_entry timestamp without time zone NOT NULL,
    str_remarks character varying(100) COLLATE pg_catalog."default",
    num_is_next_inc_dt_mand numeric(1,0) NOT NULL DEFAULT 1,
    num_is_retirement_dt_mand numeric(1,0) NOT NULL DEFAULT 1,
    num_p_nat_job_id numeric(2,0),
    gnum_hospital_code numeric(6,0) NOT NULL,
    CONSTRAINT pist_nat_job_mst_pk PRIMARY KEY (num_nat_job_id, gnum_hospital_code)
)

    * */
}
