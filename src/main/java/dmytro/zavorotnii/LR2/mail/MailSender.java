package dmytro.zavorotnii.LR2.mail;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

//@Configuration
public class MailSender {
//    @Bean
    public static JavaMailSender getMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost(System.getenv("MAIL_HOST"));
        mailSender.setPort(465);

        mailSender.setUsername(System.getenv("MAIL_USER"));
        mailSender.setPassword(System.getenv("MAIL_PASS"));

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.debug", "true");
        props.put("mail.smtp.ssl.enable", "true");
        props.put("mail.smtp.socketFactory.port", 465);
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");

        return mailSender;
    }
}
