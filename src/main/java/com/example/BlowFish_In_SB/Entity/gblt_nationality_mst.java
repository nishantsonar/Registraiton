/* Author @ Nishant Suresh Sonar 
created on 24/06/24 
inside the package - com.example.BlowFish_In_SB.Entity */
package com.example.BlowFish_In_SB.Entity;
import jakarta.persistence.*;
import lombok.*;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.Date;

@Setter
@Getter
@ToString
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "gblt_nationality_mst", schema = "ahism")
public class gblt_nationality_mst {
    @Id
    @Column(name = "gnum_nationality_code")
    private  int nationalityCode ;
    @Column(name = "gstr_nationality_name")
    private String nationalityName;
    @Column(name = "gstr_country_code")
    private String countryCode;
    @Column(name = "gnum_seat_id")
    private long seatId;
    @Column(name = "gdt_entry")
    private Date entry;
    @Column(name = "gnum_isvalid")
    private int isvalid;
    @Column(name = "str_remarks")
    private String remarks;

}
