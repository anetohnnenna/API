var request = require('request');
var apiURL = "https://opentdb.com/api.php?amount=10";
var options = {
	url:apiURL,
	method:'GET',
	headers:{
		'Accept-Charset': 'utf-8',
		'User-Agent':'https://opentdb.com/api.php?amount=10'
	}
};

request.get(options, function(error,response){
	if(!error && response.statusCode == 200){
 res = JSON.parse(response.body);
	  resArr = res.results;
	  console.log(resArr.length);
    for (var i = 0; i < resArr.length; i++) {
      console.log(resArr[i].question + "\n")
    }	  
	}else{
		console.log("Seems an error occured");
	}
});

 