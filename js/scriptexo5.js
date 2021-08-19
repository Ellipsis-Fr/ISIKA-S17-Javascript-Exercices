function fonction1(e) {

    var name = document.forms[0].fieldName.value;
    var cin = document.forms[0].fieldCIN.value;

    if (!(/^[A-Za-z]{1,}/.test(name))) return;
    if (!(/^[0-9]{8}/.test(cin))) return;

    var elt = document.createElement("div");
    elt.textContent = name + " " + cin;

    document.querySelector("body").appendChild(elt);

    document.forms[0].fieldName.value = "";
    document.forms[0].fieldCIN.value = "";

    e.preventDefault();
}