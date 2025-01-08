const vars = ["ti1", "t1", "ti2", "t2", "ti3", "t3", "ti4", "t4", "t5", "ti5", "t5", "ti6", 
"t6", "ti7", "t7", "ti8", "t8", "ti9", "t9", "ti10", "ti11", "ti12", "a1", "a2", "a3", "a4", 
"m1", "m2", "m3"]

variaveis = []

for (let i = 0; i < vars.length; i++) {
    const element = document.getElementById(vars[i])
    variaveis.push(element);
}

console.log(variaveis[1])


document.addEventListener('DOMContentLoaded', function () {

    function traduzimg() {
        console.log("trad");
        let imagem1 = document.getElementById('img1');
        let imagem2 = document.getElementById('img2');
        let imagem3 = document.getElementById('img3');
        let imagem4 = document.getElementById('img4');

        if (segundo.state == true) {
            console.log("vdd");
            imagem1.src = 'Imagens/carrosselT1.png';
            imagem2.src = 'Imagens/carrosselT2.png';
            imagem3.src = 'Imagens/carrosselT3.png';
            imagem4.src = 'Imagens/carrosselT4.png';
        }
        else {
            console.log("falso");
            imagem1.src = 'Imagens/carrossel1.png';
            imagem2.src = 'Imagens/carrossel2.png';
            imagem3.src = 'Imagens/carrossel3.png';
            imagem4.src = 'Imagens/carrossel4.png';
        }
    }

    function mudaEstado(botao) {
        console.log("mudou");
        botao.state = !botao.state;
    }

    const segundo = document.getElementById('segundo');
    segundo.state = false;
    segundo.addEventListener('click', function () {
        mudaEstado(segundo);
        traduzimg();
    });

});

main()

async function main() {
    const dataJson = await getData();
    for (let i = 0; i < dataJson.length; i++) {
        // const key = Object.keys(dataJson[i]);
        console.log(dataJson[0]["ti1"]);
        variaveis[0].textContent = dataJson[0]["ti1"];
        variaveis[1].textContent = dataJson[0]["t1"];
        variaveis[2].textContent = dataJson[1]["ti2"];
        variaveis[3].textContent = dataJson[1]["t2"];
        variaveis[4].textContent = dataJson[2]["ti3"];
        variaveis[5].textContent = dataJson[2]["t3"];
        variaveis[6].textContent = dataJson[3]["ti4"];
        variaveis[7].textContent = dataJson[3]["t4"];
        variaveis[8].textContent = dataJson[4]["ti5"];
        variaveis[9].textContent = dataJson[5]["t5"];
        variaveis[10].textContent = dataJson
    }
}

async function getData() {
    const res = await fetch("./json/texts.json");
    const data = await res.json();
    return data;
}
