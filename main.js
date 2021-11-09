dog = 0;
cow = 0;
bear = 0;
cat = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mWzmb7LyS/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        red = Math.floor(Math.random()*255) + 1;
        green = Math.floor(Math.random()*255) + 1;
        blue = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = results[0].label +" "+ results[1].label;
        document.getElementById("result_confidence").innerHTML = results[0].label;

        document.getElementById("result_label").style.color = "rgb("+red+","+green+","+blue+")";
        document.getElementById("result_confidence").style.color = "rgb("+red+","+green+","+blue+")";

        if(results[0].label = "Barking"){
        document.getElementById("Doog").src = "Doog.gif";
        document.getElementById("DaKity").src = "DaKity.png";
        document.getElementById("bear").src = "bear.png";
        document.getElementById("Milk").src = "milk.png"; 
        dog = dog + 1;
    }

        if(results[0].label = "Meowing"){
            document.getElementById("Doog").src = "Doog.png";
            document.getElementById("DaKity").src = "DaKity.gif";
            document.getElementById("bear").src = "bear.png";
            document.getElementById("Milk").src = "milk.png"; 
            cat = cat + 1;
        }

        if(results[0].label = "Roaring"){
                document.getElementById("Doog").src = "Doog.png";
                document.getElementById("DaKity").src = "DaKity.png";
                document.getElementById("bear").src = "bear.gif";
                document.getElementById("Milk").src = "milk.png"; 
                cat = cat + 1;
            }

        if(results[0].label = "Mooing"){
                    document.getElementById("Doog").src = "Doog.png";
                    document.getElementById("DaKity").src = "DaKity.png";
                    document.getElementById("bear").src = "bear.png";
                    document.getElementById("Milk").src = "milk.gif"; 
                    cat = cat + 1;
                }
    }
}