const AboutMe = [
  "Nome: Maria Eduarda",
  "Idade: 19 anos",
  "Faculdade: UTFPR",
  "Curso: Análise e Desenvolvimento de Sistemas",
  "Cidade: Ponta Grossa - PR"
]

const Hobbys = [
  "Exercícios Físicos: Academia e esportes",
  "Jogos: Valorant e LoL",
  "Design: PhotoShop",
  "Programação: Front-End"
]

const Skills = [
  "HTML avançado",
  "CSS avançado",
  "JavaScript avançado",
  "ReactJS intermediário",
  "PhotoShop intermediário",
  "Inglês avançado"
]

var i = 0;
var j = 0;
var k = 0;

document.getElementById('buttonAboutMe').onclick = function(){
  if (i < AboutMe.length) {
    var novoItem = document.createElement('li');
    novoItem.innerHTML = `<p class="listItem">${AboutMe[i]}</p>`;
    document.getElementById('ulAboutMe').appendChild(novoItem);
    i++; 
  }
  
}

document.getElementById('buttonHobbys').onclick = function(){
  if (j < Hobbys.length) {
    var novoItem = document.createElement('li');
    novoItem.innerHTML = `<p class="listItem">${Hobbys[j]}</p>`;
    document.getElementById('ulHobbys').appendChild(novoItem);
    j++;
  }
}

document.getElementById('buttonSkills').onclick = function(){
  if (k < Skills.length) {
    var novoItem = document.createElement('li');
    novoItem.innerHTML = `<p class="listItem">${Skills[k]}</p>`;
    document.getElementById('ulSkills').appendChild(novoItem);
    k++;
  }
}






