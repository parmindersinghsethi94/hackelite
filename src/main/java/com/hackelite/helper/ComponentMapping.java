package com.hackelite.helper;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class ComponentMapping {

	private static ComponentMapping componentMapping;
	private Map<String, Set<String>> componentMap = new HashMap<>();

	private ComponentMapping() {
		componentMap.put("ComponentA", getComponent('a'));
		componentMap.put("ComponentB", getComponent('b'));
		componentMap.put("ComponentC", getComponent('c'));
		componentMap.put("ComponentD", getComponent('d'));
		componentMap.put("ComponentE", getComponent('e'));
		componentMap.put("ComponentF", getComponent('f'));
		componentMap.put("ComponentG", getComponent('g'));
		componentMap.put("ComponentH", getComponent('h'));
		componentMap.put("ComponentI", getComponent('i'));
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
			break;
		case 'b':
			zoneset.add("zone1"); 
			break;
		case 'c':
			zoneset.add("zone2"); 
			break;
		case 'd':
			zoneset.add("zone2"); 
			break;
		case 'e':
			zoneset.add("zone2"); 
			break;
		case 'f':
			zoneset.add("zone3"); 
			zoneset.add("zone4"); 
			break;
		case 'g':
			zoneset.add("zone3"); 
			break;
		case 'h':
			zoneset.add("zone4"); 
			break;
		case 'i':
			zoneset.add("zone4"); 
			break;
		 
		default:
			;
		}
		return zoneset;
	}

	
	
}
