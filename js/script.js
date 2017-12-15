var swiper = new Swiper('.swiper-container', {
    //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
    direction: 'vertical',
    //图片加载
    preloadImages:false,
    //分页器
    pagination: {
        el: '.swiper-pagination',
        //让分页器支持点击
        clickable: true,
    },
    // 前进按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },
    
    //  动画效果
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        },
        /* 以下为s4横条动画 */
        slideChangeTransitionStart: function(){
            //this.activeIndex当前的slide的索引
            var arr = ["80%","40%","60%","35%","50%","25%"];
            var tab = document.querySelectorAll(".s4 .main .datatable .tab");
            if(this.activeIndex==3){
                tab[0].style.animation="tab1 1s";
                tab[1].style.animation="tab2 1s";
                tab[2].style.animation="tab3 1s";
                tab[3].style.animation="tab4 1s";
                tab[4].style.animation="tab5 1s";
                tab[5].style.animation="tab6 1s";
                for(var i=0;i<tab.length;i++){
                    tab[i].style.animationDelay="3.7s";
                    tab[i].style.animationFillMode="forwards";
                }
            }else{
                for(var i=0;i<tab.length;i++){
                    tab[i].style="";
                }
            }
        }
    }
})


/* 音乐按钮 */
var mp3 = document.querySelector("#mp3");
var mp3btn = document.querySelector(".mp3btn");
mp3btn.onclick = function(){
    if(mp3.paused){
        mp3.play();
        mp3btn.style.animationPlayState="running";
    }else{
        mp3.pause();
        mp3btn.style.animationPlayState="paused";
    }
};


var tab = document.querySelectorAll(".s4 .main .datatable .tab");
/* s4横条效果 
var swiper_warper = document.querySelector(".swiper-wrapper").style.transform;
var swiper_slide = document.querySelectorAll(".swiper-slide");
for(i=0;i<swiper_slide.length;i++){
    if(swiper_slide[3].className=="swiper-slide swiper-slide-active"){
        if(i==3){
            console.log("3");
            tab[0].style.animation="tab1 2s";
        }
    }
}*/


/* s6文本框 */
var user = document.querySelector("#Name");
var phone = document.querySelector("#phone");
var division = document.querySelector("#division");
var lebs = document.querySelectorAll("label");
user.onkeyup = function(){
    if(user.value==""){
        user.style.paddingLeft="30px";
        lebs[0].style.display="block";
    }else{
        user.style.paddingLeft="20px";
        lebs[0].style.display="none";
    }
};
phone.onkeyup = function(){
    if(phone.value==""){
        phone.style.paddingLeft="30px";
        lebs[1].style.display="block";
    }else{
        phone.style.paddingLeft="20px";
        lebs[1].style.display="none";
    }
};
division.onkeyup = function(){
    if(division.value==""){
        division.style.paddingLeft="30px";
        lebs[2].style.display="block";
    }else{
        division.style.paddingLeft="20px";
        lebs[2].style.display="none";
    }
};
var sub = document.querySelector("input[type='submit']");
sub.onclick=function(){
    alert("练习作品，还不能真正使用，有多处不足，请谅解");
    return false;
}