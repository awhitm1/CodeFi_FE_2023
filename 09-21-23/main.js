const body = document.body;
const input = document.querySelector('.link-input');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('#link-form');
const linkList = document.querySelector('.link-list');
const allLinks = [];
// JSON.parse(localStorage.getItem("link-List"));

// console.log("body: ", body);
// console.log("input: ", input);
// console.log("overlay: ", overlay);

input.addEventListener('focusin', focusInput);
overlay.addEventListener('focusout', endFocus);

function focusInput(){
  body.classList.add('focus-form')
}

function endFocus(){
  if (body.classList.contains('focus-form')) {
    body.classList.remove('focus-form')
  }
}

// Form Submit
form.addEventListener("submit", createLink);

function createLink(e){
  e.preventDefault();
  
  const url = input.value;
  const linkContainer = document.createElement('li');
  const newLink = document.createElement('a');
  allLinks.push(url);
  saveAllLinksToLocalStorage(allLinks);
  newLink.className = 'link';
  newLink.innerText = url;
  newLink.href = url;
  newLink.target = '_blank';
  linkContainer.appendChild(newLink);
  linkList.appendChild(linkContainer);

  form.reset();
}

function saveAllLinksToLocalStorage(links = []){
  localStorage.setItem('link-list',JSON.stringify(links));
}

function populateLinkList(links =[]) {
  linkList.innerHTML = links.map(
    (link) => {
      return `<li> <a class="link" href=${link} target="_blank">${link}</a></li>`
    }
  );
}






