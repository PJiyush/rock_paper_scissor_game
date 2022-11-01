

let a = Math.random()
a = a*100
a =Math.round(a)
console.log(a)



let computerValue;

let score_of_yours=0;
let score_of_computer=0;

function valueOfA(a){
    a = Math.random()
    a = a*100
    a = Math.round(a)
    if(a%3==0){
    computerValue  = 1
}
else if(a%5==0 || a%7==0){
    computerValue = 2
}
else{
    computerValue = 3
}

}


console.log(computerValue)
localStorage.setItem('you',score_of_yours)
localStorage.setItem('computer',score_of_computer)

let personValue;
function assignValue1(){
    personValue = 1;
    score_of_computer = localStorage.getItem('computer')
    score_of_yours = localStorage.getItem('you')
    score_of_computer = parseInt(score_of_computer)
    score_of_yours = parseInt(score_of_yours)
    console.log(typeof score_of_computer)
    console.log(typeof score_of_yours)
    console.log(personValue)
    let x = document.querySelector('h3')
    if(computerValue==2 && personValue==1){
        x.innerHTML = 'you Won'
        score_of_yours = score_of_yours+1;
    }else if(computerValue==3 && personValue==1){
        x.innerHTML  = 'you Lost'
        score_of_computer = score_of_computer+1;
    }
    else{
        x.innerHTML = `Draw <br><br> try again`    
    }
    
    localStorage.setItem('you',score_of_yours)
    localStorage.setItem('computer',score_of_computer)
        a = Math.random()
        a = a*100
        a = Math.round(a)
    console.log(a)
    if(a%3==0){
        computerValue  = 1
    }
    else if(a%5==0 || a%7==0){
        computerValue = 2
    }
    else{
        computerValue = 3
    }
    let r = document.getElementById("scoreOfYours")
    r.innerHTML = localStorage.getItem('you')
    
    let t = document.getElementById("scoreOfComputer")
    t.innerHTML = localStorage.getItem('computer')

    x = document.getElementById("rock")
    x.addEventListener("click",assignValue1)
    y = document.getElementById("paper")
    y.addEventListener("click",assignValue2)
    z = document.getElementById("scissor")
    z.addEventListener("click",assignValue3)

}

function assignValue2(){
    personValue = 2;
    score_of_computer = localStorage.getItem('computer')
    score_of_yours = localStorage.getItem('you')
    score_of_computer = parseInt(score_of_computer)
    score_of_yours = parseInt(score_of_yours)
    console.log(personValue)
    let x = document.querySelector('h3')
    if(computerValue==3 && personValue==2){
        x.innerHTML = 'you Won'
        score_of_yours = score_of_yours+1;
    }else if(computerValue==1 && personValue==2){
        x.innerHTML  = 'you Lost'
        score_of_computer = score_of_computer+1;
    }
    else{
        x.innerHTML = `Draw <br><br> try again`
    }
    

    localStorage.setItem('you',score_of_yours)
    localStorage.setItem('computer',score_of_computer)
    a = Math.random()
    a = a*100
    a = Math.round(a)
console.log(a)
if(a%3==0){
    computerValue  = 1
}
else if(a%5==0 || a%7==0){
    computerValue = 2
}
else{
    computerValue = 3
}
let pr = document.getElementById("scoreOfYours")
    pr.innerHTML = localStorage.getItem('you')
    
    let pt = document.getElementById("scoreOfComputer")
    pt.innerHTML = localStorage.getItem('computer')

x = document.getElementById("rock")
x.addEventListener("click",assignValue1)
y = document.getElementById("paper")
y.addEventListener("click",assignValue2)
z = document.getElementById("scissor")
z.addEventListener("click",assignValue3)

}
function assignValue3(){
    personValue = 3;
    score_of_computer = localStorage.getItem('computer')
    score_of_yours = localStorage.getItem('you')
    score_of_computer = parseInt(score_of_computer)
    score_of_yours = parseInt(score_of_yours)
    console.log(personValue)
    let x = document.querySelector('h3')
    if(computerValue==1 && personValue==3){
        x.innerHTML = 'you Won'
        score_of_yours = score_of_yours+1;
    }else if(computerValue==2 && personValue==3){
        x.innerHTML  = 'you Lost'
        score_of_computer = score_of_computer+1;
    }
    else{
        x.innerHTML = `Draw <br><br> try again`
    }
    localStorage.setItem('you',score_of_yours)
    localStorage.setItem('computer',score_of_computer)
    a = Math.random()
    a = a*100
    a = Math.round(a)
console.log(a)
if(a%3==0){
    computerValue  = 1
}
else if(a%5==0 || a%7==0){
    computerValue = 2
}
else{
    computerValue = 3
}
let qr = document.getElementById("scoreOfYours")
    qr.innerHTML = localStorage.getItem('you')
    
    let qt = document.getElementById("scoreOfComputer")
    qt.innerHTML = localStorage.getItem('computer')
x = document.getElementById("rock")
x.addEventListener("click",assignValue1)
y = document.getElementById("paper")
y.addEventListener("click",assignValue2)
z = document.getElementById("scissor")
z.addEventListener("click",assignValue3)

}
function loadThePage(){
    location.reload()
}

    let x = document.getElementById("rock")
    x.addEventListener("click",assignValue1)
        

    let y = document.getElementById("paper")
    y.addEventListener("click",assignValue2)
    

    let z = document.getElementById("scissor")
    z.addEventListener("click",assignValue3)
        
        

    let q = document.getElementById("new_game")
    q.addEventListener("click",loadThePage)


    
