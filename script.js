var botao = document.getElementById('clique');

 

botao.onclick = function(){
 if(botao.value === 'troca'){
 p1.src = 'imgs/ney2.jpg'; botao.value = 'Retornar';
botao.innerHTML = 'Trocar';
}else{ p1.src = 'imgs/ney.jpg'; botao.value = 'troca';
 botao.innerHTML = 'Voltar'; }
}
