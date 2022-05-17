import React, { useState, useEffect} from "react"

export const ProductList = () => {
    const [products, getProducts] = useState([])

    useEffect(
        () => {
          fetch("http://localhost:8088/products?_sort=productTypeId&_order=asc&_expand=productType")
            .then(res => res.json())
              .then(
                (data) => {
                  getProducts(data)
                }
              )
        },
        []
    )

  return (
    <div>
        {
            products.map(
                (product) => {
                    const price = product.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })
                    return <>
                        <div key={`product--${product.id}`}>
                            <p>Product ID: {product.id}</p>
                            <p>Name: {product.name}</p>
                            <p>Type ID: {product.productType.type}</p>
                            <p>Price: {price}</p>

                        </div><br></br>
                    </>
                }
            )
        }
    </div>
  )
}

