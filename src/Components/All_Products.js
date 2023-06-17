import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {Show_All_Products} from "../redux/Actions/product_Actions";


const All_Products=()=>{

const product = useSelector((state) => state.allProducts.products);

const dispatch = useDispatch();

console.log(product);

const {id,name,category} = product;

const fetchApi = async()=>{

  const response = await fetch('https://fakestoreapi.com/products').then((res)=>

  res.json()



  )


  useDispatch(Show_All_Products(response))

  console.log(response)

}


useEffect(()=>{

  fetchApi()

},[])



return(
 
  <div>
  <h1>All Products Are Here</h1>
{

product.map((data)=>{

  const {id,image,category,price} = data;

  return(

    <div>

    <p> { id }</p>
    <img src={image} />
    <p> { category} </p>

    </div>

)



})


}
  </div>
)


}

export default All_Products;