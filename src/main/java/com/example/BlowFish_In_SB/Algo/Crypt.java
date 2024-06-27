package com.example.BlowFish_In_SB.Algo;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Base64;

public class Crypt {
    private static final String ALGO = "AES"; // Default uses ECB PKCS5Padding
//    private final static String secretKey = "mustbe16byteskey";
    private final static String secretKey = "This_MySecretKey";
   private static final String encodedBase64Key = encodeKey(secretKey);
    public  String encrypt(String Data)  {
        String encryptedValue="";
        System.out.println("encodedBase64Key: "+encodedBase64Key);
        try {
            Key key = generateKey(encodedBase64Key);
            Cipher c = Cipher.getInstance(ALGO);
            c.init(Cipher.ENCRYPT_MODE, key);
            byte[] encVal = c.doFinal(Data.getBytes());
            encryptedValue = Base64.getEncoder().encodeToString(encVal);
        }catch (Exception ignored){}
            return encryptedValue;
    }

    public  String decrypt(String strToDecrypt) {
        System.out.println("encodedBase64Key: "+encodedBase64Key);
        String decryptedValue="";
        try {
            Key key = generateKey(encodedBase64Key);
            Cipher cipher = Cipher.getInstance(ALGO);
            cipher.init(Cipher.DECRYPT_MODE, key);
            return new String(cipher.doFinal(Base64.getDecoder().decode(strToDecrypt)));
        } catch (Exception e) {
            System.out.println("Error while decrypting: " + e.toString());
        }
        return null;
    }

    private static Key generateKey(String secret) throws Exception {
        byte[] decoded = Base64.getDecoder().decode(secret.getBytes());
        Key key = new SecretKeySpec(decoded, ALGO);
        return key;
    }

    private static String decodeKey(String str) {
        byte[] decoded = Base64.getDecoder().decode(str.getBytes());
        return new String(decoded);
    }

    private static String encodeKey(String str) {
        byte[] encoded = Base64.getEncoder().encode(str.getBytes());
        return new String(encoded);
    }

}
