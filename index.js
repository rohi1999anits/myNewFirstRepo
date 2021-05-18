var list=document.getElementById('list')
var button=document.getElementById('add-butt')
var newListElement=document.createElement('li')
var input=document.getElementById('ip')
button.addEventListener('click',function(){
	var newListElement=document.createElement('li')
	console.log(input.innerhtml)
    var text=document.createTextNode('input.innerhtml')
    newListElement.appendChild(text)
    list.appendChild(newListElement)

})