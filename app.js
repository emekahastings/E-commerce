let plus= document.querySelector('.plus')
let minus= document.querySelector('.minus')
let number= document.querySelector('.zero')
let image1=document.querySelector('.img1')
let image2=document.querySelector('.img2')
let image3=document.querySelector('.img3')
let image4=document.querySelector('.img4')
let product1= document.getElementById('product1')
 let menus= document.querySelector('.menus')
 let cartname= document.querySelector('.car')
let side= document.getElementById('side')
let carticon= document.getElementById('carticon')
let x= document.querySelector('.x')
let trolley= document.getElementById('trolley')
let slideimages= document.querySelectorAll('.images')
let prev= document.querySelector('.previous')
let next= document.querySelector('.next')
let tocart= document.querySelector('.tocart')
let thumb= document.querySelectorAll('.block')
let cartinfo= document.getElementById('cartinfo')
let avatar= document.getElementById('avatar')
let digit= document.querySelector(".digit")
let ex = document.getElementById('closebtn')
let current=0
console.log(cartinfo)

function reset(){
  for(i=0; i<slideimages.length;i++){
    slideimages[i].style.display='none'
  }
}

  function show(){
    reset()
    slideimages[0].style.display='block'
  }

  function slideleft(){
    reset()
  slideimages[current+1].style.display='block'
    current--
}

prev.addEventListener('click', function(){
  if(slideimages===0){
    current= slideimages.length
  } 
  slideleft()
})
function slideright(){
  reset()
  slideimages[current+1].style.display='block'
  current++
}
next.addEventListener('click', function(){
  if(slideimages=== slideimages.length-1){
    current=-1
  }
  slideright()
})

show()
// Increase the number
let count=0
function Increase(){

    if(plus.classList.contains('plus')){
      count++
    }
    number.innerHTML= count 
}

function decrease(){
  if(minus.classList.contains('minus')){
    count--
  
}
number .innerHTML= count
}


image2.addEventListener('click', function(){
 
    if(image2.classList.contains('img2')){
      product1.src= "image-product-2.jpg"
      console.log('abi')
    } 
  }
)
image1.addEventListener('click', function(){
 
  if(image1.classList.contains('img1')){
    product1.src= "image-product-1.jpg"
   
  } 
}
)
image3.addEventListener('click', function(){
 
  if(image3.classList.contains('img3')){
    product1.src= "image-product-3.jpg"

  } 
}
)
image4.addEventListener('click', function(){
 
  if(image4.classList.contains('img4')){
    product1.src= "image-product-4.jpg"
    
  } 
}
)
// Create lightbox
let lightbox= document.createElement('div')
lightbox.id='lightbox'
document.body.appendChild(lightbox)


product1.addEventListener('click',function(){
  lightbox.classList.add('active')
  image1.classList.add('active')
  ex.classList.add('active')
  ex.style.display='block'

 let img= document.createElement('img')
    img.src= product1.src
    img.style.width='400px'
    img.style.height='fit-content'
    img.style.position='relative'
    img.style.left='500px'
    img.style.top='70px'
    img.style.borderRadius='5px'
    // next.style.display='block'
    // next.style.width='10%'
    thumb.forEach(function(pic){
      pic.style.width= '90px'
      pic.style.top='475px'
      pic.style.left='100px'
    })
    
   ex.addEventListener('click', function(event){
    while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild)
    }
    if(event.target!== event.currentTarget) return
    lightbox.classList.remove('active')
 
   })
   
    lightbox.appendChild(img)
    lightbox.appendChild(image1)
    lightbox.appendChild(image2)
    lightbox.appendChild(image3)
    lightbox.appendChild(image4)
    lightbox.append(ex)
    
})





 cart=true
cartname.addEventListener('click', function(){
 if(!cart){
  trolley.style.width='3in'
  cart=true
 } else if(cart===true){
  trolley.style.width='0in'
  cart=false
 }

})

  
  menus.addEventListener('click', function openslide(){
    side.style.width= '200px'
   console.log('oya')
})
  function close(event){
      event.preventDefault()
      side.style.width= '0px'
  }
  x.addEventListener('click', close)

 
tocart.addEventListener('click', function(){

   



  if(number.textContent <= 0){
    alert('empty')
  } else if(number.textContent > 0){
      digit.innerHTML=number.textContent
  }
})



 