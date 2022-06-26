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
console.log(lightbox)

product1.addEventListener('click',function(){
  lightbox.classList.add('active')
  next.classList.add('active')
 let img= document.createElement('img')
    img.src= product1.src
    img.style.width='400px'
    while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
})

lightbox.addEventListener('click', function(event){
  if(event.target!== event.currentTarget) return
  lightbox.classList.remove('active')
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
    alert('hi')
    side.style.width= '200px'
   console.log('oya')
})
  function close(event){
      
      event.preventDefault()
      side.style.width= '0px'
  }
  x.addEventListener('click', close)

 
  thumb.forEach(function(btn){
    btn.addEventListener('click', function(event){
     if(event.target.classList.contains('img1')){
        console.log(';abii')
  let cartimage= document.createElement('img')
  cartimage.src= 'image1-cart.jpg'
  cartimage.id= 'cartimg'
  cartimage.className='cartimg'
  cartinfo.appendChild(cartimage)
     } 
    })
})

// function empty(){

//   if(cartinfo===""){
//     console.log('empty')
//   }
// }
// avatar.addEventListener('click', empty)


// function create(event){
//   event.preventDefault()
//   let cartinfo= document.createElement('div')
//   cartinfo.id='cartinfo'
//   trolley.appendChild(cartinfo)

 
// let cartimage= document.createElement('img')
// cartimage.src= 'image1-cart.jpg'
// cartimage.id= 'cartimg'
// cartimage.className='cartimg'
// if(event.target.classList.contains('img1')){
// trolley.appendChild(cartimage)
// }

//   let remove= document.createElement('img')
//   remove.src= 'icon-delete.svg'
//   remove.id= 'del'
//   remove.className='del'
//   cartinfo.appendChild(remove)

//   let text= document.createElement('div')
//   text.className='desc'
//   text.appendChild(document.createTextNode('Best summer wears'))
//   cartinfo.appendChild(text)
// }
// tocart.addEventListener('click', create )
 




 