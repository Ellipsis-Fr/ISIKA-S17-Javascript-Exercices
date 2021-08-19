
var countNegativeValue = 0;
var sum = 0;

function setValues() {
    
    var boxes = document.forms[0].getElementsByClassName("checkboxScore");

    for(var i = 0; i < boxes.length; i++) {
        var value = Math.floor(Math.random() * 16); //Retourne une valeur de 0 à 15

        if (value != 0 && countNegativeValue < 4) {
            if ((Math.random() * 16) < 5) { //une chance sur 3 de créer une valeur négative
                value *= -1;
                countNegativeValue++;
            } 
        }
        
        boxes[i].value = value;
        boxes[i].checked = false;
    }

}

function sumScore(e) {
    e.preventDefault();

    if(!checkNbBoxesChecked()) {
        alert("Veuillez cocher 3 cases");
        return;
    }

    if (sum < 15) {
        alert("Votre score est inférieur à 15,\nVous êtes encore débutant");
    } else {
        alert("Félicitation votre score est supérieur à 15,\nVous êtes un expert");
    }

    countNegativeValue = 0;
    sum = 0;

    setValues();
}

function checkNbBoxesChecked() {
    var boxes = document.forms[0].getElementsByClassName("checkboxScore");
    
    var countChecked = 0;

    for(var i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            countChecked++;
            sum += parseInt(boxes[i].value);
        }
    }
    
    return countChecked == 3 ;

    // return document.forms[0].getElementsByClassName("checkboxScore").filter(() => {
    //     this.checked;
    //  }).length > 2;
}