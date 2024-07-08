package com.example.BlowFish_In_SB.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@Table(name = "gblt_appellation_mst", schema = "ahism")
public class Appellation_1_Master {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "gnum_appellation_code")
    private Integer appellationCode;
    @Column(name = "gstr_appellation_name")
    private String appellationName;
    @Column(name = "gnum_appellation_type")
    private Integer appellationType;
    @Column(name = "gnum_isvalid")
    private Integer isValid;
    @Column(name = "gnum_seat_id")
    private Integer seatId;
    @Column(name = "gdt_entry")
    private Date entryDate;
    @Column(name = "gstr_remarks")
    private String remarks;


    /*
    gnum_appellation_code numeric(2,0) NOT NULL,
    gstr_appellation_name character varying(15) COLLATE pg_catalog."default",
    gnum_appellation_type numeric(1,0),
    gnum_isvalid numeric(1,0) NOT NULL DEFAULT 1,
    gnum_seat_id numeric(5,0) NOT NULL DEFAULT 10001,
    gdt_entry timestamp without time zone NOT NULL DEFAULT sysdate,
    gstr_remarks character varying(50) COLLATE pg_catalog."default",
     */
}
