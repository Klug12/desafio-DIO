
const totalSalas = 2;
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

//Aqui temos uma forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
//Utilizamos o .includes() para verificar se um número está presente nos arrays:
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

//TODO: Agora implemente uma condição necessária para verificar e exibir se há tesouro na sala e se há monstro na sala:
    if ( temTesouro != 0 ) {
        console.log("Tesouro na sala " + sala + "!");
    } else if ( temMonstro != 0 ) {
        console.log("Monstro na sala " + sala + "!");
    }
}