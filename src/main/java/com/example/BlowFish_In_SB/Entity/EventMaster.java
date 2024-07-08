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
@Table(name = "pist_event_mst", schema = "ahism")
public class EventMaster
{
    @Id
    @Column(name = "num_event_id", nullable = false)
    private Long eventId;

    @Column(name = "str_event_name", length = 50)
    private String eventName;

    @Column(name = "str_event_reason", length = 100)
    private String eventReason;

    @Column(name = "str_is_pay_rel_event", length = 1)
    private String isPayRelatedEvent;

    @Column(name = "str_remarks", length = 100)
    private String remarks;

    @Column(name = "gnum_isvalid", nullable = false)
    private Integer isValid;

    @Column(name = "gnum_seat_id", nullable = false)
    private Long seatId;

    @Column(name = "gdt_entry", nullable = false)
    private Timestamp entryDate;

    @Column(name = "str_event_code", length = 6)
    private String eventCode;
    /*
    CREATE TABLE IF NOT EXISTS ahism.pist_event_mst
(
    num_event_id numeric(2,0) NOT NULL,
    str_event_name character varying(50) COLLATE pg_catalog."default",
    str_event_reason character varying(100) COLLATE pg_catalog."default",
    str_is_pay_rel_event character varying(1) COLLATE pg_catalog."default",
    str_remarks character varying(100) COLLATE pg_catalog."default",
    gnum_isvalid numeric(1,0) NOT NULL,
    gnum_seat_id numeric(5,0) NOT NULL,
    gdt_entry timestamp without time zone NOT NULL,
    str_event_code character(6) COLLATE pg_catalog."default",
    CONSTRAINT "PK_PIST_EVENT_MST" PRIMARY KEY (num_event_id)
)
     */
}
