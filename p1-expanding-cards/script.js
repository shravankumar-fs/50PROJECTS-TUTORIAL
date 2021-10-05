const panels=document.querySelectorAll('.panel')
let activeClass='active'

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClass();
        panel.classList.add('active');
    })
})

function removeActiveClass(){
    panels.forEach(p=> p.classList.remove('active'))
}