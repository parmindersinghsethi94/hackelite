package com.hackelite.helper;

import java.util.HashSet;
import java.util.Set;

public class AlertSet {

	private static AlertSet alertMapping;
	private static Set<String> alertMap = new HashSet<>();

	private AlertSet() {

	}

	public static AlertSet getZoneMapping() {
		if (alertMapping == null) {
			alertMapping = new AlertSet();
		}
		return alertMapping;
	}

	public Set<String> getAlertMap() {
		return alertMap;
	}

	public void setAlertinMap(String alert) {
		alertMap.add(alert);
	}

}
