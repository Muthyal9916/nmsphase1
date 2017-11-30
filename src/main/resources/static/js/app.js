genIPs='';
removeUsers1="";
removeUsers="";
function snmpLoad()
{
var listIp = localStorage.getItem('ip');
listIp=listIp.slice(1,-1);
var list = listIp.split(",");


for(var i=0;i<list.length;i++)
	{
	$('#generatedIps').append('<option>'+list[i]+'</option>');  
	}

$('#generatedIps').prepend('<option>'+"Select"+'</option>');
}

function graphIds()
{
var listIp = localStorage.getItem('ip');
listIp=listIp.slice(1,-1);
var list = listIp.split(",");


for(var i=0;i<list.length;i++)
	{
	$('#generatedIps').append('<option>'+list[i]+'</option>');  
	}

$('#generatedIps').prepend('<option>'+"Select"+'</option>');
}




function arpload()
{
var listIp = localStorage.getItem('ip');
listIp=listIp.slice(1,-1);
var list = listIp.split(",");


for(var i=0;i<list.length;i++)
	{
	$('#arpIps').append('<option>'+list[i]+'</option>');  
	}

$('#arpIps').prepend('<option>'+"Select"+'</option>');
}



function netconfLoad()
{
	
var listIp = localStorage.getItem('ip');
listIp=listIp.slice(1,-1);
var list = listIp.split(",");
for(var i=0;i<list.length;i++)
	{
	$('#netconfIps').append('<option>'+list[i]+'</option>');  
	}

$('#netconfIps').prepend('<option>'+"Select"+'</option>');
}

function addUserLoad()
{
	
var listIp = localStorage.getItem('FetchingRemoveUser1IPS');

listIp=listIp.slice(1,-1);
var list = listIp.split(",");
for(var i=0;i<list.length;i++)
	{
	$('#ipaddressAdd').append('<option>'+list[i]+'</option>');  
	}

$('#ipaddressAdd').prepend('<option>'+"Select"+'</option>');
}

function showuserLoad()
{
	var listIp = localStorage.getItem('FetchingRemoveUser1IPS');

	listIp=listIp.slice(1,-1);
	var list = listIp.split(",");
	for(var i=0;i<list.length;i++)
		{
		$('#ipaddressShow').append('<option>'+list[i]+'</option>');  
		}

	$('#ipaddressShow').prepend('<option>'+"Select"+'</option>');

/*$.ajax({
		type:'POST',
		url:'showusers',
		success:function(response){
			
//			window.location="snmp.html";
			$("#showUsers").html(response);
		}
 }); */
}


$("#showUserSubmit").click(function(){
	
	
	var showUserIPS = $("#ipaddressShow").val();
	
	$.ajax({
     		type:'POST',
     		url:'showusers',
     		data:{
    			"showUserIPS":showUserIPS,
    			},
     		success:function(response){
     			
     			$("#showUsersInfo").html(response);

     			
     		}
    	 }); 
	
});


$("#showRemoveUserSubmit").click(function(){
	
//	$('#showRemoveUserSubmit').attr('disabled',false);
	
	var showUserIPS = $("#ipaddressRemove").val();
	
	$.ajax({
     		type:'POST',
     		url:'showusers',
     		data:{
    			"showUserIPS":showUserIPS,
    			},
     		success:function(response){
     			
     			removeUsers=response;
     	   			localStorage.setItem('RemoveUser',removeUsers);
     				var listIp = localStorage.getItem('RemoveUser');
     				var list = listIp.split(",");
     				for(var i=0;i<list.length;i++)
     					{
     					$('#removeusers').append('<option>'+list[i]+'</option>');  
     					}

     				$('#removeusers').prepend('<option>'+"Select"+'</option>');
     				
//     				$('#showRemoveUserSubmit').attr('disabled',true);
     				$('#removeuserSubmit').attr('disabled',false);
     			
     		}
    	 }); 
	
});

$("#showremoveuser1Submit").click(function(){
	
	
	var showUserIPS = $("#ipaddressRemoveUser1").val();
	
	$.ajax({
     		type:'POST',
     		url:'showusers',
     		data:{
    			"showUserIPS":showUserIPS,
    			},
     		success:function(response){
     			
     			removeUsers1=response;
     	   			localStorage.setItem('RemoveUser1',removeUsers1);
     				var listIp = localStorage.getItem('RemoveUser1');
     				var list = listIp.split(",");
     				for(var i=0;i<list.length;i++)
     					{
     					$('#removeusers1').append('<option>'+list[i]+'</option>');  
     					}

     				$('#removeusers1').prepend('<option>'+"Select"+'</option>');
     			
     		}
    	 }); 
	
});



function removeUser(){
var listIp = localStorage.getItem('FetchingRemoveUser1IPS');
listIp=listIp.slice(1,-1);
var list = listIp.split(",");
for(var i=0;i<list.length;i++)
	{
	$('#ipaddressRemove').append('<option>'+list[i]+'</option>');  
	}

$('#ipaddressRemove').prepend('<option>'+"Select"+'</option>');

$('#showRemoveUserSubmit').attr('disabled',false);
$('#removeuserSubmit').attr('disabled',true);

}

/*function removeUser(){
	var showUserIPS = $("#ipaddressShow").val();
	
	$.ajax({
		type:'POST',
		url:'showusers',
		data:{
			"showUserIPS":showUserIPS,
			},
		success:function(result){
			
		var response=JSON.parse(result);
			genIPs=response;
   			//$("#generatedIps").prepend(prep);
   			localStorage.setItem('ip',genIPs);
			
			var listIp = localStorage.getItem('ip');
//			listIp=listIp.slice(1,-1);
//			listIp.replace("/\"/g, ""));  
			var list = listIp.split(",");
			for(var i=0;i<list.length;i++)
				{
				$('#removeusers').append('<option>'+list[i]+'</option>');  
				}

			$('#removeusers').prepend('<option>'+"Select"+'</option>');
		}
 }); 
}*/

function removeUser1(){
	
	var listIp = localStorage.getItem('FetchingRemoveUser1IPS');
	listIp=listIp.slice(1,-1);
	var list = listIp.split(",");
	for(var i=0;i<list.length;i++)
		{
		$('#ipaddressRemoveUser1').append('<option>'+list[i]+'</option>');  
		}

	$('#ipaddressRemoveUser1').prepend('<option>'+"Select"+'</option>');
	
//	$.ajax({
//		type:'GET',
//		url:'showusers',
//		success:function(result){
//			
//		var response=JSON.parse(result);
//		removeUsers1=response;
//   			localStorage.setItem('RemoveUser1',removeUsers1);
//			var listIp = localStorage.getItem('RemoveUser1');
//			var list = listIp.split(",");
//			for(var i=0;i<list.length;i++)
//				{
//				$('#removeusers1').append('<option>'+list[i]+'</option>');  
//				}
//
//			$('#removeusers1').prepend('<option>'+"Select"+'</option>');
//		}
// }); 
}

function pollingClick()
{
	

var listIp = localStorage.getItem('ip');
listIp=listIp.slice(1,-1);
var list = listIp.split(",");
for(var i=0;i<list.length;i++)
	{
	$('#pollingIps').append('<option>'+list[i]+'</option>');  
	}

$('#pollingIps').prepend('<option>'+"Select"+'</option>');
}

$(document).ready(function(){
	
	$("#snmpSubmit").click(function(){
		
		
		var ips = $("#generatedIps").val();
		
		
		$.ajax({
	     		type:'GET',
	     		url:'fetchsnmpDevice',
	     		data:{
	    			"ips":ips,
	    			},
	     		success:function(response){
	     			
//	     			window.location="snmp.html";
	     			$("#textIp").html(response);
	     		}
	    	 }); 
		
	});
	
	
	
	
$("#graphSubmit").click(function(){
		
		
		var ips = $("#generatedIps").val();
		
		
		$.ajax({
	     		type:'GET',
	     		url:'sendingIpstoGraph',
	     		data:{
	    			"ips":ips,
	    			},
	     		success:function(response){
	     			
//	     			window.location="snmp.html";
	     			$("#textIp").html(response);
	     		}
	    	 }); 
		
	})
	
	
	
	
	
$("#arpSubmit").click(function(){
		
		
		var arpIpaddress = $("#arpIps").val();
		
		
		$.ajax({
	     		type:'GET',
	     		url:'fetchArpInfo',
	     		data:{
	    			"arpIpaddress":arpIpaddress,
	    			},
	     		success:function(response){
	     			
	     			
	     			
//	     			window.location="snmp.html";
	     			$("#arpInfo").html(response);
	     		}
	    	 }); 
		
	})
	
$("#removeuserSubmit").click(function(){
		
		
		var name = $("#removeusers").val();
		
		$.ajax({
	     		type:'POST',
	     		url:'removeuserNetconf',
	     		data:{
	    			"name":name,
	    			},
	     		success:function(response){
	     			
//	     			window.location="snmp.html";
	     			$("#removeUserInfo").html(response);
	     			
//	     			location.reload();
	     		}
	    	 }); 
		
	});


$("#removeuser1Submit").click(function(){
	
	
	var ipaddress = $("#ipaddressRemoveUser1").val();
	var name = $("#removeusers1").val();
	
	$.ajax({
     		type:'POST',
     		url:'removeuser1Netconf',
     		data:{
     			"ipaddress":ipaddress,
    			"name":name,
    			},
     		success:function(response){
     			
//     			window.location="snmp.html";
     			$("#removeUser1Info").html(response);
     		}
    	 }); 
	
});
	
	
$("#pollingSubmit").click(function(){
		
		
		var pollingIps = $("#pollingIps").val();
		var pollingInfo = $("#pollingInfo").val();
		
		
		
		$.ajax({
	     		type:'GET',
	     		url:'fetchpollingDetails',
	     		data:{
	    			"pollingIps":pollingIps,
	    			"pollingInfo":pollingInfo,
	    			},
	     		success:function(response){
	     			
//	     			window.location="snmp.html";
	     			$("#pollingArea").html(response);
	     		}
	    	 }); 
		
	});
	
	
	
$("#addUserSubmit").click(function(){
		
		
		var addUserIPS = $("#ipaddressAdd").val();
		var name = $("#username").val();
		
		$.ajax({
	     		type:'POST',
	     		url:'fetchnetconfAddUser',
	     		data:{
	    			"addUserIPS":addUserIPS,
	    			"name":name,
	    			},
	     		success:function(response){
	     			
//	     			window.location="snmp.html";
	     			$("#addUsernames").html(response);
	     		}
	    	 }); 
		
	});
	
	
	$("#nmapsubmit").click(function(){
		
		
		var ipaddress = $("#hostnames").val();
		var udporTcp = $('input[name=optradio]:checked').val();
	
		
		if(udporTcp == "udp"){
			 // window.location="snmp.html";
			$("#netconfsidebar").hide();
			  $.ajax({
  	     		type:'GET',
  	     		url:'fetchnmapDetails',
  	     		data:{
  	    			"ipaddress":ipaddress,
  	    			"udporTcp":udporTcp
  	    			},
  	     		success:function(response){
  	     			
  	     			genIPs=response;
  	     			//$("#generatedIps").prepend(prep);
  	     			localStorage.setItem('ip',genIPs);
  	     			window.location="snmp.html";
  	     			
  	     			//console.log(response);
  	     			//$("#generatedIps").html();
  	     		}
  	    	 }); 
			  
			
		}else if(udporTcp == "tcp"){
			
//			window.location="adduser.html";
			
			 $.ajax({
	  	     		type:'GET',
	  	     		url:'fetchnmapDetails',
	  	     		data:{
	  	    			"ipaddress":ipaddress,
	  	    			"udporTcp":udporTcp
	  	    			},
	  	     		success:function(response){
	  	     			genIPs=response;
	  	     			//$("#generatedIps").prepend(prep);
	  	     			
	  	     			localStorage.setItem('FetchingRemoveUser1IPS',genIPs);
	  	     			window.location="adduser.html";
	  	     			$("#snmpsidebar").hide();
	  	     			
	  	     			//console.log(response);
	  	     			//$("#generatedIps").html();
	  	     		}
	  	    	 }); 

		}
		
		
		
	});
});