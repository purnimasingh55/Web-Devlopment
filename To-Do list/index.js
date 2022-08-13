function addtolist(){
    var taskname = document.getElementById(' taskname').value
    var tododiv = document.getElementById(' mytodo')

    var newtodoitem = document.createElement(' div')
    var todoname = document.createElement(' li')
    todoname.innerText = taskname

    var deletebtn = document.createElement('i')
    deletebtn.classlist.add('far')
    deletebtn.classlist.add('fa-trash-alt' )
    
    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletebtn)  

    tododiv.appendChild(newtodoitem)
}
 