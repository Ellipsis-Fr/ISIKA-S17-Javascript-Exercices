function function1() {
    for(var i = 0; i < document.forms[0].choice.length; i++) {
        if (document.forms[0].choice[i].checked) {
            alert("Vous avez fait le choix : " + document.forms[0].choice[i].value);
        }
    }
}