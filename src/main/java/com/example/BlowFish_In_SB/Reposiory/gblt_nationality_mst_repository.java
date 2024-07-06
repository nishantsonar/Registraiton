/* Author @ Nishant Suresh Sonar 
created on 24/06/24 
inside the package - com.example.BlowFish_In_SB.Reposiory */
package com.example.BlowFish_In_SB.Reposiory;

import com.example.BlowFish_In_SB.Entity.gblt_nationality_mst;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface gblt_nationality_mst_repository extends JpaRepository<gblt_nationality_mst,Integer> {
}
