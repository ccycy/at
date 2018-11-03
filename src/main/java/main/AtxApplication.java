package main;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"test"})
public class AtxApplication {
    public static void main(String[] args) {
        SpringApplication.run(AtxApplication.class, args);
    }
}
