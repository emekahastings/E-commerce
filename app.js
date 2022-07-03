let plus= document.querySelector('.plus')
let minus= document.querySelector('.minus')
let number= document.querySelector('.zero')
let image1=document.querySelector('.img1')
let image2=document.querySelector('.img2')
let image3=document.querySelector('.img3')
let image4=document.querySelector('.img4')
let product1= document.getElementById('product1')
 let menus= document.getElementById('ham')
 let cartname= document.querySelector('.cart')
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
let digits= document.querySelector(".digits")
let ex = document.getElementById('closebtn')
let empty= document.getElementById('empty')
let red= document.querySelector('.red')
let reds= document.querySelector('.reds')
let inside=document.getElementById('inside')
let del= document.getElementById('delet')
console.log(del)
// let circle1= document.getElementById('circles')
// let circle2= document.getElementById('circle1')
let current=0

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
  slideimages[current-1].style.display='block'
    current--
}

prev.addEventListener('click', function(){
  if(current===0){
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
  if(current=== slideimages.length-1){
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



// Create lightbox
let lightbox= document.createElement('div')
lightbox.id='lightbox'
document.body.appendChild(lightbox)

product1.addEventListener('click',function(){
  lightbox.classList.add('active')

//Create product1 lightbox image
 let img= document.createElement('img')
    img.src= product1.src
    img.style.width='430px'
    img.style.height='fit-content'
    img.style.position='relative'
    img.style.left='500px'
    img.style.top='40px'
    img.style.borderRadius='5px'

    // create thumbnail lightbox image
let t1=  document.createElement('img')
let t2=  document.createElement('img')
let t3=  document.createElement('img')
let t4=  document.createElement('img')
t1.src= image1.src
t1.className='img1'
t1.style.width='7.5%'
t1.style.height='fit-content'
t1.style.position='relative'
t1.style.left='62px'
t1.style.top='480px'
t1.style.borderRadius='5px'

t2.src= image2.src
t2.className='img2'
t2.style.width='7.5%'
t2.style.height='fit-content'
t2.style.position='relative'
t2.style.left='60px'
t2.style.top='480px'
t2.style.borderRadius='5px'

t3.src= image3.src
t3.className='img3'
t3.style.width='7.5%'
t3.style.height='fit-content'
t3.style.position='relative'
t3.style.left='58px'
t3.style.top='480px'
t3.style.borderRadius='5px'

t4.src= image4.src
t4.className='img4'
t4.style.width='7.5%'
t4.style.height='fit-content'
t4.style.position='relative'
t4.style.left='55px'
t4.style.top='480px'
t4.style.borderRadius='5px'

//Create mext and prev icons
let nxt= document.createElement('img')
let prv= document.createElement('img')
 nxt.className='next'
 prv.className= 'previous'

    nxt.src='icon-next.svg'
    nxt.style.display='block'
    nxt.style.width='20px'
    nxt.style.height= 'fit-content'
    nxt.style.top='230px'
    nxt.style.left='0px'  
    prv.src='icon-previous.svg'
    prv.style.display='block'
    prv.style.width='20px'
    prv.style.height= 'fit-content'
    prv.style.top='230px'
    prv.style.right='370px'
   
   
    t2.addEventListener('click', function(){
 
      if(t2.classList.contains('img2')){
        img.src= 'image-product-2.jpg'
        console.log('abi')
      } 
    }
  )
  t1.addEventListener('click', function(){
   
    if(t1.classList.contains('img1')){
      img.src= "image-product-1.jpg"
     
    } 
  }
  )
  t3.addEventListener('click', function(){
   
    if(t3.classList.contains('img3')){
      img.src= "image-product-3.jpg"
  
    } 
  }
  )
  t4.addEventListener('click', function(){
   
    if(t4.classList.contains('img4')){
      img.src= "image-product-4.jpg"
      
    } 
  }
  
  )
  
  
    
   ex.addEventListener('click', function(event){
    while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild)
    }
    
    if(event.target!== event.currentTarget) return
    lightbox.classList.remove('active')
    
  
    
   })


    lightbox.appendChild(img)
     lightbox.appendChild(t1)
    lightbox.appendChild(t2)
    lightbox.appendChild(t3)
    lightbox.appendChild(t4)
    lightbox.append(ex)
    lightbox.appendChild(nxt)
    lightbox.append(prv)
   
    
})

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



 cart=true
cartname.addEventListener('click', function(){
 if(!cart){
  cartinfo.style.width='3in'
   empty.style.display='block'
  inside.style.visibility='visible'
  cart=true
 } else if(cart===true){
  cartinfo.style.width='0in'
  empty.style.display='none'
  inside.style.visibility='hidden'
  cart=false
 
 }

})

  
  menus.addEventListener('click', function openslide(){
    
   side.style.width= '200px'
   
})
  function close(event){
      event.preventDefault()
      side.style.width= '0px'
  }
  x.addEventListener('click', close)

  function removed(){
    inside.style.visibility="hidden"
  empty.style.display='block'
  }

 
tocart.addEventListener('click', function(){

    if(number.textContent > 0){
     red.style.display='block'
     reds.style.display='block'
     console.log(digit.innerHTML)
      digit.innerHTML=number.textContent
      digits.innerHTML=number.textContent
      empty.innerText=''
      inside.innerHTML= 
        `     
               <div class='cartel'> 
               <b> Cart </b> <br> 
      </div>
  <div id='info'> 
 <span><img src="image-product-1-thumbnail.jpg" id='thumbimg'> </span>
 <span id='type'> Fall limited Edition sneakers 
      125*${number.textContent} =${number.textContent*125}        
 </span>
  <span id='del'><img src="icon-delete.svg" id='delet' class='delete' onClick='removed()'> </span>
     </div>

     <div id='check'> <b class='out'> Check out </b> </div>
`  
  } else if(number.textContent==0){
    alert('You cannot add zero items to the cart')
  }

})








 