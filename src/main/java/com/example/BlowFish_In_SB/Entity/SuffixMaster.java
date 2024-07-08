package com.example.BlowFish_In_SB.Entity;

import com.fasterxml.jackson.databind.DatabindException;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@Table(name = "gblt_suffix_mst", schema = "ahiscl")
public class SuffixMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "gnum_suffix_code")
    private Integer suffixCode;
    @Column(name = "gstr_suffix_name")
    private String suffixName;
    @Column(name = "gnum_isvalid")
    private Integer isValid;
    @Column(name = "gnum_seat_id")
    private Integer seatId;
    @Column(name = "gdt_entry_date")
    private Date entryDate;
    @Column(name = "gdt_lstmod_date")
    private Date lastModifiedDate;
    @Column(name = "gnum_lstmod_seatid")
    private Integer lastModifiedSeatId;
    /*
    ahiscl.gblt_suffix_mst
(
    gnum_suffix_code numeric(2,0) NOT NULL,
    gstr_suffix_name character varying(15) COLLATE pg_catalog."default",
    gnum_isvalid numeric(1,0) DEFAULT 1,
    gnum_seat_id numeric(5,0) DEFAULT 10001,
    gdt_entry_date timestamp without time zone DEFAULT sysdate,
    gdt_lstmod_date timestamp without time zone,
    gnum_lstmod_seatid numeric(5,0),
    CONSTRAINT gblt_suffix_mst_pkey PRIMARY KEY (gnum_suffix_code)
     */
}
