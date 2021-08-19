var inputToCheck = Array.from(document.getElementsByTagName("input")).filter(e => e.pattern);

for (input of inputToCheck) {
    input.addEventListener("input", (e) => {
        let indication = e.target.pattern == "^[a-zA-z]+$" ? 
            "La saisie ne doit contenir que des lettres - sans espace" : 
            "La saisie ne doit contenir que des chiffres - sans espace";

        let warningExists = document.getElementById(e.target.id + "warning") != null ? true : false;

        let regex = new RegExp(e.target.pattern);
        if (!regex.test(e.target.value)) {
            if (warningExists) return;
            
            e.target.style.border = "1px red solid";
            warning = document.createElement("span");
            warning.id = e.target.id + "warning";
            warning.textContent = indication;

            document.getElementById(e.target.id).nextSibling.appendChild(warning);
        } else {
            if (!warningExists) return;
            
            e.target.style.border = "1px black solid";
            document.getElementById(e.target.id).nextSibling.removeChild(document.getElementById(e.target.id + "warning"));
            
        }
    });
}

function displayOther(e, show) {
    if (e.target.type == "radio") inputOther("Credit", show);
    else if (e.target.type == "select-one")  inputOther("Repayment", show);
}

function inputOther(objet, show) {
    let info = "field" + objet;
    let idParent = objet == "Credit" ? "#labelRadioCreditOther" : "#inputTimeRepayment";
    
    let inputExists = document.getElementById(info) != null ? true : false;


    if (show) {
        if (inputExists) return;
        else {
        let inputOther = document.createElement("input");
        inputOther.type = "text";
        inputOther.name = info;
        inputOther.id = info;
        inputOther.required = true;
        inputOther.placeholder = objet == "Credit" ? "Indiquer le motif" : "Indiquer la durée";
        inputOther.style.marginLeft = "10px";
        
        document.querySelector("form " + idParent).appendChild(inputOther);
        }
    } else {
        if (inputExists) {
            document.querySelector("form " + idParent).removeChild(document.getElementById(info));
        }
    }
}