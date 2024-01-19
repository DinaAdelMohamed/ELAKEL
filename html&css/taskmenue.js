let continer=document.createElement('div')
document.appendChild('continer')
function list(){
    let div =document.createElement('div')
    let img=document.createElement('img')
    let title =document.createElement('h3')
    let span=document.createElement('span')
    let botton=document.createElement('button')
    //content
    img.src="./img js/menu1.jpg"
    let titleContent=document.createTextNode('اسم الوجبه')
    let spanContent=document.createTextNode(' 120 جم')
    let buttonContent=document.createTextNode('+')
div.style.width='200px'
div.style.padding='10px'
div.style.margin='4px'
div.style.display='inline-block'


img.style.width='100%'
    title. appendChild (titleContent)
    span .appendChild(spanContent)
    botton.appendChild(buttonContent)
    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(span)
    div.appendChild(botton)

    continer.appendChild(div)

}
for(let x=0;x<=10;x++){
    list()
}






























