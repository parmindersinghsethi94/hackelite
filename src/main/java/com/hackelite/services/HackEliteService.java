package com.hackelite.services;

import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Component;

import com.hackelite.helper.AlertSet;
import com.hackelite.helper.ZoneMapping;
import com.hackelite.models.UIResponseModel;

@Component
public class HackEliteService {
	
	private Set<String> alertSet = AlertSet.getAlertMapping().getAlertSet();
	private Map<String, Set<String>> zoneMap = ZoneMapping.getZoneMapping().getZoneMap();

	// 0  means its learning phase and its started 
	// 1  means, its an after effect
	// 2 means, its learning 
	
	
	public UIResponseModel processAlert(String zonename,String componentname) {
		int responseCode = 0;
		UIResponseModel uiResponseModel = new UIResponseModel();
		if(alertSet.contains(componentname)) {
			//component is already there
			responseCode = 1;
		}else {
			//component is not there
			responseCode = 0;
		}
		uiResponseModel.setResponseCode(responseCode);
		return uiResponseModel;
	}
	

}
