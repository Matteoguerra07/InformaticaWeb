function prova(){
    let output = "";
    for (let index = 1; index <= 10; index++) {
        for (let jndex = 1; jndex <= 10; jndex++) {
            output += (index * jndex) + " ";
            
        }
        output += "<br>";

    }
    document.getElementById('B').innerHTML = output;
}
prova();