var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log("Sharaavani");
    // res.write("<!DOCTYPE html><html><head><title>AXIS BANK</title></head><body><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'><script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js'></script><script type='text/javascript'>$(document).ready(function(){$('#outputData').load('read.php');$('#saveButton').click(function(){$('#outputData').load('insert.php?accountNumber='+$('#accountNumber').val()+'&name='+$('#name').val()+'&balance='+$('#balance').val());$('#outputData1').load('read.php');});});</script><div id='inputUi'><br><input type='text' name='accountNumber', placeholder='Account Number' autofocus='autofocus' id='accountNumber'><input type='text' name='name' placeholder='Customer Name' id='name'><input type='text' name='balance' placeholder='Balance' id='balance'><br><center><button id='saveButton'><span class='glyphicon glyphicon-save'>SAVE</span></button></center></div><div id='outputData'></div><div id='outputData1'></div></body></html>");
    res.write("<!DOCTYPE html><html><head><title>AXIS BANK</title></head><body><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'><script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js'></script><div id='inputUi'><br><input type='text' name='accountNumber', placeholder='Account Number' autofocus='autofocus' id='accountNumber'><input type='text' name='name' placeholder='Customer Name' id='name'><input type='text' name='balance' placeholder='Balance' id='balance'><br><center><button id='saveButton'><span class='glyphicon glyphicon-save'>SAVE</span></button></center></div><div id='outputData'></div><div id='outputData1'></div></body></html>");
    res.write("<button onclick=\"console.log(document.documentElement.innerHTML)\">SHOW SOURCE</button>");
    res.end();
}).listen(8060);
