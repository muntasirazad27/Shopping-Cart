//get html elements
let AddToCart1 = document.getElementById('AddToCart1')
let AddToCart2 = document.getElementById('AddToCart2')
let AddToCart3 = document.getElementById('AddToCart3')
let AddToCart4 = document.getElementById('AddToCart4')
let MyProduct = document.getElementById("product-list")
let ClearCart= document.getElementById('ClearCart')


// Event Listeners
AddToCart1.addEventListener('click',AddProduct)
AddToCart2.addEventListener('click',AddProduct)
AddToCart3.addEventListener('click',AddProduct)
AddToCart4.addEventListener('click',AddProduct)
MyProduct.addEventListener('click',RemoveProduct)
ClearCart.addEventListener('click',RemoveAllProduct)



function AddProduct(e){
     let m = e.target.parentElement.parentElement
     
    

        let list= document.getElementById('product-list')
        let row= document.createElement('tr');
        row.innerHTML= `
          <td>${m.childNodes[1].textContent}</td>
          <td>${m.childNodes[3].textContent}</td>
          <td><a href="#" class="delete"> X </a></td>`;
        console.log(row)
        list.appendChild(row);


}



function RemoveProduct(e) {
    if(e.target.hasAttribute('href')){
        if(confirm("are you sure?")){
          let element = e.target.parentElement.parentElement;
          console.log(element)
           element.remove()
        }  
    }
  }

  function RemoveAllProduct(e) {
      let myp = document.getElementById('product-list')
     if(confirm("Do you want to remove all the items?")){
        myp.innerHTML=''
        console.log(myp)
     }
  }