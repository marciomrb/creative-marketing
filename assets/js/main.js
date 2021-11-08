var button = document.getElementById('searchButton');
var searchBox = document.getElementById('searchBox');
var closeButton = document.getElementById('buttonClose');

var input = document.querySelector('input#procurar');
var label = document.querySelector('.search label');

var dropMenu = document.querySelector('li.dropdown');
var dropMenuContent = document.querySelector('ul.dropdown-menu');

dropMenu.addEventListener('click', function() { 
  if(dropMenuContent.classList.contains('show') == true) {
    dropMenuContent.classList.remove('show');
  } else {
    dropMenuContent.classList.add('show');
  }
});


function OpenModal() {
  searchBox.style.display = 'flex';
}
function CloseModal() {
  searchBox.style.display = 'none';
}

input.addEventListener('focusin', function() { 
  label.classList.add('d-none');
});
input.addEventListener('focusout', function() { 
  label.classList.remove('d-none');
});


function SendMessage() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  if(name == '' || email == '')  {
    alert('Preencha todos os campos');
  } else {
    alert('Mensagem enviada com sucesso');
  }
}


var hambMenu = document.getElementById('hamb-menu');
var boxMenu = document.querySelector('ul.nav');
var closeMenu = document.querySelector('img.closeMenu')

hambMenu.addEventListener('click', function() { 
  if(boxMenu.classList.contains('open') == true) {
    boxMenu.classList.remove('open');
  } else {
    boxMenu.classList.add('open');
  }
});

closeMenu.addEventListener('click', function() { 
  boxMenu.classList.remove('open');
});

