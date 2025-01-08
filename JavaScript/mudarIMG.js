const vars = ["ti1", "t1", "ti2", "t2", "ti3", "t3", "ti4", ""]


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
        else {
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
    segundo.addEventListener('click', function () {
        mudaEstado(segundo);
        traduzimg();
    });

});










main()

async function main() {
    const dataJson = await getData();
    for (let i = 0; i < dataJson.length; i++) {
        const text = Object(dataJson[i]);
        console.log(text);
    }
}

async function getData() {
    const res = await fetch("./json/texts.json");
    const data = await res.json();
    return data;
}

console.log("atualizado");


function trocarTexto() {

}
