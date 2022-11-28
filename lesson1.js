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

const listNode = xmlDOM.querySelector('list')
const studentNode1 = listNode.firstElementChild
const nameNode1 = studentNode1.querySelector('name')
const firstNameNode1 = nameNode1.querySelector('first')
const secondNameNode1 = nameNode1.querySelector('second')
const ageNode1 = studentNode1.querySelector('age')
const profNode1 = studentNode1.querySelector('prof')
const langAttr1 = nameNode1.getAttribute('lang')


const studentNode2 = listNode.lastElementChild
const nameNode2 = studentNode2.querySelector('name')
const firstNameNode2 = nameNode2.querySelector('first')
const secondNameNode2 = nameNode2.querySelector('second')
const ageNode2 = studentNode2.querySelector('age')
const profNode2 = studentNode2.querySelector('prof')
const langAttr2 = nameNode2.getAttribute('lang')

const people = {
  list: [
    {name: `${firstNameNode1.textContent} ${secondNameNode1.textContent}`,
    age: ageNode1.textContent,
    prof: profNode1.textContent,
    lang: langAttr1},

    {name: `${firstNameNode2.textContent} ${secondNameNode2.textContent}`,
    age: ageNode2.textContent,
    prof: profNode2.textContent,
    lang: langAttr2}
  ]
}

console.log(people);