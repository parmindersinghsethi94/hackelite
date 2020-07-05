package com.hackelite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hackelite.models.UIResponseModel;
import com.hackelite.services.HackEliteService;

@org.springframework.web.bind.annotation.RestController
public class RestController {
	@Autowired
	private HackEliteService service;
	 
	 
	@RequestMapping("/alert/{componentname}/")
	public UIResponseModel generateAlert(@PathVariable("componentname") String componentname) {
		UIResponseModel response =  service.processAlert(componentname);
		response.setHttpStatus(200);
		response.setComponentName(componentname);
		
		return response;
	}
}
