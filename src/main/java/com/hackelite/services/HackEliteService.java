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
		String zonename = zonenameSet.iterator().next();
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
		uiResponseModel.setNotificationMessage(getNotifiationString(responseCode));
		
		return uiResponseModel;
	}
	

	private String getNotifiationString(int noOfAlerts) {
		String notificationString = "";
		switch(noOfAlerts) {
			case 0:
				notificationString = "This is learning phase";
				break;
			case 1:
				notificationString = "As this is the first temp alert, section has turned in warning state";
				break;
			case 2:
				notificationString = "As there are 2 temp alert from same section, section is somewhere between warning and critical state";
				break;
			case 3:
				notificationString = "As there are 4 temp alert from same section, section has turned into critical state";
				break;
			case 4:
				notificationString = "As there are 4 temp alert from same section, section has turned in very critical state";
				break;
			case 5:
				notificationString = "As there are  5 temp alert from same section, section has turned in worse state";
				break;
			default:
				notificationString = "As there are more then 5 temp alert from same section, section has turned in worse state";
				break;
		}
	
		return notificationString;
	}
	
}
