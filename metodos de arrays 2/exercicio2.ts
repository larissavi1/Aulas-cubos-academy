//type Tprof = {nome: string, stack: string}


//const professores: Tprof[] = [
   // {nome: "Guido", stack: "backend"},
   // {nome: "José", stack: "backend"},
   // {nome: "Ana", stack: "frontend"},
   // {nome: "Paulo", stack: "frontend"},
   // {nome: "Beatriz", stack: "backend"},
    //{nome: "Joana", stack: "frontend"},
//];

//function profbackend (professores: Tprof) {
//    return professores.stack === "backend"
//}
//const backend = professores.filter (profbackend)
//console.log (backend)

//function proffrontend (professores:Tprof){
//    return professores.stack === "frontend"
//}
//const frontend = professores.filter (proffrontend)
//console.log (frontend) 

const professores = [
    {nome: "Guido", stack: "backend"},
    {nome: "José", stack: "backend"},
    {nome: "Ana", stack: "frontend"},
    {nome: "Paulo", stack: "frontend"},
    {nome: "Beatriz", stack: "backend"},
    {nome: "Joana", stack: "frontend"},
];

const profbackend = professores.filter((professor) => {return professor.stack === "backend"})
console.log(profbackend)

const proffrontend = professores.filter((professor) => {return professor.stack === "frontend"})
console.log(proffrontend)