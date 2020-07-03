package com.hackelite.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HackEliteController {
	@RequestMapping("/test")
	public String index() {
		return "Greetings from Spring Boot!";
	}
}
