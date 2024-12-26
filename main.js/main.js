//  start section counter
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duation){
        let obj=document.getElementById(id),
        current=start,
        range=end - start,
        incremtent=end > start ? 1 : -1,
        step=Math.abs(Math.floor(duation / range)),
        timer=setInterval(()=>{
            current += incremtent;
            obj.textContent=current;
            if(current==end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",0,1235,1000);
    counter("count2",100,1235,3000);
    counter("count3",0,1400,3000);
    counter("count4",0,1235,3000);
})
// end section counter
// start nav
let nav=document.querySelector(".navigtion-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}
// end nav
let navbar=document.querySelectorAll(".nav-link");
let navcoll=document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click",()=>{
        navcoll.classList.remove("show");
    })
})