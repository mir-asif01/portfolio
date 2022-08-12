let nightBtn = document.getElementById('nightBtn');
// console.log('nightBtn');

let dayBtn = document.getElementById('dayBtn');
// console.log('dayBtn');

dayBtn.addEventListener('click',function(){
    document.body.style.background = 'white';
    document.body.style.color = 'black';
    nightBtn.style.color = 'black';
    dayBtn.style.display = 'none';
    nightBtn.style.display = 'block';


})
nightBtn.addEventListener('click',function(){
    document.body.style.background = '#100720';
    document.body.style.color = 'white';
    nightBtn.style.display = 'none';
    dayBtn.style.display = 'block';
})