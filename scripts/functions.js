function zipCodeChecker (zip)
{
    if (zip > 20000){
        return true;
    }
    return false;
}

function advertBanner (){
    var random = Math.floor((Math.random()*2)+1);

    var newImage = document.createElement("img");

    if (random <= 1){
        newImage.src = "images/advertisement1.jpg";
        console.log("Chose advert #1")
    }else{
        newImage.src = "images/advertisement2.jpg";
        console.log("Chose advert #2")
    }	

    document.getElementById("banner").appendChild(newImage);
}	
