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
@Table(name = "pist_last_emp_type_mst", schema = "ahism")
public class LastEmployeeType {

    @Id
    @Column(name = "num_last_emp_type_id", nullable = false)
    private Long id;

    @Column(name = "str_last_emp_type_name", length = 20, nullable = false)
    private String typeName;

    @Column(name = "gnum_seat_id", nullable = false)
    private Long seatId;

    @Column(name = "gdt_entry", nullable = false)
    private Timestamp entryDate;

    @Column(name = "gnum_isvalid", nullable = false)
    private Integer isValid;
    /*
    ahism.pist_last_emp_type_mst
(
    num_last_emp_type_id numeric(2,0) NOT NULL,
    str_last_emp_type_name character varying(20) COLLATE pg_catalog."default" NOT NULL,
    gnum_seat_id numeric(5,0) NOT NULL DEFAULT 10001,
    gdt_entry timestamp without time zone NOT NULL DEFAULT sysdate,
    gnum_isvalid numeric(1,0) NOT NULL DEFAULT 1,
    CONSTRAINT pist_last_emp_type_mst_pkey PRIMARY KEY (num_last_emp_type_id)
)
     */
}
