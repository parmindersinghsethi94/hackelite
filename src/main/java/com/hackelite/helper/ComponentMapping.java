package com.hackelite.helper;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class ComponentMapping {

	private static ComponentMapping componentMapping;
	private Map<String, Set<String>> componentMap = new HashMap<>();

	private ComponentMapping() {
		componentMap.put("Component A", getComponent('a'));
		componentMap.put("Component B", getComponent('b'));
		componentMap.put("Component C", getComponent('c'));
		componentMap.put("Component D", getComponent('d'));
		componentMap.put("Component E", getComponent('e'));
		componentMap.put("Component F", getComponent('f'));
		componentMap.put("Component G", getComponent('g'));
		componentMap.put("Component H", getComponent('h'));
		componentMap.put("Component I", getComponent('i'));
	}

	public static ComponentMapping getZoneMapping() {
		if (componentMapping == null) {
			componentMapping = new ComponentMapping();
		}
		return componentMapping;
	}

	public Map<String, Set<String>> getComponentMap(){
		return componentMap;
	}
	
	private Set<String> getComponent(char componentName) {
		Set<String> zoneset = new HashSet<>();
		switch (componentName) {
		case 'a':
			zoneset.add("zone1"); 
		case 'b':
			zoneset.add("zone1"); 
		case 'c':
			zoneset.add("zone2"); 
		case 'd':
			zoneset.add("zone2"); 
		case 'e':
			zoneset.add("zone2"); 
		case 'f':
			zoneset.add("zone3"); 
			zoneset.add("zone4"); 
		case 'g':
			zoneset.add("zone3"); 
		case 'h':
			zoneset.add("zone4"); 
		case 'i':
			zoneset.add("zone4"); 
		 
		default:
			;
		}
		return zoneset;
	}

	
	
}
