package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Algo.Crypt;
import org.springframework.stereotype.Service;

@Service
public class RegistrationFormServiceImp implements RegistrationFormService {
    private final Crypt crypt=new Crypt();

    @Override
    public String encryptData(String registrationForm) {
        System.out.println("Encrypted: "+crypt.encrypt(registrationForm));
      return crypt.encrypt(registrationForm);

    }

    @Override
    public String decryptData(String data) {
        System.out.println( "Decrypted: "+crypt.decrypt(data));
        return crypt.decrypt(data);
    }
}
