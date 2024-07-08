package com.example.BlowFish_In_SB.Reposiory;

import com.example.BlowFish_In_SB.Entity.Appellation_1_Master;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Appellation1Repository extends JpaRepository<Appellation_1_Master,Integer> {

    List<Appellation_1_Master> findAllByIsValid(Integer id);
}
