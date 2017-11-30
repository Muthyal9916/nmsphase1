package com.example.demo;

public class Attributes {

	
	
	private long cpuUtilization;

	private long ramUsed;
    
	private long diskStatistics;
	
	public Attributes(String ipaddress, long cpuUtilization, long ramUsed, long diskStatistics) {
		super();
		this.cpuUtilization = cpuUtilization;
		this.ramUsed = ramUsed;
		this.diskStatistics = diskStatistics;
	}

	public Attributes() {
		
	}

	

	public long getCpuUtilization() {
		return cpuUtilization;
	}

	public void setCpuUtilization(long cpuUtilization) {
		this.cpuUtilization = cpuUtilization;
	}

	public long getRamUsed() {
		return ramUsed;
	}

	public void setRamUsed(long ramUsed) {
		this.ramUsed = ramUsed;
	}

	public long getDiskStatistics() {
		return diskStatistics;
	}

	public void setDiskStatistics(long diskStatistics) {
		this.diskStatistics = diskStatistics;
	}

	
	
}
