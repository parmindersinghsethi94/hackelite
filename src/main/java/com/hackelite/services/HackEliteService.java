package com.hackelite.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;

import com.hackelite.helper.AlertSet;
import com.hackelite.helper.ComponentMapping;
import com.hackelite.models.UIResponseModel;

@Component
public class HackEliteService {
	
	private static final Logger LOG = LogManager.getLogger(HackEliteService.class);
	
	private Map<String,Integer> alertSet = AlertSet.getAlertMapping().getAlertSet();
	private Map<String, Set<String>> componentMap = ComponentMapping.getZoneMapping().getComponentMap();

	// 0  means its learning phase and its started 
	// 1  means, its an after effect and just started - means warning case
	// 2  means, its an after effect and just started - means something between warning and critical case
	// 3  means, its an after effect and just started - means critical case
	// 4  means, its an after effect and just started - means more critical case
	// 5 or 5+  means, its an after effect and just started - means worse case
 
	public List<UIResponseModel> processAlert(String componentName) {
		List<UIResponseModel> uiResponseList = new ArrayList<>();
		Set<String> zoneNameSet = componentMap.get(componentName);
		Iterator<String> it = zoneNameSet.iterator();
		while (it.hasNext()) {
			String zoneName = it.next();
			uiResponseList.add(processZone(zoneName,componentName));
		}
		return uiResponseList;
	}
	
	
	private UIResponseModel processZone(String zoneName,String componentName) {
		int responseCode = 0;
		UIResponseModel uiResponseModel = new UIResponseModel();
		Integer noOfAlertsCame = alertSet.get(zoneName);
		if(noOfAlertsCame!=null) {
			//zone is already there
			responseCode = noOfAlertsCame.intValue();
			
		}else {
			//component is not there
			responseCode = 0;
			
		}
		AlertSet.getAlertMapping().setAlertinSet(zoneName);
		uiResponseModel.setZoneName(zoneName);
		uiResponseModel.setResponseCode(responseCode);
		uiResponseModel.setComponentName(componentName);
		uiResponseModel.setNotificationMessage(getNotificationMessage(responseCode, zoneName));
		
		return uiResponseModel;
	}

	private String getNotificationMessage(int noOfAlerts, String zoneName) {
		String notificationMsg = "";
		switch(noOfAlerts) {
			case 0:
				notificationMsg = "Application is in learning mode";
				break;
			case 1:
				notificationMsg = "Application has received the 1st temperature alert for the section "+ zoneName + ". The section is in warning state.";
				break;
			case 2:
				notificationMsg = "Application has received 2 temperature alerts for the section "+ zoneName + ". The section is in between warning and critical state.";
				break;
			case 3:
				notificationMsg = "Application has received 3 temperature alerts for the section "+ zoneName + ". The section is set to critical state.";
				break;
			case 4:
				notificationMsg = "Application has received 4 temperature alerts for the section "+ zoneName + ". The section is in extremely critical state.";
				break;
			case 5:
				notificationMsg = "Application has received 5 temperature alerts for the section "+ zoneName + ". The section is in worse than extremely critical state.";
				break;
			default:
				notificationMsg = "Application has received more than 5 temperature alerts for the section "+ zoneName + ". The section is in the worst possible state.";
				break;
		}
		LOG.debug("Notification message returned is {}", notificationMsg);
		return notificationMsg;
	}
	
}
