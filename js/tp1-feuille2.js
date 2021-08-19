function loadData() {
    let x = window.location.search.substring(1).split("&");
    
    let list = $("ul > li");


    for(var i = 0, j = 0; i < list.length; i++, j++) {
        if(i == 3) {
            let value = x[j].substring(x[j].indexOf("=") + 1);
            $("li:eq(" + i + ")").append(value == "less2000" ? "Inf. à 2000 €" : "Sup. à 2000 €")
            continue;
        } else if (i > 3) {
            let value = x[j].substring(x[j].indexOf("=") + 1);

            if (value == "other") {
                j++;
            }
        }
        
        $("li:eq(" + i + ")").append(x[j].substring(x[j].indexOf("=") + 1));
    }

}