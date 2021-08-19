function fonction1(e) {
    e.preventDefault();
    var select = document.forms[0].getElementsByClassName("checkboxLanguage");

    var languageKnew = "";

    for (var i = 0; i < select.length; i++) {
        if(select[i].checked) languageKnew += select[i].value + " ";
    }

    alert("vous connaissez :\n" + languageKnew);
}