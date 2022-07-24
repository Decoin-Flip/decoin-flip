const head = document.getElementById('head');
const tail = document.getElementById('tail');

head.addEventListener('click', function
(){
    head.classList.add('selected');
    tail.classList.remove('selected');
});

tail.addEventListener('click', function
(){
    tail.classList.add('selected');
    head.classList.remove('selected');
})

const amounts = document.querySelectorAll('.amount');
const input = document.getElementById('input');

amounts.forEach((btn)=>{
   btn.addEventListener('click' , function
   (e){
   const amount = btn.getAttribute('data-amount');
   input.value = amount;
   })
})

console.log(amounts);

let coin = document.querySelector(".coin");
let betBtn = document.querySelector("#bet");

const chances = [0 ,'head','tail'];

function disableButton(){
    betBtn.disabled = true;
    setTimeout(function(){
        betBtn.disabled = false;
    },3000);
}

document.getElementById('pyro').style.opacity = 0;

betBtn.addEventListener("click", () => {
    let selected = document.querySelector('.selected').getAttribute('id');
    let random = Math.random() * 2;
    let i = Math.ceil(random) ;
    console.log(random,i);
    coin.style.animation = "none";
    if(i == 1){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100)
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
    }
    let flipped = chances[i];
    console.log(selected == flipped);
    setTimeout(function(){
        if(selected == flipped){
            document.getElementById('result').innerText = "You won!";
            document.getElementById('result').style.color = 'green';
            document.getElementById('pyro').style.opacity = 1;
        }else {
            document.getElementById('result').innerHTML = "You lost!";
            document.getElementById('result').style.color = 'red';
            document.getElementById('pyro').style.opacity = 0;
        }
    }, 3000);
    setTimeout(function(){
        document.getElementById('result').innerText = "";
        document.getElementById('result').style.color = 'none';
        document.getElementById('pyro').style.opacity = 0;
    },4500)
    disableButton();
});