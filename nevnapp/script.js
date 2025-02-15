function main(){
    document.getElementById("honap").onchange = datumkiir;
    document.getElementById("nap").onchange = datumkiir;
    document.getElementById("leker").onclick = lekeres;

    tegnap();
    ma();
    holnap();
}

var honap = 0;
var nap = 0;

function datumkiir(){
    honap = document.getElementById("honap").value;
    nap = document.getElementById("nap").value;
}

function nevkiir(x){
    document.getElementById("kiir1").innerHTML = x
}

async function lekeres(){
    let link = "https://nameday.abalin.net/api/V1/getdate?day=" + nap + "&month=" + honap + "&country=hu"
    let p = await fetch(link)
    let adat = await p.json();

    console.log(p);
    console.log(adat);
    nevkiir(adat.nameday.hu);

}

async function tegnap(){
    let link = "https://nameday.abalin.net/api/V1/yesterday"
    let p = await fetch(link)
    let adat = await p.json();
    document.getElementById("tegnap").innerHTML= adat.nameday.hu;
}

async function ma(){
    let link = "https://nameday.abalin.net/api/V1/today"
    let p = await fetch(link)
    let adat = await p.json();
    document.getElementById("ma").innerHTML= adat.nameday.hu;
    document.getElementById("mainap").innerHTML = adat.month + ". " + adat.day + ".";
}
async function holnap(){
    let link = "https://nameday.abalin.net/api/V1/tomorrow"
    let p = await fetch(link)
    let adat = await p.json();
    document.getElementById("holnap").innerHTML= adat.nameday.hu;
}

function maidatum(){
    let elem = document.getElementById("mainap");
    if(elem.style.display == "none"){
        elem.style.display = "block";
    }
    else{
        elem.style.display = "none";
    }
}

main();