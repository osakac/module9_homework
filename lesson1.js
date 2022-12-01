const parser = new DOMParser()

const XML = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const xmlDOM = parser.parseFromString(XML, 'text/xml')

function printUser(xmlDOM) {
  const listNode = xmlDOM.querySelector('list')
  const students = listNode.querySelectorAll('student')
  const listOfStudents = []
  students.forEach(el => {
    const firstName = el.querySelector('first').textContent
    const secondName = el.querySelector('second').textContent
    const name = `${firstName} ${secondName}`
    const age = el.querySelector('age').textContent
    const prof = el.querySelector('prof').textContent
    const lang = el.querySelector('name').getAttribute('lang')
    const obj = {
      name,
      age,
      prof,
      lang
    }
    listOfStudents.push(obj)
  })
  return listOfStudents
}

const users = printUser(xmlDOM)
console.log(users);
