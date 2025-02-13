function main(){
    list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    randomszam();
}

randomlista = [];
mennyivanbenne = 0;
function randomszam(){
    rand = Math.floor((Math.random() * 36))
    if(mennyivanbenne < 36){
        if(bennevane(rand, randomlista)){
            randomszam();
        }
        else{
            list[mennyivanbenne] = rand;
            mennyivanbenne++;
            randomszam();
        }
    }
}

function bennevane(szam, lista){
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        if(lista[index] == szam){
            return true;
        }
    }
    return false;
}

main();