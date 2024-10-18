package dmytro.zavorotnii.LR2.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailService {

//    @Autowired
//    private JavaMailSender mailSender;

    public static void sendSimpleMessage(String to, String subject, String text) {
        JavaMailSender mailSender = MailSender.getMailSender();

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("noreply@codot.pro");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        mailSender.send(message);

    }
}
