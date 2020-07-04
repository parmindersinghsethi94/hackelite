package com.hackelite.helper;

import java.util.HashSet;
import java.util.Set;

public class AlertSet {

	private static AlertSet alertMapping;
	private static Set<String> alertSet = new HashSet<>();

	private AlertSet() {

	}

	public static AlertSet getAlertMapping() {
		if (alertMapping == null) {
			alertMapping = new AlertSet();
		}
		return alertMapping;
	}

	public Set<String> getAlertSet() {
		return alertSet;
	}

	public void setAlertinSet(String alert) {
		alertSet.add(alert);
	}

}
