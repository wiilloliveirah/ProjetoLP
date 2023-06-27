var setaDireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaEsquerda.style = "display:flex; margin-top: 65px;"
    setaDireita.style = "display:none"

}
 
function RolarParaEsquerda(){
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaEsquerda.style = "display:none; margin-top: 55px;"
    setaDireita.style = "display:flex"
    
}