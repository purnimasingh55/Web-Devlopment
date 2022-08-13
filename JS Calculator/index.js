function display(num){
    document.getElementById('textarea').value+=num

}
function calculate(){
    var value = document.getElementById('textarea').value
    var answer = eval(value)
    document.getElementById('textarea').value=answer
}
function clr(){
    document.getElementById('textarea').value=''
} 