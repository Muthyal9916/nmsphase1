package com.example.demo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.snmp4j.smi.OID;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;

@Controller
public class FinalController {
	
	private final String USER_AGENT = "Mozilla/5.0";

	@RequestMapping(value="/",method=RequestMethod.GET)
	public String getDisplay() {
		return "index";
	}
	
	@RequestMapping(value="/fetchnmapDetails",method=RequestMethod.GET)
	public @ResponseBody String netconfoutput(@RequestParam String ipaddress,@RequestParam String udporTcp,HttpServletResponse res) throws IOException {
		
//		PrintWriter out = res.getWriter();
        
//        String url = "http://10.32.0.19:8082/";
		String url ="http://10.103.138.210:8082/";
        

        URL obj = new URL(url+ipaddress+"/"+udporTcp);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        // optional default is GET
        con.setRequestMethod("GET");

        //add request header
        con.setRequestProperty("User-Agent", USER_AGENT);

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

//        Gson gson = new Gson();
//        String jsonStr = gson.toJson(response);
//        jsonStr = jsonStr.replaceAll("\\[","");
//        jsonStr = jsonStr.replaceAll("\\]","");
        
//        //print result
//        out.println(response.toString());
//        out.close();
//        System.out.println("**************"+jsonStr);
        
        Gson gson = new Gson();
        String jsonStr = gson.toJson(response);
        jsonStr = jsonStr.replaceAll("\\[","");
        jsonStr = jsonStr.replaceAll("\\]","");
		return jsonStr;
		
	}
	
	@RequestMapping(value="/fetchsnmpDevice",method=RequestMethod.GET)
	public void fetchingsnmpSystemInfo(HttpServletResponse res,@RequestParam String ips) throws IOException {
	
		
		PrintWriter out = res.getWriter();
        
        String url = " http://10.103.217.184:9001/";

        URL obj = new URL(url+ips);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        // optional default is GET
        con.setRequestMethod("GET");

        //add request header
        con.setRequestProperty("User-Agent", USER_AGENT);

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        out.println(response.toString());
        out.close();
        System.out.println(response.toString());
	}
	
	@RequestMapping(value="/fetchpollingDetails",method=RequestMethod.GET)
	public void fetchpollingDetails(HttpServletResponse res,@RequestParam String pollingIps,@RequestParam String pollingInfo) throws IOException {
	
		
		PrintWriter out = res.getWriter();
        
        String url = " http://10.103.217.184:9001/";

        URL obj = new URL(url+pollingIps+"/"+pollingInfo);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        // optional default is GET
        con.setRequestMethod("GET");

        //add request header
        con.setRequestProperty("User-Agent", USER_AGENT);

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        out.println(response.toString());
        out.close();
        System.out.println(response.toString());
	}
	
	//fetching arp info
	
	@RequestMapping(value="/fetchArpInfo",method=RequestMethod.GET)
	public void ArpInfo(HttpServletResponse res,@RequestParam String arpIpaddress) throws IOException {
	
		
		PrintWriter out = res.getWriter();
        
        String url = " http://10.103.217.184:9001/arp/";

        URL obj = new URL(url+arpIpaddress);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        // optional default is GET
        con.setRequestMethod("GET");

        //add request header
        con.setRequestProperty("User-Agent", USER_AGENT);

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        out.println(response.toString());
        out.close();
        System.out.println(response.toString());
	}
	
	@RequestMapping(value="/showusers",method=RequestMethod.POST)
	public  void  fetchnetconf(HttpServletResponse resp,@RequestParam("showUserIPS") String showuserIps) throws IOException {
		

		PrintWriter out = resp.getWriter();
	        
	        String url = "http://10.32.0.21:8080/ShowUsers1";
	        
	        Map hamp = new HashMap<>();
	        hamp.put("ipaddress", showuserIps);
	       
	        RestTemplate restTemplate = new RestTemplate();
	        
	        String result = restTemplate.postForObject(url, hamp,String.class);
	        
	        Gson gson = new Gson();
	        String jsonStr = gson.toJson(result);
	        System.out.println("************"+jsonStr);
//	        String reStr=jsonStr.replaceAll("//\"", "");
			String fstr=jsonStr.replaceAll("\\[", "");
			String reStr=fstr.replaceAll("\\]", "");
			String output=reStr.replaceAll("\\\\", "");
			String finaloutput=output.replaceAll("\"", "");
			
			 out.println(finaloutput);
		        System.out.println("************"+finaloutput);
	        out.close();
	        
	     
	       /* URL obj = new URL(url);
	        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

	        // optional default is GET
	        con.setRequestMethod("GET");

	        //add request header
	        con.setRequestProperty("User-Agent", USER_AGENT);

	        int responseCode = con.getResponseCode();
	        System.out.println("\nSending 'GET' request to URL : " + url);
	        System.out.println("Response Code : " + responseCode);

	        BufferedReader in = new BufferedReader(
	                new InputStreamReader(con.getInputStream()));
	        String inputLine;
	        StringBuffer response = new StringBuffer();

	        while ((inputLine = in.readLine()) != null) {
	            response.append(inputLine);
	        }
	        in.close();

	        //print result
	        out.println(response.toString());
	        out.close();*/
	    }
	
	@RequestMapping(value="/fetchnetconfAddUser",method=RequestMethod.POST)
	public  @ResponseBody String Adduser(@RequestParam("addUserIPS") String paramName,@RequestParam("name") String name) throws IOException {
//		  PrintWriter out = resp.getWriter();
	        
	        String url = "http://10.32.0.21:8080/AddUser1";
	        
	     
	        Map hamp = new HashMap<>();
	        hamp.put("name", name);
	        hamp.put("ipaddress", paramName);
	       
	        RestTemplate restTemplate = new RestTemplate();
	        
	        String result = restTemplate.postForObject(url, hamp,String.class);
	        
	        Gson gson = new Gson();
	        String jsonStr = gson.toJson(result);
			return jsonStr;
	    }
	
	@RequestMapping(value="/removeuserNetconf",method=RequestMethod.POST)
	public  @ResponseBody String Removuser(@RequestParam("name") String name) throws IOException {
//		  PrintWriter out = resp.getWriter();
	        
	        String url = "http://10.32.0.21:8080/RemoveUser";
	        
	     
	        Map hamp = new HashMap<>();
	        hamp.put("name", name);
	       
	        RestTemplate restTemplate = new RestTemplate();
	        
	        String result = restTemplate.postForObject(url, hamp,String.class);
	        
	        Gson gson = new Gson();
	        String jsonStr = gson.toJson(result);
			return jsonStr;
	    }
	
	@RequestMapping(value="/removeuser1Netconf",method=RequestMethod.POST)
	public  @ResponseBody String Removuser1(@RequestParam("ipaddress") String ipaddress,@RequestParam("name") String name) throws IOException {
//		  PrintWriter out = resp.getWriter();
	        
	        String url = "http://10.32.0.21:8080/RemoveUser1";
	        
	     
	        Map hamp = new HashMap<>();
	        hamp.put("ipaddress", ipaddress);
	        hamp.put("name", name);
	       
	        RestTemplate restTemplate = new RestTemplate();
	        
	        String result = restTemplate.postForObject(url, hamp,String.class);
	        
	        Gson gson = new Gson();
	        String jsonStr = gson.toJson(result);
			return jsonStr;
	    }
	
	//fetching graph details
	
	@RequestMapping(value="/fetchGraph",method=RequestMethod.GET)
	 public @ResponseBody Attributes add(HttpServletResponse resp,@RequestParam("ipaddresss") String ipaddresss) throws Exception {
		Attributes attributes = new Attributes();
		
		SNMPManager client = new SNMPManager(""+ipaddresss+"/161");
		client.start();
		
		/**
			* OID - .1.3.6.1.2.1.1.1.0 => SysDec
			* OID - .1.3.6.1.2.1.1.5.0 => SysName
			* => MIB explorer will be useful here, as discussed in previous article
			*/
		long cpuutilization = Long.parseLong(client.getAsString(new OID(".1.3.6.1.4.1.2021.11.9.0")));
		
		long ramUsed = Long.parseLong(client.getAsString(new OID(".1.3.6.1.4.1.2021.4.6.0")));
		
		long diskStatistics = Long.parseLong(client.getAsString(new OID(".1.3.6.1.4.1.2021.9.1.6.1")));
		
		attributes.setCpuUtilization(cpuutilization);
		attributes.setRamUsed(ramUsed/10000);
		attributes.setDiskStatistics(diskStatistics/10000);
		
		System.out.println("ramUsed"+ramUsed);
		System.out.println("diskStatistics"+diskStatistics);
		return attributes;
	
	}
}
