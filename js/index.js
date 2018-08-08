document.querySelector('.time')
    .innerText = (new Date()).toLocaleTimeString();
    
document.querySelector('.get-html')
    .addEventListener('click', getHtml);

function getHtml() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html .placeholder')
              .innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'data.html', true);
    xhr.send();
}