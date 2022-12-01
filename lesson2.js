const jsonString = {
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
}

const jsonStringify = JSON.stringify(jsonString)
const data = JSON.parse(jsonStringify)

function printUsers(data) {
  data.list.forEach(el => {
    console.log(`name: ${el.name}, age: ${el.age}, prof: ${el.prof}`)
  })
}

printUsers(data)
