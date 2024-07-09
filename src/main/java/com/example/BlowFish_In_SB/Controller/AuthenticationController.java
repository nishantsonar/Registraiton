package com.example.BlowFish_In_SB.Controller;

import com.example.BlowFish_In_SB.Dtos.LoginUserDto;
import com.example.BlowFish_In_SB.Dtos.RegisterUserDto;
import com.example.BlowFish_In_SB.Entity.RegistrationForm;
import com.example.BlowFish_In_SB.Entity.User;
import com.example.BlowFish_In_SB.Payloads.LoginResponse;
import com.example.BlowFish_In_SB.Service.AuthenticationService;
import com.example.BlowFish_In_SB.Service.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/auth")
@RestController
@CrossOrigin(origins = "*")

public class AuthenticationController {
    private final JwtService jwtService;
    private final AuthenticationService authenticationService;
//    private final CryptoJS cryptoJS = new CryptoJS();

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUserDto registerUserDto, HttpServletRequest request) {

        System.err.println("CLIENT IP ADDRESS::::: " + request.getRemoteAddr());
        System.err.println("User-Agent ADDRESS::::: " + request.getHeader("User-Agent"));
        User registeredUser = authenticationService.signup(registerUserDto);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDto loginUserDto, HttpServletRequest request) throws Exception {
        System.err.println("CLIENT IP ADDRESS::::: " + request.getRemoteAddr());
        System.err.println("User-Agent ADDRESS::::: " + request.getHeader("User-Agent"));
        System.out.println("Encrypted data EMAIL::: " + loginUserDto.getEmail());
        System.out.println("Encrypted data PASSWORD::: " + loginUserDto.getPassword());
//        System.out.println("Decrypted data EMAIL::: " + AES_Algo.decrypt(loginUserDto.getEmail()));
//        System.out.println("Decrypted data PASSWORD::: " + AES_Algo.decrypt(loginUserDto.getPassword()));

//        loginUserDto.setEmail(cryptoJS.decrypt(loginUserDto.getEmail()));
//        loginUserDto.setPassword(cryptoJS.decrypt(loginUserDto.getPassword()));

//        loginUserDto.setEmail(AES_Algo.decrypt(loginUserDto.getEmail()));
//        loginUserDto.setPassword(AES_Algo.decrypt(loginUserDto.getPassword()));
        User authenticatedUser = authenticationService.authenticate(loginUserDto);
        if (authenticatedUser == null) {
            return ResponseEntity.notFound().build();
        } else {
            System.out.println("User::: " + authenticatedUser);
            String jwtToken = jwtService.generateToken(authenticatedUser);
            System.out.println("Token:::: " + jwtToken);

            LoginResponse loginResponse = new LoginResponse().setToken(jwtToken).setExpiresIn(jwtService.getExpirationTime());

            return ResponseEntity.ok(loginResponse);
        }

    }
    @PostMapping("/registration")
    public String registraion(@RequestBody RegistrationForm registrationForm){
        return "HELLO...";

    }
}
