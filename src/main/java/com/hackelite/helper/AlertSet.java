package com.hackelite.helper;

import java.util.HashMap;
import java.util.Map;

public class AlertSet {

	private static AlertSet alertMapping;
	private static Map<String,Integer> alertMap = new HashMap<>();

	private AlertSet() {

	}

	public static AlertSet getAlertMapping() {
		if (alertMapping == null) {
			alertMapping = new AlertSet();
		}
		return alertMapping;
	}

	public Map<String,Integer> getAlertSet() {
		return alertMap;
	}

	public void setAlertinSet(String zonename) {
	 
		alertMap.put(zonename, alertMap.getOrDefault(zonename, 0) + 1);
	}

}
