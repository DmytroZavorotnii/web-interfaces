package dmytro.zavorotnii.LR2;

import dmytro.zavorotnii.LR2.json.JsonExample;
import dmytro.zavorotnii.LR2.log.LogExample;
import dmytro.zavorotnii.LR2.mail.EmailService;
import dmytro.zavorotnii.LR2.webflux.WebClientExample;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Lr2Application {
//	@Autowired
//	private EmailService emailService;

	public static void main(String[] args) {
		SpringApplication.run(Lr2Application.class, args);
		JsonExample.useJson();
		LogExample.useLogs();
		WebClientExample example = new WebClientExample();
		System.out.println(example.getData());
		EmailService.sendSimpleMessage("dzavorotniy@codot.pro", "Example", "Example text");
	}

}
