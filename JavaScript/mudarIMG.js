const vars = ["ti1", "t1", "ti2", "t2", "ti3", "t3", "ti4", "t4", "t5", "ti5", "t5", "ti6", 
"t6", "ti7", "t7", "ti8", "t8", "ti9", "t9", "ti10", "t10", "ti11", "t11", "ti12", "t12", "m1", 
"m2", "m3"]

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
            imagem1.src = 'Imagens/CarrosselT1.png';
            imagem2.src = 'Imagens/CarrosselT2.png';
            imagem3.src = 'Imagens/CarrosselT3.png';
            imagem4.src = 'Imagens/CarrosselT4.png';
        }
        else if (segundo.state == false) {
            console.log("falso");
            imagem1.src = 'Imagens/carrossel.png';
            imagem2.src = 'Imagens/carrossel2.jpg';
            imagem3.src = 'Imagens/carrossel3.jpg';
            imagem4.src = 'Imagens/carrossel4.jpg';
        }
    }

    function mudaEstado(botao) {
        console.log("mudou");
        botao.state = !botao.state;
    }

    const segundo = document.getElementById('segundo');
    segundo.state = false;
    segundo.addEventListener('click', function() {
        traduzimg();
        mudaEstado(segundo);
    });

});

main()

async function main() {
    const dataJson = await getData();
    for (let i = 0; i < dataJson.length; i++) {
        // const key = Object.keys(dataJson[i]);
        for (let i = 0; i <= 8; i++) {
            
        }
        variaveis[0].textContent = dataJson[0]["ti1"];
        variaveis[1].textContent = dataJson[0]["t1"];
        variaveis[2].textContent = dataJson[1]["ti2"];
        variaveis[3].textContent = dataJson[1]["t2"];
        variaveis[4].textContent = dataJson[2]["ti3"];
        variaveis[5].textContent = dataJson[2]["t3"];

    }
}

async function getData() {
    const res = await fetch("./json/texts.json");
    const data = await res.json();
    return data;
}
