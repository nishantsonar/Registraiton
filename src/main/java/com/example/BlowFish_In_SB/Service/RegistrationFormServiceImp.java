package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Algo.Crypt;
import com.example.BlowFish_In_SB.Entity.RegistrationForm;
import org.springframework.stereotype.Service;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.Charset;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

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
