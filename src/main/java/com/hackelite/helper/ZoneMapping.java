package com.hackelite.helper;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class ZoneMapping {

	//reverse
	private static ZoneMapping zoneMapping;
	private Map<String, Set<String>> zoneMap = new HashMap<>();

	private ZoneMapping() {
		zoneMap.put("zone1", getZone(1));
		zoneMap.put("zone2", getZone(2));
		zoneMap.put("zone3", getZone(3));
		zoneMap.put("zone4", getZone(4));
	}

	public static ZoneMapping getZoneMapping() {
		if (zoneMapping == null) {
			zoneMapping = new ZoneMapping();
		}
		return zoneMapping;
	}

	public Map<String, Set<String>> getZoneMap(){
		return zoneMap;
	}
	
	
	private Set<String> getZone(int zonename) {
		Set<String> zoneset = new HashSet<>();
		switch (zonename) {
		case 1:
			zoneset.add("Component A");
			zoneset.add("Component B");
		case 2:
			zoneset.add("Component C");
			zoneset.add("Component D");
			zoneset.add("Component E");
		case 3:
			zoneset.add("Component F");
			zoneset.add("Component G");
		case 4:
			zoneset.add("Component F");
			zoneset.add("Component I");
			zoneset.add("Component H");
		default:
			;
		}
		return zoneset;
	}

}
