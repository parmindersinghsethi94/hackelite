package com.hackelite.springboot;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.hackelite"})
public class HackEliteApplication {

	private static final Logger LOG = LogManager.getLogger(HackEliteApplication.class);
	
	public static void main(String[] args) {
		LOG.debug("Starting Hack Elite Team Demo");
		SpringApplication.run(HackEliteApplication.class, args);
	}

}
