let up=window.pageYOffset
let nav=document.querySelector('.barra_de_navegacion')

window.addEventListener('scroll',function(){
    let ua=window.pageYOffset

    console.log(ua)
    if (up>=ua){
        nav.style.top="0px"
    }else{
        nav.style.top="-100px"}

        up=ua
})