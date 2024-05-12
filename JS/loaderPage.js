function alternarNumeros() {
    var counterElement = document.querySelector('.counter');
    var counterValue = counterElement.textContent;
    if (counterValue === '0') {
      counterElement.textContent = '1';
    } else {
      counterElement.textContent = '0';
    }
  }
  
  
  var loadingInterval = setInterval(alternarNumeros, 1);
  
  
  window.addEventListener('load', function() {
    clearInterval(loadingInterval); 
    var loader = document.querySelector('.loader');
    loader.style.display = 'none'; 
  });