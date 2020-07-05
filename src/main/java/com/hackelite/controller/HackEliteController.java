package com.hackelite.controller;

import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HackEliteController {
	
	 
	@RequestMapping("/")
	public String start() throws IOException {
		return "faultyfan.html";
	}
	
	
}
