const vars = ["a1", "a2", "a3", "a4", "ti1", "t1", "ti2", "t2", "ti3", "t3", "ti4", "t4", "m1",
"m2", "ti5", "t5", "ti6","t6", "ti7", "t7", "ti8", "t8", "ti9", "t9", "ti10", "ti11", "ti12", "m3"]

variaveis = []

for (let i = 0; i < vars.length; i++) {
    const element = document.getElementById(vars[i])
    variaveis.push(element);
}



document.addEventListener('DOMContentLoaded', function () {

    function traduzimg() {
        let imagem1 = document.getElementById('img1');
        let imagem2 = document.getElementById('img2');
        let imagem3 = document.getElementById('img3');
        let imagem4 = document.getElementById('img4');

        if (segundo.state == true) {
            imagem1.src = 'Imagens/carrosselt1.png';
            imagem2.src = 'Imagens/carrosselt2.png';
            imagem3.src = 'Imagens/carrosselt3.png';
            imagem4.src = 'Imagens/carrosselt4.png';
        }
        else {
            imagem1.src = 'Imagens/carrossel.png';
            imagem2.src = 'Imagens/carrossel2.png';
            imagem3.src = 'Imagens/carrossel3.png';
            imagem4.src = 'Imagens/carrossel4.png';
        }
    }

    function mudaEstado(botao) {
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
    cont = -1;

    for (let i = 0; i <= 13; i++) {
        for (let h = 0; h <= 1; h++) {
            cont += 1
            console.log(`variaveis[${cont}].textContent = dataJson[${i}][${vars[cont]}]`);
            variaveis[cont].textContent = dataJson[i][vars[cont]];
        }
    }

}

async function getData() {
    const res = await fetch("./json/texts.json");
    const data = await res.json();
    return data;
}