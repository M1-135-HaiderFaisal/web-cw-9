let products =[
    {name:`Brulee`,price:`560`},
    {name:`Oreo`,price:`250`},
    {name:`Dates`,price:`100`}
    ]



     let cart=[];
    let total=0;
    function addTocard(index){
    
        let product =products[index];
    
       cart.push(product)
       console.log(cart)
    total=total+product.price
    let tot=document.getElementById(`total`)
    tot.innerText=total
    
    
       let list =document.getElementById(`lest`)
       list.innerHTML+=`<li>${product.name}${product.price}</li>`
    }