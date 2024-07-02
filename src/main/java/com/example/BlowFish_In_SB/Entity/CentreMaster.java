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
@Table(name = "pist_center_mst",schema = "ahism")
public class CentreMaster {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
@Column(name = "num_center_id")
    private int centreId;
@Column(name ="str_center_sh_name" )
    private String centerShortName;
@Column(name = "str_center_name")
    private String centerName;
@Column(name = "str_remarks")
    private String remarks;
@Column(name = "gnum_isvalid")
    private Integer isValid;
@Column(name = "gnum_seat_id")
    private Integer seatId;
@Column(name = "gdt_entry")
    private Date entryDate;
@Column(name = "gnum_lstmod_seatid")
    private Integer lastModifiedSeatId;
@Column(name = "gdt_lstmod_date")
    private Date lastModifiedDate;
@Column(name = "gnum_hospital_code")
    private Integer hospitalCode;
@Column(name = "gnum_hospital_code_temp")
    private Integer hospitalCodeTemp;
    /*
    * num_center_id numeric(3,0) NOT NULL,
    str_center_sh_name character varying(10) COLLATE pg_catalog."default",
    str_center_name character varying(100) COLLATE pg_catalog."default",
    str_remarks character varying(100) COLLATE pg_catalog."default",
    gnum_isvalid numeric(1,0) NOT NULL,
    gnum_seat_id numeric(5,0) NOT NULL,
    gdt_entry timestamp without time zone NOT NULL,
    gnum_lstmod_seatid numeric(5,0) NOT NULL,
    gdt_lstmod_date timestamp without time zone NOT NULL,
    gnum_hospital_code numeric(5,0) NOT NULL,
    gnum_hospital_code_temp numeric(5,0) NOT NULL,
    * */
}
