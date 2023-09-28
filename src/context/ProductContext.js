import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsMeta, setProductsMeta] = useState({});
  const [productDetails, setProductDetails] = useState([]);
  const [categories, setCategories] = useState([]);

  async function getData(page) {
    const url = `https://sephora.p.rapidapi.com/products/v2/list?number=${page}&size=12&country=SG&language=en-SG&sort=sales`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c3c25c62f1msh63cd812cfb19d8ap1c599fjsnd547bac0bf57",
        "X-RapidAPI-Host": "sephora.p.rapidapi.com",
      },
    };
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const response = res.json();
    const data = await response;

    //Set prodcuts in state
    const productsData = data.data;
    setProducts(productsData);

    //Set categories
    productsData.map((product) =>
      setCategories(product["attributes"]["option-type-categories"])
    );

    //Set Products Metadata
    const meta = data.meta;
    setProductsMeta(meta);
  }

  async function getProductDetails(id) {
    const url = `https://sephora.p.rapidapi.com/products/v2/detail?id=${id}&country=SG&language=en-SG`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c3c25c62f1msh63cd812cfb19d8ap1c599fjsnd547bac0bf57",
        "X-RapidAPI-Host": "sephora.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    const data = result.data;
    setProductDetails(data);
  }

  function setCartItems(cartDetails) {
    setCart(cartDetails);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <ProductsContext.Provider
      value={{
        setProducts,
        products,
        getData,
        productDetails,
        setProductDetails,
        getProductDetails,
        categories,
        productsMeta,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
