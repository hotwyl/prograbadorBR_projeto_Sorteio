function sortearNome() {
    const pessoas = ["william", "José", "João", "Marcos", "Maria", "Tereza", "Pamela", "Pedro"]
    let np = pessoas.length
    let ns = Math.floor(Math.random() * np)
    document.getElementById("d").innerHTML = pessoas[ns]
}

function sortearNumero() {
    let np = 100
    let ns = Math.round(Math.random() * np)
    document.getElementById("d").innerHTML = ns
}