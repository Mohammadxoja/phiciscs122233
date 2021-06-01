const btn = document.getElementById('click');
const data = document.querySelector('ol');

btn.addEventListener('click', () => {
  data.classList.toggle('hide');
})

const input = document.querySelector("#input").oninput = function() {
  let val = this.value.trim();
  let listItem = document.querySelectorAll('ol ');

  if(val != '') {
    listItem.forEach((elem) => {
      if(elem.innerText.search(val) == -1)  {
        elem.style.display = "none";
        elem.innerHTML = elem.innerText;
      }else {
        elem.style.display = "block";
        let str = elem.innerText;
        elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
      }
    });

  }else {
    elem.style.display = "block";
    elem.forEach((e) => {
      e + '<br>'
    })
    elem.innerHTML = elem.innerText;

  }
}

const insertMark = (string, pos, length) => {
  return string.slice(0,pos) + '<mark>' + string.slice(pos, pos + length) + '</mark>' + string.slice(pos + length);
}
