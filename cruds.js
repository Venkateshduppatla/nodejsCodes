function connection(res)
{
	var mysql = require('mysql');

	var con = mysql.createConnection({
	  host: "165.22.14.77",
	  user: "venkatesh",
	  password: "pwdvenkatesh",
	  database: "dbVenkatesh"
	});
	return con;
}

function displayRecords(res)
{
	var con = connection(res);
	con.connect(function(err)
	{
		if (err) throw err;
		con.query("SELECT * FROM bankcustomers", function (err, result, fields) {
	    res.write("<table><tr><th>Account Number</th><th>Name</th><th>Balance</th></tr>");
	    for (var i = 0; i < result.length; i++)
	    {
	    	var deleteCommand = "$('#outputData').load(\'http://localhost/deleteRecord?accountNumber="+ result[i].accountNumber + "\');";
	    	res.write("<tr><td>" + result[i].accountNumber + "</td><td>" + result[i].name + "</td><td>" + result[i].balance + "</td><td><button onclick=\""+ deleteCommand + "\">DELETE</button></td>");
	    	res.write("<td><button onclick= javascript:(function(){$('#accountNumber').val('" + result[i].accountNumber + "');$('#name').val('" + result[i].name + "');$('#balance').val('" + result[i].balance + "');})();>UPDATE</button></td></tr>");
	    }
	    res.write("</table>"); 
		res.send();
		});
	});
}

function deleteRecord(res, accountNumber)
{
	var con = connection(res);
	con.connect(function(err)
	{
		if (err) throw err;
		con.query("DELETE FROM bankcustomers WHERE accountNumber = '" + accountNumber + "';", function (err, result, fields) {
		res.send();
		});
	});
}

function insertRecord(res, accountNumber, name, balance)
{
	var con = connection(res);
	con.connect(function(err)
	{
		if (err) throw err;
		con.query("REPLACE INTO bankcustomers VALUES('" + accountNumber + "', '" + name + "','" + balance + "', 'O');", function (err, result, fields) {
		res.send();
		});
	});
}

var express = require('express');
var fs = require('fs');

var port = 80;
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/displayRecords', function(req, res){
    displayRecords(res);
});

app.get('/insertRecord', function(req, res){
    insertRecord(res, req.query.accountNumber, req.query.name, req.query.balance);

});

app.get('/deleteRecord', function(req, res){
    deleteRecord(res, req.query.accountNumber);

});

app.listen(port, function(err){
    if(err)
    {
        console.log(err);
    }
});








// app.post('/', function(request, respond) {
//     fs.writeFile('message.txt', 'Hello Node.js', (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//     });
// });

// var http = require('http');
// var server = http.createServer(function (req, res)
// {
// res.writeHead(200, {'Content-Type': 'text/html'});
// displayRecords(res);
// res.write("<!DOCTYPE html><html><head><title></title></head><body><button onclick='"+ displayRecords(res) + "'>Display Records</button></body></html>");
// }).listen(80);



