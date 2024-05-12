document.getElementById('button-reference').addEventListener('click', function() {
    var referenceContent = this.nextElementSibling;
    var icon = this.querySelector('i');
    if (referenceContent.style.display === 'none') {
      referenceContent.style.display = 'block';
      icon.classList.add('rotate');
    } else {
      referenceContent.style.display = 'none';
      icon.classList.remove('rotate');
    }
  });