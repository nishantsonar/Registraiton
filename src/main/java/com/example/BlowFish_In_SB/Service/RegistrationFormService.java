package com.example.BlowFish_In_SB.Service;

import com.example.BlowFish_In_SB.Entity.RegistrationForm;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

public interface RegistrationFormService {
    public String encryptData(String data);
    public String decryptData(String data);
}
