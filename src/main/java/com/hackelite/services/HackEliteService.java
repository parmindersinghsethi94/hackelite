package com.hackelite.services;

import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Component;

import com.hackelite.helper.AlertSet;
import com.hackelite.helper.ComponentMapping;
import com.hackelite.models.UIResponseModel;

@Component
public class HackEliteService {
	
	private Map<String,Integer> alertSet = AlertSet.getAlertMapping().getAlertSet();
	private Map<String, Set<String>> componentMap = ComponentMapping.getZoneMapping().getComponentMap();

	// 0  means its learning phase and its started 
	// 1  means, its an after effect and just started - means warning case
	// 2  means, its an after effect and just started - means something between warning and critical case
	// 3  means, its an after effect and just started - means critical case
	// 4  means, its an after effect and just started - means more critical case
	// 5 or 5+  means, its an after effect and just started - means worse case

	
	
	public UIResponseModel processAlert(String componentname) {
		int responseCode = 0;
		Set<String> zonenameSet = componentMap.get(componentname);
		String zonename = zonenameSet.stream().findFirst().toString();
		UIResponseModel uiResponseModel = new UIResponseModel();
		Integer noOfAlertsCame = alertSet.get(zonename);
		if(noOfAlertsCame!=null) {
			//zone is already there
			responseCode = noOfAlertsCame.intValue();
		}else {
			//component is not there
			responseCode = 0;
			AlertSet.getAlertMapping().setAlertinSet(zonename);
		}
		uiResponseModel.setZoneName(zonename);
		uiResponseModel.setResponseCode(responseCode);
		return uiResponseModel;
	}
	

}
