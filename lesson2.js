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

 const people = {
  list: [
    {name: data.list[0].name,
    age: data.list[0].age,
    prof: data.list[0].prof},

    {name: data.list[1].name,
    age: data.list[1].age,
    prof: data.list[1].prof}
  ]
 }

 console.log(people);