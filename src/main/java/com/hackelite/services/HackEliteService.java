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
	// 1  means, its an after effect
	// 2 means, its learning 
	
	
	public UIResponseModel processAlert(String componentname) {
		int responseCode = 0;
		Set<String> zonenameSet = componentMap.get(componentname);
		String zonename = zonenameSet.stream().findFirst().toString();
		UIResponseModel uiResponseModel = new UIResponseModel();
		if(alertSet.get(zonename)!=null) {
			//component is already there
			responseCode = 1;
		}else {
			//component is not there
			responseCode = 0;
			
			AlertSet.getAlertMapping().setAlertinSet(zonename);;
		}
		uiResponseModel.setZoneName(zonename);
		uiResponseModel.setResponseCode(responseCode);
		return uiResponseModel;
	}
	

}
