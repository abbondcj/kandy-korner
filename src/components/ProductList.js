import React from 'react'

export const ProductList = ({products}) => {
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

