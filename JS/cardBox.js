var button = document.getElementById('read-more');

button.addEventListener('click', function(){
    var card = document.querySelector('.george-cardBox');
    card.classList.toggle('active');

    if(card.classList.contains('active')){
        return button.textContent = 'ler menos';
    }

    button.textContent = 'ler mais';

})