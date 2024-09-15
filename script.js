function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
  
  
  }
  locoScroll()

  const target = document.querySelectorAll('.itemss-with-text');
  const results = Splitting({ target: target, by: 'chars' });


document.addEventListener("DOMContentLoaded",function(){

    let tll = gsap.timeline({paused:true});
    tll.to(".menu-overlay",{
      duration:1,
      clipPath:"polygon(0 0,100% 0,100% 100%,0 100%",
      ease:"power2.out"
    })
    tll.from(".menu-link a, .btn",{
      opacity:0,
      y:100,
      stagger: 0.05,
      duration: .75,
      ease:"power1.inout"
    },
    "<",
    )
    tll.to(".bhidio-preview",{
      duration:1,
      height:"200px",
      ease:"power4.inout",
    
    },"<",)
    tll.to(".menu-divider",{
      duration:2,
      width:"100%",
      ease:"power4.out"
    },"<",)
    
    function openmenu(){
      document.querySelector(".menu-overlay").style.pointerEvents = "all"
      tll.play()
    }
    function closemenu(){
      document.querySelector(".menu-overlay").style.pointerEvents = "none"
      tll.reverse()
    }
    document.querySelector(".menu-btn-open").addEventListener("click", function(){
      openmenu()
    })
    document
    .querySelector(".menu-close-btn").addEventListener("click",function(){
      closemenu() 
    })
    // tll.reverse()
    
    
    
     
        gsap.to(".loader",{
          y:"-=110%",
          // opacity:0,
          // scale:0,
          transform:`scaleY(0)`,
          duration: 2,
          ease: Expo.easeInOut,
          delay: 8,      
        })
    
    })


var left2 = document.querySelector(".bhidio-preview")
    var laz = document.querySelector(".lazrev")
left2.addEventListener("click", function(){
laz.play()
  gsap.to(".lazrev",{
    top: "50%",
    borderRadius: "0px",
    transform: `translate(-50%,-50%) scaleX(1) scaleY(1)`,
    duration:1,
    ease: Expo.easeInOut,
  })
})


laz.addEventListener("click", function(){
laz.pause()
 
  gsap.to(".lazrev",{
    top: "70%",
    borderRadius: "50px",
    transform: `translate(-50%,-50%) scaleX(0.7) scaleY(0)`,
    duration:1,
    ease: Expo.easeInOut,
  })
})
    
    

function clutter(){
  
    var clutter = ""
    document.querySelector(".page1-h1 h1").textContent.split("").forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    
    document.querySelector(".page1-h1 h1").innerHTML = clutter
    
    
    }
    clutter()


    function loadingAnime(){
  
        var tl = gsap.timeline()
        
        
        tl.from("nav>img ",{
            scale:0,
            opacity:0,
            rotate:-1000,
            delay:9,
            y:-50,
            duration:.5,
            
          onUpdate:function(){
            // document.querySelector(".loader").style.display = "none"
        
        }
        },"anime2")
        
        tl.to("nav>img",{
          rotate:0,
          delay:.5,
          duration:.5,
          ease:"elastic.out(1,0.3)",
          
        })
        tl.to("nav",{
          scale:0,
          duration:.5,
          ease:"power4.out",
          scrollTrigger:{
            trigger:".page1",
            scroller:".main",
            start:"top -15%",
            end:"top -18%",
            scrub:2,
            // ease:Expo.easeInOut,
          }
        })
        
        
        
          tl.from("#h1 h1 span",{
            scale:0,
            color:"black",
            fontSize:"5vw",
            stagger:{
              amount:.3
            },
            duration:3,
            ease:Expo.easeInOut,
            delay:-3,
           
        
        })
        
        
        gsap.from("#wrapp h4",{
          y:"+=100%",
          opacity:0,
          ease:"power4",
          delay:9.3
        })
        
        
        
        tl.from(".chalo",{
          x:-1500,
          duration:1,
          scrollTrigger:{
            trigger:".chalo",
            scroller:".main",
            start:"top 50%",
            end:"top 35%",
            scrub:1,
            ease:Expo.easeInOut
          }
        })
        tl.from(".content .left h1",{
          fontWeight:"100",
          rotateX:90,
          scrollTrigger:{
            trigger:".chalo",
            scroller:".main",
            start:"top 60%",
            end:"top 40%",
            scrub:1,
            ease:Expo.easeInOut
          }
        })
        
        tl.from(".page3 .a-wrap",{
          width:0,
          scrollTrigger:{
            trigger:".page3",
            scroller:".main",
            start:"top 18%",
            end:"top 17.5%",
            scrub:2,
            ease:Expo.easeInOut,
          }
        })
        tl.from(".page3>img",{
          width:0,
          scrollTrigger:{
            trigger:".page3",
            scroller:".main",
            start:"top 16%",
            end:"top 14%",
            scrub:2,
            ease:Expo.easeInOut,
          }
        })
        
      
        tl.to("#marquee-1,#marquee-3",{
          left:"0%",
          scrollTrigger:{
            trigger:"#marquee-1",
            scroller:".main",
            start:"top 40%",
            end:"top 0%",
            scrub:2,
            ease:Expo.ease,
          }
        })
        tl.to("#marquee-2,#marquee-4",{
          left:"-18%",
          scrollTrigger:{
            trigger:"#marquee-1",
            scroller:".main",
            start:"top 40%",
            end:"top 0%",
            scrub:2,
            ease:Power4,
          }
        })
        tl.from(".itemss-with-text h1 span .char",{
          fontWeight:"50",
          stagger:.1,
          ease:Expo.easeInOut,
          scrollTrigger:{
            trigger:".marquees",
            scroller:".main",
            start:"top 40%",
            end:"top 5%",
            scrub:2,
          }
        })
        
        tl.to(".marker-wrapper",{
          left:"105%",
          scrollTrigger:{
            trigger:".page6",
            scroller:".main",
            start:"top 0%",
            end:"top -150%",
            scrub:1,
            ease:Expo.easeInOut,
          }
        })
        gsap.to("#ii",{
          top:"0%",
          ease:"power4.outdent",
          stagger:{
            amount:.5,
          },
          scrollTrigger:{
            trigger:".footer",
            scroller:".main",
            start:"top 50%",
            end:"top 40%",
          
          }
        })
        gsap.to(".brand-name",{
          left:"0%",
          ease:"power4.outdent",
          delay:1.5,
        
          scrollTrigger:{
            trigger:".footer",
            scroller:".main",
            start:"top 50%",
            end:"top 40%",
          
          }
        })
        gsap.from(".lets-talk p",{
          opacity:0,
          ease:"power4.outdent",
          delay:1,
         
          scrollTrigger:{
            trigger:".footer",
            scroller:".main",
            start:"top 50%",
            end:"top 40%",
          
          }
        })
        gsap.from(".text",{
          scale:0,
          ease:"power4.outdent",
          delay:2,
          
          scrollTrigger:{
            trigger:".footer",
            scroller:".main",
            start:"top 50%",
            end:"top 40%",
          
          }
        })
        
        gsap.from(".text",{
          duration:10,
          ease:Linear.easeNone,
          repeat:-5,
          scrollTrigger:{
            trigger:".footer",
            scroller:".main",
            start:"top 50%",
            end:"top 40%",
          }
        })
        gsap.from(".box",{
          top:"100%",
          ease:"power4.out",
          delay:1,
          scrollTrigger:{
            trigger:".footer",
            scroller:".main",
            start:"top 50%",
            end:"top 40%",
          
          }
        })
        gsap.to(".footer p",{
          marginLeft:"1vw",
          opacity:1,
          ease:"power4.out",
          delay:1.5,
          stagger:{
            amount:.5,
          },
          scrollTrigger:{
            trigger:".footer",
            scroller:".main",
            start:"top 50%",
            end:"top 40%",
          
          }
        })
        
        gsap.from(".h-stripe",{
          top:"500%",
          ease:"power4.out",
          delay:2,
          scrollTrigger:{
            trigger:".footer",
            scroller:".main",
            start:"top 50%",
            end:"top 40%",
          
          }
        })
        gsap.from(".line",{
          scaleX:0,
          ease:"power4.out",
          delay:1,
          scrollTrigger:{
            trigger:".footer",
            scroller:".main",
            start:"top 50%",
            end:"top 40%",
          
          }
        })
        }
        loadingAnime()


        document.getElementById("next").onclick = function(){
          var list = document.querySelectorAll(".item")
          document.querySelector("#slide").appendChild(list[0])
        }
        document.getElementById("prev").onclick = function(){
          var list = document.querySelectorAll(".item")
          document.querySelector("#slide").prepend(list[list.length - 1])
        }

        function pin(){
          if(innerWidth > 600){
            gsap.to(".slider",{
              x:"-=100%",
              scrollTrigger:{
                trigger:".page6",
                scroller:".main",
                start:"top 0%",
                end:"top -200%",
                scrub:1,
                pin:true,
                ease:Expo.easeInOut,
              }
            })
          }
        }
        pin()


        document.addEventListener("DOMContentLoaded", function(){
          const imageSources = [
            '',
            './assets/bmw-7-series-1080x2160-12621.webp',
            'https://wallpapercave.com/wp/wp12081667.jpg',
            './assets/30a10aa4f1cff6c00d095934b02ab3c4.webp',
            'https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/bmwapp-wallpaper/bawp-49-media-hd.jpg',
          ]
        
          const menuItems = document.querySelectorAll(".menu-item")
        
          menuItems.forEach((item) => {
            const copyElement = item.querySelectorAll(".info , .name , .tag")
        
            copyElement.forEach((div) => {
              const copy = div.querySelector("p")
        
              if(copy){
                const duplicateCopy = document.createElement("p")
                duplicateCopy.textContent = copy.textContent
                div.appendChild(duplicateCopy)
              }
            })
          })
        
          const appendImages = (src) => {
            const pre1 = document.querySelector("#pre-img1")
            const pre2 = document.querySelector("#pre-img2")
        
            const img1 = document.createElement("img")
            const img2 = document.createElement("img")
        
            img1.src = src
            img1.style.clipPath = "polygon(0% 100%, 100% 100%,100% 100%, 0% 100%) "
            img2.src = src
            img2.style.clipPath = "polygon(0% 100%, 100% 100%,100% 100%, 0% 100%) "
          
            pre1.appendChild(img1)
            pre2.appendChild(img2)
          
            gsap.to([img1, img2],{
              clipPath:"polygon(0% 100% ,100% 100%,100% 0%, 0% 0%)",
              duration:1,
              ease:"power3.out",
              onComplete:function(){
                removeExtraImages(pre1)
                removeExtraImages(pre2)
        
              }
            })
          }
          function removeExtraImages(container){
            while(container.children.length > 10){
              container.removeChild(container.firstChild);
            }
          }
          document.querySelectorAll(".menu-item").forEach((item,index) => {
            item.addEventListener("mouseover", () => {
              mouseOverAnimation(item)
              appendImages(imageSources[index])
            })
        
            item.addEventListener("mouseout", () => {
              mouseOutAnimation(item)
            })
          })
        
          const mouseOverAnimation = (elem) =>{
            gsap.to(elem.querySelectorAll("p:nth-child(1)"),{
              top:"-100%",
              duration:.3,
            })
            gsap.to(elem.querySelectorAll("p:nth-child(2)"),{
              top:"-100%",
              duration:.3,
        
            })
          }
          const mouseOutAnimation = (elem) =>{
            gsap.to(elem.querySelectorAll("p:nth-child(1)"),{
              top:"0%",
              duration:.3,
            })
            gsap.to(elem.querySelectorAll("p:nth-child(2)"),{
              top:"100%",
              duration:.3,
        
            })
          }
        document.querySelector(".menu").addEventListener("mouseout",function(){
          gsap.to(".pre-img img",{
            clipPath:"polygon(0% 0%, 100% 0%,100% 0%, 0% 0%)",
            duration:1,
            ease:"power3.out",
          })
        })
          
        document.addEventListener("mousemove",function(e){
          const preview = document.querySelector(".preview")
          gsap.to(preview,{
            x:e.clientX ,
            y:e.clientY ,
            duration:1,
            ease:"power3.out",
          })
        
        })
        
        })