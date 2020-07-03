package com.hackelite.models;


public class UIRequestModel {

	private String zoneNumber;
	private String componentName;
	
	public String getZoneName() {
		return zoneNumber;
	}
	public void setZoneName(String zoneName) {
		this.zoneNumber = zoneName;
	}
	public String getComponentName() {
		return componentName;
	}
	public void setComponentName(String componentName) {
		this.componentName = componentName;
	}

}
