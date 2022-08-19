const panels = document.querySelectorAll('panel');

panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        //先移除其他处于active状态的对象的active状态
        removeActiveClass();
        // 给当前对象添加active状态
        panel.classList.add('active');
        
    })
});

function removeActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}