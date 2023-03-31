function inputFile() {
  var inputs = document.querySelectorAll('.input-file');
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener('change', function (e) {
      var fileName = '';
      if (this.files && this.files.length > 1) {
        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);

      }
      else {
        fileName = e.target.value.split('\\').pop();

      }

      if (fileName) {
        label.querySelector('span').innerHTML = fileName;
      }
      else {
        label.innerHTML = labelVal;
      }
    });
  });
}

const phoneInput = document.querySelectorAll(".phone-mask");

phoneInput.forEach(function(element) {

  var phoneMask = IMask(element, {
    mask: '+{7} (000)-000-00-00',
    lazy: false,
    placeholderChar: '_',
  });
})




if (document.querySelectorAll('.input-file').length) {
  inputFile();
}