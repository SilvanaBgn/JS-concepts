const btnCU = document.getElementById("btnCreateUpdate"),
      btnDelete = document.getElementById("btnDelete"),
      inputs = document.getElementsByTagName("input"),
      cookieResult = document.getElementById('cookieResult');

btnCU.addEventListener('click', createUpdateCookie, false);
btnDelete.addEventListener('click', deleteCookie, false);

function createUpdateCookie() {
  console.log('[Creation/Update of cookie]');
  const cookie = formCookie('meuNome', inputs['meuNome'].value, inputs['maxAge'].value, inputs['path'].value);
  document.cookie = cookieResult.innerText = cookie;
  cookieResult.style.display = "block";
}
function deleteCookie() {
  console.log('[Delete of cookie]');
  const cookie = formCookie('meuNome', inputs['meuNome'].value, -1);
  updateDocumentCookie(cookie);
}

function formCookie(key, value, maxAge = '', path = '') {
  return `${key}=${value}; max-age=${maxAge}; path=${path};`;
}

function updateDocumentCookie(pCookie) {
  document.cookie = cookieResult.innerText = pCookie;
}