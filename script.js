let todoss=[{id:1,text:'learn javascript', isDone:false}]
let text=''
let con =document.getElementById('todo-con')

showTods(todoss)

function showTods(todoss){
    con.innerHTML=""
    for(let j=0; j<todoss.length; j++){
        let tod=todoss[j]
        let lst=createElmnt(tod)
        con.appendChild(lst)
    }
}

function createElmnt(tod){
    let ll=document.createElement('li')
    ll.setAttribute('class','tod-lst')
    ll.setAttribute('id',tod.id)
    let cb=document.createElement('input')
    cb.name="is-done"
    cb.type="checkbox"
    cb.id=tod.id
    let sp=document.createElement('span')
    if(tod.isDone){
        cb.checked= true
        sp.style.textDecoration='line-through'
    }else{
        cb.checked=false
    }
    cb.onchange=changeStatus

    sp.innerText=tod.text
    let bt=document.createElement('button')
    bt.onclick=todoDelete
    bt.innerText="del"
    bt.id=tod.id
    ll.appendChild(cb)
    ll.appendChild(sp)
    ll.appendChild(bt)
    ll.style.width='300px'
    ll.style.height='100px'
    ll.style.backgroundColor='green'

    sp.style.backgroundColor='green'
    bt.style.backgroundColor='red'
    bt.style.width='50px'
    bt.style.height='50px'
    bt.style.margin='20px'
    bt.style.marginRight='10px'
    return ll
}
function textChange(event){
    let newTxt=event.target.value;
    text=newTxt
}

function todoAdd(){
if(text.length>0){
    let ntd={id:Math.round(Math.random()*100), text:text, isDone:false}
    todoss.unshift(ntd)
    showTods(todoss)}
    let inptxt = document.getElementById('doto-input')
    inptxt.value=''
    text=''
}

function changeStatus(event){
    let idtodo=Number(event.target.id)
    console.log(idtodo)
    let updatetd=todoss.map( function(todo){
        if(todo.id===idtodo){
            todo.isDone=!todo.isDone
        }
        return todo
    })
    todoss=updatetd
    showTods(todoss)
}

function todoDelete(e){
    let idtodo=Number(e.target.id)
    console.log(idtodo)
    let todoupdate=[]
    for(let i=0; i<todoss.length;i++){
        // let td=todoss[i]
        if(todoss[i].id!==idtodo){
            todoupdate.push(todoss[i])
        }
    }
    todoss=todoupdate
    showTods(todoss)
}
