const btnRequest = document.querySelector('.btn-request')
const divResult = document.querySelector('.result-api')

function useRequest (url) {
  fetch(url)
    .then(response => response.blob())
    .then(imageBlob => {
      divResult.innerHTML = `<img src="${URL.createObjectURL(imageBlob)}" alt="" />`
    });
}

btnRequest.addEventListener('click', () => {
  const width = +document.querySelector('.input-width').value
  const height = +document.querySelector('.input-height').value
  const checkWidth = width <= 300 && width >= 100 && Number.isInteger(width)
  const checkHeight = height <= 300 && height >= 100 && Number.isInteger(height)
  if (checkWidth && checkHeight) {
    useRequest(`https://picsum.photos/${width}/${height}`)
  } else {
    const valid = document.querySelector('.valid-inputs')
    valid.textContent = 'Одно (или оба) из чисел вне диапазона от 100 до 300'
  }
})
