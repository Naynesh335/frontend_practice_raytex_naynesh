function countword() {
    var a = document.getElementById("word").value;
    var c = 0;
    var l = a.length;

    if (a === "") {
        document.getElementById("print").innerHTML = c;
        return;
    }

    for (var i = 0; i < l; i++) {
        if (a[i] == " ") {
            c++;
        }
    }
    c++;
    document.getElementById("print").innerHTML = c;
}