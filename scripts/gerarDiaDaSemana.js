function gerarDiaDaSemana() {
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {weekday: "long"});
    const dataAtual = new Date().toLocaleDateString("pt-BR");   
    const hora = new Date().toLocaleTimeString("pt-Br", { hour: "numeric", minute: "numeric" });
    const dataCompleta = `${diaDaSemana} (${dataAtual}) às ${hora}`;

    return dataCompleta;
}

export default gerarDiaDaSemana;