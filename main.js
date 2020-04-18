var inp = document.querySelector('input');
let ul = document.querySelector('ul');
let li = document.querySelector('li');
inp.addEventListener('keyup', func);
let item;
let closed;
document.getElementById('but').onclick = function() {
   send();
}
function func(e) {
   if (e.keyCode == '13') {
      send();
   }
}
function send() {
   if (!inp.value.length) {
      return;
   }
   item = document.createElement('li');
   closed = document.createElement('button');
   closed.classList.add('close');
   closed.id = 'close';
   closed.innerHTML = '	&#10006;';
   item.innerHTML = inp.value;
   inp.value = null;
   ul.appendChild(item);
   item.appendChild(closed);
   let btn = document.getElementsByClassName('close');
   for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', closeg);
   }
   function closeg() {
      this.parentNode.remove();
   }
}

