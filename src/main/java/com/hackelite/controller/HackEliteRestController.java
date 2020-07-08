package com.hackelite.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hackelite.models.UIResponseModel;
import com.hackelite.services.HackEliteService;

@org.springframework.web.bind.annotation.RestController
public class HackEliteRestController {
	
	private static final Logger LOG = LogManager.getLogger(HackEliteRestController.class);
	
	@Autowired
	private HackEliteService service;
	 
	 
	@RequestMapping("/hackelite/alert/{componentname}/")
	public List<UIResponseModel> generateAlert(@PathVariable("componentname") String componentname) {
		LOG.debug("Inside generate Alert with component name {}", componentname);
		List<UIResponseModel> response =  service.processAlert(componentname);
		LOG.debug("Response for the generateAlert for componentName {} is {}", componentname, response.toString());
		return response;
	}
}
