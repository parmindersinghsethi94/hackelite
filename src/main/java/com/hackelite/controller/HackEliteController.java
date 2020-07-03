package com.hackelite.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackelite.models.UIResponseModel;

@RestController
public class HackEliteController {
	
	
	@RequestMapping("/alert/{zonename}/{componentname}/")
	public UIResponseModel generateAlert(@PathVariable("zonename") String zonename,@PathVariable("componentname") String componentname) {
		UIResponseModel response =  new UIResponseModel();
		response.setZoneName(zonename);
		response.setComponentName(componentname);
		
		return response;
	}
}
