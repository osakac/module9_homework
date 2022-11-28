function sendRequest(url, callback) {
  return fetch(url)
    .then(response => response.json())
    .then(response => callback(response))
}

function displayResult(data) {
  let images = ''

  data.forEach(el => {
    const image = `
    <img src="${el.download_url}" width="500" height="500">`
    images += image
  })

  const imagesResponse = document.querySelector('.images-response')
  imagesResponse.innerHTML = images
  localStorage.setItem('images', JSON.stringify(data))
}

window.addEventListener('load', () => {
  if (localStorage.getItem('images') !== null && localStorage.getItem('images') !== undefined) {
    let images = ''

    JSON.parse(localStorage.getItem('images')).forEach(el => {
      const image = `
      <img src="${el.download_url}" width="500" height="500">`
      images += image
    })

    const imagesResponse = document.querySelector('.images-response')
    imagesResponse.innerHTML = images
  }
})

const btnRequest = document.querySelector('.btn-request')
const validInputs = document.querySelector('.valid-inputs')
btnRequest.addEventListener('click', () => {
  const numberOfPage = +document.querySelector('#number-of-page').value
  const limit = +document.querySelector('#limit').value
  const checkNumOfPage = numberOfPage >= 1 && numberOfPage <= 10 && Number.isInteger(numberOfPage)
  const checkLimit = limit >= 1 && limit <= 10 && Number.isInteger(limit)
  if(checkLimit || checkNumOfPage) {
    if(!checkLimit) {
      validInputs.textContent = 'Лимит вне диапазона от 1 до 10'
    } else if(!checkNumOfPage) {
      validInputs.textContent = 'Номер страницы вне диапазона от 1 до 10'
    } else {
      validInputs.textContent = ''
    sendRequest(`https://picsum.photos/v2/list?page=${numberOfPage}&limit=${limit}`, displayResult)
      .then(response => console.log(response))
      .catch(error => console.log(error))
    }
  } else {
    validInputs.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10'
  }
})
