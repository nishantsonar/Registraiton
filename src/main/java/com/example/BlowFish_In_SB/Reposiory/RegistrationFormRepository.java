package com.example.BlowFish_In_SB.Reposiory;

import com.example.BlowFish_In_SB.Entity.RegistrationForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationFormRepository extends JpaRepository<RegistrationForm,Integer>{
}
