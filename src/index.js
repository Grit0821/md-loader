import mdHtml from './test.md'

document.write('hello world')

const content = document.createElement('div')
content.classNamet = 'content' 
content.innerHTML = mdHtml 
document.body.appendChild(content)