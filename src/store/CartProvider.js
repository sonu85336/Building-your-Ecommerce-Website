import { useState ,useEffect} from "react";
import CartContext from "./cart-context";
import axios from "axios";
const CartProvider = (props) => {
 
  if (!localStorage.getItem("email")) {
    localStorage.setItem("email", "");
  }
  let email =localStorage.getItem('email').replace("@", "").replace(".", "");
  
  console.log(email);
  const [cart, setCart] = useState([]);

  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const addItemToCartHandler = (item) => {
    let arr = [...cart];
    let isPresent = false;
    cart.forEach((product,index) => {
      if (item.title === product.title) {
        arr[index].amount = Number(item.amount)+Number(arr[index].amount)
        isPresent = true;
        let {_id,...updateData}= arr[index];

        axios 
        .put(
          `https://crudcrud.com/api/0ed8a21ec0674144803ffdd33b1b887f/cart${email}/${arr[index]._id}`,updateData
        ).then((res)=>{
          console.log(res.data,'Successfull')
        })
        .catch((error)=>{
          alert(error)
        })
        return 
      }
    });
    if (isPresent===false) {
      axios
      .post(
        `https://crudcrud.com/api/0ed8a21ec0674144803ffdd33b1b887f/cart${email}`,{...item,amount:1})
      
      
   
    .then((res)=>{
      arr.push(res.data);
      console.log(res.data,"Successfull")
      setCart(arr)
    })
     .catch((error)=>{
      alert(error)
     })

    }
  }  
      
  const removeItemHandler = (item)=>{
  let removeitem = cart.findIndex((item)=>item.id===item);

  const arr = [...cart];
  
  const updateItems = arr.splice(removeitem,1)
  console.log(removeitem,arr,updateItems)
  setCart(arr)
  }
       
       
  const IncreaseAndDecrease = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.title === item.title) {
        ind = index;
      }
    });
    const tempArr = cart;
    tempArr[ind].amount = Number(tempArr[ind].amount) + d;
    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }
    setCart([...tempArr]);
  };
  const loginHandler = (token) => {
    setToken(token);

    localStorage.setItem("token", token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };
  useEffect(()=>{
    axios
    .get(
      `https://crudcrud.com/api/0ed8a21ec0674144803ffdd33b1b887f/cart${email}`
    ).then((res)=>{
        setCart(res.data)
    })
  },[])
  
  // const mapIDHandler = (id)=>{
  //   cart.id=id;
  // }
  const cartcontext = {
    items: cart,
    incAndDecFun: IncreaseAndDecrease,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemHandler,
    login: loginHandler,
    logout: logoutHandler,
    isLoggedIn: userIsLoggedIn,
    token: token,
    
   
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
