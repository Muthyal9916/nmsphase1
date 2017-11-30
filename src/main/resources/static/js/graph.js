$(document).ready(function(){
	
	$("#fetchingcharts").click(function(){
		
	
	var dataPoints1 = [];
	var dataPoints2 = [];
	var dataPoints3 = [];

	var chart = new CanvasJS.Chart("chartContainer", {
		zoomEnabled : true,
		title : {
			text : "System Statistics"
		},
		toolTip : {
			shared : true

		},
		legend : {
			verticalAlign : "top",
			horizontalAlign : "center",
			fontSize : 14,
			fontWeight : "bold",
			fontFamily : "calibri",
			fontColor : "dimGrey"
		},

		data : [ {
			// dataSeries1
			type : "line",
			xValueType : "dateTime",
			showInLegend : true,
			name : "CPU Usage",
			dataPoints : dataPoints1
		}, {
			// dataSeries2
			type : "line",
			xValueType : "dateTime",
			showInLegend : true,
			name : "Memory Usage",
			dataPoints : dataPoints2
		},{
			// dataSeries3
			type : "line",
			xValueType : "dateTime",
			showInLegend : true,
			name : "Disk Usage",
			dataPoints : dataPoints3
		} ],
		legend : {
			cursor : "pointer",
			itemclick : function(e) {
				if (typeof (e.dataSeries.visible) === "undefined"
						|| e.dataSeries.visible) {
					e.dataSeries.visible = false;
				} else {
					e.dataSeries.visible = true;
				}
				chart.render();
			}
		}
	});

	var updateInterval = 4000;
	// initial value
	var yValue1 = 0;
	var yValue2 = 0;
	var yValue3 = 0;
	
	//contNameValue="";
	var dataLength = 100; // number of dataPoints visible at any point
	var time = new Date();

	var updateChart = function(count) {
		count = count || 1;
		var ipaddresss;
		var ramUsed=0;
		var cpuUtilization=0;
		var diskStatistics=0;
		
		// count is number of times loop runs to generate random dataPoints
			var ipaddress = $("#generatedIps").val();
			
			$.ajax({
				  type: "GET",
				  url: "fetchGraph",
				  data:{
					  ipaddresss:ipaddress,
				  },
				  success: function(response){
					  
				   $('#result').html("");
				   var obj = response;
				   
				   ramUsed = obj.ramUsed;
				   cpuUtilization = obj.cpuUtilization;
				   diskStatistics = obj.diskStatistics;
				
				   yValue1 = cpuUtilization;
				   yValue2 = ramUsed;
				   yValue3 = diskStatistics;
				   
					dataPoints1.push({
						x : time.getTime(),
						y : yValue1
					});

					dataPoints2.push({
						x : time.getTime(),
						y : yValue2
					});
					
					dataPoints3.push({
						x : time.getTime(),
						y : yValue3
					});
					
					chart.render();
				  },
			});
			// add interval duration to time				
			time.setTime(time.getTime() + updateInterval);

		// updating legend text with  updated with y Value 
		chart.options.data[0].legendText = " CPU Usage " + yValue1 + "%";
		chart.options.data[1].legendText = " Memory Usage " + yValue2 + "MBytes";
		chart.options.data[2].legendText = " Disk Usage " + yValue3 + "%";

	};
	// update chart after specified interval 
	setInterval(function() {
		updateChart()
	}, updateInterval);
});
});
