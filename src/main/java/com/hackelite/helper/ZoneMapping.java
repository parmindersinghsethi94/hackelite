package com.hackelite.helper;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class ZoneMapping {

	private static ZoneMapping zoneMapping;
	private static Map<String, Set<String>> zoneMap = new HashMap<>();

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

	private Set<String> getZone(int zonename) {
		Set<String> zoneset = new HashSet<>();
		switch (zonename) {
		case 1:
			zoneset.add("Component A");
			zoneset.add("Component B");
		case 2:
			zoneset.add("Component C");
			zoneset.add("Component D");
		case 3:
			zoneset.add("Component E");
			zoneset.add("Component F");
		case 4:
			zoneset.add("Component G");
			zoneset.add("Component H");
		default:
			zoneset.add("Component M");
		}
		return zoneset;
	}

}
