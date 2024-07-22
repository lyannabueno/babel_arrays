const alunosNotas =  [
    { nome: 'Julia', nota: 4.5},
    { nome: 'Ana', nota: 6.8},
    {nome: 'Fabio', nota: 9.3},
    {nome: 'João', nota: 10},
    {nome: 'Paula', nota: 5.9}
]

const aprovados = alunosNotas.filter(function(aluno) {
    return aluno.nota >= 6
})
    
console.log(aprovados)

/*

    OUTRO MODO DE FAZER:

    function alunosAprovados(aluno) {
        return aluno.filter(aluno => aluno.nota >= 6)
    }

    const aprovados = alunosAprovados(alunosNotas)

    console.log(aprovados)

*/