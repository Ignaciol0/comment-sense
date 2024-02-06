import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

export type Product = {
    productTitle:string
    productImage:string
    productReview:string
  }
  
export interface ProductContextInterface {
    product: Product
    setProduct: Dispatch<SetStateAction<Product>>
  }
  const defaultState = {
    product: {
      productTitle: '',
      productImage: '',
      productReview: ''
    },
    setProduct: (product: Product) => {}
  } as ProductContextInterface
  
export const Context = createContext(defaultState)

type ProductProviderProps = {
   children: ReactNode
}

export default function ProductProvider({children}:ProductProviderProps){
  const [product, setProduct] = useState<Product>({
    productTitle:'',
    productImage:'',
    productReview:''
  });
  return (<Context.Provider value={{ product,setProduct}}>{children}</Context.Provider>);
  }