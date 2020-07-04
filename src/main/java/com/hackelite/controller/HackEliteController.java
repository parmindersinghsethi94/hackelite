package com.hackelite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackelite.models.UIResponseModel;
import com.hackelite.services.HackEliteService;

@RestController
public class HackEliteController {
	
	@Autowired
	private HackEliteService service;
	
	@RequestMapping("/alert/{zonename}/{componentname}/")
	public UIResponseModel generateAlert(@PathVariable("zonename") String zonename,@PathVariable("componentname") String componentname) {
		UIResponseModel response =  service.processAlert(zonename, componentname);
		response.setHttpStatus(200);
		response.setZoneName(zonename);
		response.setComponentName(componentname);
		
		return response;
	}
}
