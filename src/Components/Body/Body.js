import React from 'react';
import './Body.css'
import Card from '../Card/Card.js'
import CardLoading from '../Card/CardLoading.js'
import Filter from '../Filter/Filter'

function Body(props){

    const onChangeFilter = (filterValue) =>{
        props.userFilter(filterValue)
    }

    const loadMore = () =>{
        props.loadMore()
    }

    const selectedCard =(data)=>{
        props.selectedCard(data)
    }

    return (
        <div className="body">
            <Filter changeFilter={onChangeFilter} rarityList={props.rarityList} typeList={props.typeList} setList={props.setList}/>
            { props.loadingStatus? 
                <div className="cardContainer">
                    <CardLoading/>
                    <CardLoading/>
                    <CardLoading/>
                    <CardLoading/>
                    <CardLoading/>
                    <CardLoading/>
                    <CardLoading/>
                    <CardLoading/>
                    <CardLoading/>
                    <CardLoading/>
                    <CardLoading/>
                    <CardLoading/>
                </div>
                :
                <div className="cardContainer">
                    { props.data.length === 0? 'No Data' :
                            props.data.map((ele) => (
                                <Card 
                                    key={ele.id}
                                    id={ele.id}
                                    artist={ele.artist}
                                    name={ele.name}
                                    image={ele.images.small}
                                    rarity={ele.rarity}
                                    price={ele.cardmarket ? ele.cardmarket.prices.averageSellPrice:'0'}
                                    left={ele.set.total}
                                    types={ele.types}
                                    selected={selectedCard}
                                />
                            ))
                    }
                    {props.data.length === 0? '': <button onClick={loadMore}>Load More</button>}
                </div>
            }
        </div>
      );
}

export default Body;
