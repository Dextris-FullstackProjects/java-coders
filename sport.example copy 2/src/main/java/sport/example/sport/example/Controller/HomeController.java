package sport.example.sport.example.Controller;

import org.springframework.beans.factory.annotation.Autowired;
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
        return "OTP sent to your phone. Please check your phone.";
    }


    @PostMapping("/verify")
    public String verifyOtp(@RequestParam String key, @RequestParam String otp) {
        return otpService.validateOtp(key, otp) ? "OTP Verified Successfully" : "Invalid OTP";
    }


    @PostMapping("/send/mail")
    public String requestOtp(@RequestParam String email) {
        String otp = otpService.generateOtp(email);
        emailService.sendOtp(email, otp);
        return "OTP sent to your email. Please check your email";
    }
}