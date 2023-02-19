const btnCU = document.getElementById("btnCreateUpdate"),
      btnDelete = document.getElementById("btnDelete"),
      inputs = document.getElementsByTagName("input"),
      cookieResult = document.getElementById('cookieResult');

btnCU.addEventListener('click', createUpdateCookie, false);
btnDelete.addEventListener('click', deleteCookie, false);

function createUpdateCookie() {
  console.log('[Creation/Update of cookie]');
  btnCU.setAttribute('href', '/set/' + formCookie(inputs['meuNome'].value, inputs['maxAge'].value, inputs['path'].value));
}
function deleteCookie() {
  console.log('[Delete of cookie]');
  btnDelete.attributes['href'] = '/delete?' + formCookie(inputs['meuNome'].value, -9);
}

function formCookie(value, maxAge = '', path = '') {
  return value + (maxAge? '&'+ maxAge : '') + (path? '&'+ path : '');
  // return `${value}&${maxAge}&${path}`;
}