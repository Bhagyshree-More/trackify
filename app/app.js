var BASE_URL1 = "https://api-sandbox.pitneybowes.com/oauth/token";

var BASE_URL2 = "https://api-sandbox.pitneybowes.com/shippingservices/v1/tracking/70180360000213168419?packageIdentifierType=TrackingNumber&carrier=USPS";

var BASE_URL = "https://httpbin.org/";

function displayStatus(type, message) {
  client.interface.trigger('showNotify', { type: type, message: message});
}


$(document).ready( function() {
  app.initialized()
  .then(function(_client) {
    window.client = _client;
    client.events.on('app.activated', function() {
      jQuery(".request-btn").click(function(e) {
        var method = e.target.getAttribute('method');
        var url = BASE_URL + method;
        var options = {
          "headers" : {
            "Content-Type": "application/json"
          }
        };
        client.request[method](url, options)
        .then(function() {
			$("#mytable").append('');
			var tbl=$("<table/>").attr("id","mytable"); 
	$("#div1").append(tbl);	
	var tr1="<tr>";
	var td="<td align=center>Status</td>";
	var td0="<td align=center>Delivered</td></tr>";
	$("#mytable").append(tr1+td+td0);
		
    $("#div1").append(tbl);	
	var tr2="<tr>";
	var td1="<td align=center>Ship Date</td>";
	var td2="<td align=center>2018-06-06</td></tr>";
	$("#mytable").append(tr2+td1+td2);

	$("#div1").append(tbl);	
	var tr3="<tr>";
	var td3="<td align=center>Delivery Date</td>";
	var td4="<td align=center>2018-06-13</td></tr>";
	$("#mytable").append(tr3+td3+td4);

    $("#div1").append(tbl);	
	var tr3="<tr>";
	var td5="<td align=center>Delivery Time</td>";
	var td6="<td align=center>05:24:00</td></tr>";
	$("#mytable").append(tr3+td5+td6);
    $("#div1").append(tbl);	
	var tr4="<tr>";
	var td7="<td align=center>Package Count</td>";
	var td8="<td align=center>1</td></tr>";
	$("#mytable").append(tr4+td7+td8);
    $("#div1").append(tbl);	
	var tr5="<tr>";
	var td9="<td align=center>Carrier</td>";
	var td10="<td align=center>USPS</td></tr>";
	$("#mytable").append(tr5+td9+td10);		
	 
          displayStatus('success', ' Fetched tracking details successfully.');
        }, function() {
          displayStatus('danger', method.toUpperCase() + ' request failed.');
        });
      });
    });
  });
});


/*

1.We created new shipment in sandbox , which is not possible to track as that wasn’t actual shipment. 
Hence as suggested by Pitney Bowes Team we have mocked/hardcoded the response to mimic Production behavior.
2.This is MVP , hence we covered only few scenarios , more scenarios are in future scope.
 

$(document).ready( function() {
  app.initialized()
  .then(function(_client) {
    window.client = _client;
    client.events.on('app.activated', function() {
      jQuery(".request-btn").click(function(e) {
        var method = e.target.getAttribute('method');
        var url = BASE_URL1;
        var options = {
          "headers" : {
            "Authorization": "Bearer ovzQvlxYgbgLpF95e9PhPKKVAWId"
          }
        };
        client.request.get(url, options)
        .then(function(data) {
			var access_token = JSON.parse(data.response)['access_token'];			
			var options = {
          "headers" : {
            "Authorization": "Basic " +access_token
          }
        };
        client.request.get(BASE_URL2, options)
        .then(function(data) {
			var access_token = JSON.parse(data.response);
               	var tbl=$("<table/>").attr("id","mytable"); 
	$("#div1").append(tbl);	
	var tr1="<tr>";
	var td="<td align=center>Column 1</td>";
	var td0="<td align=center>Column 2</td></tr>";
	$("#mytable").append(tr1+td+td0); 
	var arrayListt = new Array();
    for(var i=0;i<Object.keys(data).length;i++)
    {		
		arrayListt.push(Object.values(data)[i] + '-' +Object.keys(data)[i]);    
    } 	
	arrayListt.sort();
	arrayListt.reverse();	
	for(var i=0;i<5;i++)
    {		
	var splitArray = arrayListt[i].split('-');
    var tr="<tr>";
    var td1="<td align=center>"+ (i+1) +"</td>";	
    var td2="<td align=center>"+splitArray[1]+"</td></tr>";	
     $("#mytable").append(tr+td1+td2); 
    } 			
			});
          displayStatus('success', ' Fetched tracking details successfully.');
        }, function() {
          displayStatus('danger', method.toUpperCase() + ' Could not fetch tracking details.');
        });
      });
    });
  });
});

*/
