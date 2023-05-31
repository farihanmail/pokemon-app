import React ,{ useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header.js'
import Body from './Components/Body/Body.js'
import Cart from './Components/Cart/Cart.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import pokemon from 'pokemontcgsdk'
pokemon.configure({apiKey: '57d31acc-0b87-4d8a-8d79-4e39abb74fba'})

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rarity, setRarity] = useState([]);
  const [type, setType] = useState([]);
  const [set, setSet] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({})
  const [isCart, setIsCart] = useState(false)
  const [cartArr, setCartArr] = useState([])
  
  useEffect(() => {
    setLoading(true)
    loadData(filter, page)

    pokemon.rarity.all().then(rarity => {
      setRarity(rarity)
    })

    pokemon.type.all().then(type => {
      setType(type)
    })

    pokemon.set.all().then(set => {
      setSet(set)
    })
    
  }, [filter, page]);

  const loadData = (filter, page) =>{
    let query =''
    console.log(filter)
    if(Object.keys(filter).length === 0 && filter.constructor === Object){
      query =''
    }else{
      const nameData = filter.Pname !== '' ? `name:"${filter.Pname}*" ` : '';
      const rarityData = filter.Prarity !== '' ? `rarity:"${filter.Prarity}" ` : '';
      const typeData = filter.Ptype !== '' ? `types:"${filter.Ptype}" ` : '';
      const setFData = filter.Pset !== '' ? `set.name:"${filter.Pset}" ` : '';
      query = nameData + rarityData + typeData + setFData
    }

    pokemon.card.where({q: query, pageSize: 12, page: `${page}` })
      .then(res => {
        setPage(res.page);
        page===1 ? setData(res.data) : setData([...data, ...res.data]);
        setLoading(false)
      })
  }

  const filterData = (val) =>{
      setPage(1)
      setFilter(val)
  }

  const loadMoreHandler = () =>{
    setPage(page +1)
  }

  const toggleCart =()=>{
    setIsCart(!isCart)
  }

  const selectedCardHandler =(card)=>{
    var selectedCard = data.filter((e)=>{
      return(e.id === card)
    })

    if(cartArr.length === 0){
      selectedCard[0].cartCount = 1
      setCartArr([...selectedCard, ...cartArr])
    }else{
      cartArr.filter((e)=>{
        if(e.id === card){
          cartArr.splice(cartArr.findIndex(x => x.id === card),1)
          const addMore = {
            ...e, cartCount: e.cartCount+1
          }
          setCartArr([addMore, ...cartArr])
        }else{
          selectedCard[0].cartCount = 1;
          setCartArr([...selectedCard, ...cartArr])
        };
      })
    }
  }

  return (
    <div className="App">
      <Header/>
      <Body data={data} loadMore={loadMoreHandler} userFilter={filterData} rarityList={rarity} typeList={type} setList={set} loadingStatus={loading} selectedCard={selectedCardHandler}/>
      <div className='cartButton'>
        <button className="viewCart" onClick={toggleCart}><FontAwesomeIcon icon={faCartShopping} flip="horizontal"/> View Cart</button>
      </div>
      {isCart && <Cart closeCart={toggleCart} updateCart={cartArr}/>}
    </div>
  );
}

export default App;
