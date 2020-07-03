package com.hackelite.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.hackelite"})
public class HackEliteApplication {

	public static void main(String[] args) {
		SpringApplication.run(HackEliteApplication.class, args);
	}

}
