const face=document.querySelector('.first')
const kiss=document.querySelector('.second')

face.addEventListener('click',()=>{
    if(kiss.classList.contains('second')){
        kiss.classList.add('active');
        face.classList.remove('active');
    }
});

kiss.addEventListener('click',()=>{
    if(face.classList.contains('first')){
        face.classList.add('active');
        kiss.classList.remove('active');
    }
});