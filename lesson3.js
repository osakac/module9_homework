const btn = document.querySelector('button')
const valid = document.querySelector('.valid')
const divResult = document.querySelector('.result')

function useRequest (url, callback) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', url)

  xhr.onload = function() {
    if (xhr.status !== 200) {
      divValid.textContent = `Статус ответа: ${xhr.status}`
    } else {
      const result = JSON.parse(xhr.response)
      if (callback) {
        callback(result)
      }
    }
  }
  
  xhr.send()
}

function displayResult(apiData) {
  let cards = ''

  apiData.forEach(item => {
    const cardBlock = `
    <img src="${item.download_url}" width="300" height="300">
    <p>${item.author}</p>`
    cards += cardBlock
  })

  divResult.innerHTML = cards
}

btn.addEventListener('click', () => {
  const value = +document.querySelector('input').value
  if (value > 10 || value < 1) {
    valid.textContent = 'Число вне диапазона от 1 до 10 (включительно)'
  } else {
  useRequest(`https://picsum.photos/v2/list?limit=${value}`, displayResult)
  }
})
