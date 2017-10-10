function callGiphy(animal, callback) { 	

	var url = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="+animal;

	var returnResponse = undefined; 

	$.ajax({
      url: url,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      giphyCallBack(response);
    });
    // `returnResponse` will be undefined here since the ajax call won't yet have completed
    console.log(returnResponse);

    function giphyCallBack(response) {
    returnResponse = response;

 	}
    

    return returnResponse;
}
