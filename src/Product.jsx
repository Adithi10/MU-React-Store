import React, {useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react'
export default function Product() {
    const fetchProducts = async () => {
      const url = "https://gcet-node-app.vercel.app/products/all"
      const res = await axios.get(url)
    };
    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    <div>Product</div>
  )
}
