function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locoScroll()

function curserEffect(){
let curs = document.querySelector("#curser")
let pageContent = document.querySelector('.page-content')
pageContent.addEventListener("mousemove", (dets) => {
    gsap.to(curser,{
        x:dets.x,
        y:dets.y,
    })
})

pageContent.addEventListener("mouseenter", () => {
    gsap.to(curser,{
        scale:1,
        opacity:1
    })
})

pageContent.addEventListener("mouseleave", () => {
    gsap.to(curser,{
        scale:0,
        opacity:0
    })
})
}
curserEffect()

gsap.from('nav h3',{
    y:-100,
    delay:1,
    duration:1,
    stagger:true,
})

gsap.from('.title h1',{
    y:300,
    delay:1.3,
    duration:1,
    opacity:0,
})

gsap.from('.main_title h1',{
    y:120,
    stagger:0.2,
    // duration:1,
    opacity:0,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.main_title h1',
        start:'top 130%',
        end:'top 30%',
        // markers:true,
        scrub:2,
    }
})

gsap.from('.main_title_page4 h1',{
    y:120,
    stagger:0.2,
    // duration:1,
    opacity:0,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.main_title_page4 h1',
        start:'top 160%',
        end:'top 30%',
        // markers:true,
        scrub:2,
    }
})

gsap.from('.main_title_page5 h1',{
    y:120,
    stagger:0.2,
    // duration:1,
    opacity:0,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.main_title_page5 h1',
        start:'top 170%',
        end:'top 30%',
        // markers:true,
        scrub:2,
    }
})

gsap.from('.inside_title1 h3',{
    y:20,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.inside_title1 h3',
        start:'top 100%',
        end:'top 80%',
        scrub:2,
    }
})

gsap.from('.inside_title1_page4 h3',{
    y:20,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.inside_title1_page4 h3',
        start:'top 80%',
        end:'top 80%',
        scrub:2,
    }
})

gsap.from('.inside_title1_page5 h3',{
    y:20,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.inside_title1_page5 h3',
        start:'top 100%',
        end:'top 80%',
        scrub:2,
    }
})

gsap.from('.inside_title2 h3',{
    y:20,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.inside_title1 h3',
        start:'top 90%',
        end:'top 80%',
        scrub:2,
    }
})

gsap.from('.page-3-inside h2',{
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.page-3-inside h2',
        start:'top 150%',
        end:'top 30%',
        // markers:true,
        scrub:2,
    }
})

gsap.from('.page-3-inside h4',{
    y:-100,
    stagger:3,
    opacity:0,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.page-3-inside h2',
        start:'top 150%',
        end:'top 30%',
        // markers:true,
        scrub:2,
    }
})

gsap.from('.upper_box h4',{
    scale:0.3,
    opacity:0,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.page-3-inside h2',
        start:'top 150%',
        end:'top 30%',
        // markers:true,
        scrub:2,
    }
})

var page4_curser = document.querySelector('.page4_curser')
var page4_main = document.querySelector('.page4_main')

page4_main.addEventListener('mousemove',(dets)=>{
    gsap.to(page4_curser,{
        x:dets.x,
        y:dets.y,
    })
})

page4_main.addEventListener('mouseenter',()=>{
    gsap.to(page4_curser,{
        scale:1,
        opacity:1
    })
})

page4_main.addEventListener('mouseleave',()=>{
    gsap.to(page4_curser,{
        scale:0,
        opacity:0,
    })
})

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
      });


var tl = gsap.timeline()

tl.from('#loader h3',{
    x:40,
    opacity:0,
    stagger:0.1,
    duration:1,
})
tl.to('#loader h3',{
    x:-40,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to('#loader',{
    opacity:0,
    display:'none',
})

gsap.from('.logo h1 span',{
    y: -200,
    opacity:0,
    stagger:2,
    scrollTrigger:{
        scroller:'#main',
        trigger:'.logo h1 span',
        // markers:true,
        start:'top 100%',
        end:'top 100%',
        scrub:1,
    }
})
