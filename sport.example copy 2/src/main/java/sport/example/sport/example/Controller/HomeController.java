package sport.example.sport.example.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;
import sport.example.sport.example.Service.EmailService;
import sport.example.sport.example.Service.OtpService;
import sport.example.sport.example.Service.SmsService;

import java.util.Map;
@RestController
@RequestMapping("/app")
public class HomeController {

    @Autowired
    private OtpService otpService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private SmsService smsService;


    @GetMapping("/user")
    public Map<String, Object> user(Authentication authentication) {
        if (authentication == null) {
            return null;
        }
        OAuth2User user = (OAuth2User) authentication.getPrincipal();
        return Map.of(
                "name", user.getAttribute("name"),
                "email", user.getAttribute("email")
        );
    }


    @PostMapping("/send/sms")
    public String sendOtpSms(@RequestParam String phone) {
        String otp = otpService.generateOtp(phone);
        smsService.sendOtp(phone, otp);
        return "OTP sent to your phone. Please check your phone. +otp";
    }


//    @PostMapping("/verify")
//    public String verifyOtp(@RequestParam String key, @RequestParam String otp) {
//        return otpService.validateOtp(key, otp) ? "OTP Verified Successfully" : "Invalid OTP";
//    }
//@PostMapping("/verify")
//public ResponseEntity<Map<String, Object>> verifyOtp(
//        @RequestParam String key,
//        @RequestParam String otp) {
//
//    boolean valid = otpService.validateOtp(key, otp);
//
//    if (valid) {
//        return ResponseEntity.ok(Map.of(
//                "success", true,
//                "message", "OTP Verified Successfully"
//        ));
//    } else {
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of(
//                "success", false,
//                "message", "Invalid OTP"
//        ));
//    }
//}

    @PostMapping("/verify")
    public ResponseEntity<Map<String, Object>> verifyOtp(
            @RequestParam String key,
            @RequestParam String otp) {

        boolean valid = otpService.validateOtp(key, otp);

        return ResponseEntity.ok(Map.of(
                "success", valid,
                "message", valid ?
                        "OTP Verified Successfully" :
                        "Invalid OTP"
        ));
    }

    @PostMapping("/send/mail")
    public String requestOtp(@RequestParam String email) {
        String otp = otpService.generateOtp(email);
        emailService.sendOtp(email, otp);
        return "OTP sent to your email. Please check your email";
    }
}