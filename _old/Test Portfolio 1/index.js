const utils = {
    createElement: (type,obj) => {
        const e = document.createElement(type)
        Object.keys(obj).forEach(key => e[key] = obj[key])
        return e
    },
    replaceContent: (parent,content) => {
        parent.innerHTML = content
    }
}
const elements = {
    main: document.getElementById('main'),
    menu: document.getElementById('menu'),
    buttons: {
        home: 'home',
        games: 'giochi',
        about: 'about',
    }
}
const contents = {
    home: "pagina home lorem ipsum dolor sit amet<h3>paragrafo prova</h3>just crusto odio<br>consecteur at iniquis at",
    games: "pagina giochi",
    about:
        "<h3>Chi sono</h3>"+
        "Ingengere informatico e FOSS developer<br>"+
        "Laureato al Politecnico di Torino<br>"+
        "",
}

function replaceContent(content) {
    utils.replaceContent(elements.main,content)
}
function createParagraph(content,className='',id='') {
    return utils.createElement('p',{innerText:content,className:className,id:id})
}
function createTitle(content,className='',id='') {
    return utils.createElement('h3',{innerText:content,className:className,id:id})
}

Object.keys(elements.buttons).forEach(btn => {
    const button = document.createElement('a')
    button.className = 'menu-button'
    button.innerText = elements.buttons[btn]
    button.onclick = () => replaceContent(contents[btn])
    elements.menu.append(button)
    elements.buttons[btn] = button
})

replaceContent(contents.home)

const aaa = document.createElement('p')
aaa.innerText = 'provina provetta'
const bbb = document.createElement('p')
bbb.innerText = 'provina provetta'
const ccc = document.createElement('p')
ccc.innerText = 'provina provetta'
const ddd = createParagraph('quarto elemento')
const wrap = document.createElement('div')
wrap.append(aaa,bbb,ccc,ddd,ddd.cloneNode(true),ddd.cloneNode(true),ddd.cloneNode(true),ddd.cloneNode(true))
// elements.main.innerHTML = wrap.outerHTML
replaceContent(wrap.outerHTML)