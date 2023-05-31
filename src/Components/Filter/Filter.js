import React, {useEffect, useState} from 'react';
import './Filter.css'

function Filter(props){
    const [enteredName, setEnteredName] = useState('')
    const [enteredRarity,  setEnteredRarity] = useState('')
    const [enteredType,  setEnteredType] = useState('')
    const [enteredSet,  setEnteredSet] = useState('')
    
    useEffect(()=>{
        inputChangeHandler()
    } ,[enteredName, enteredRarity, enteredType, enteredSet])

    const nameFilter =(e)=>{
        setEnteredName(e.target.value)
    }

    const rarityFilter =(e)=>{
        setEnteredRarity(e.target.value)
    }

    const typeFilter =(e)=>{
        setEnteredType(e.target.value)
    }

    const setFilter =(e)=>{
        setEnteredSet(e.target.value)
    }

    const inputChangeHandler = () =>{
        const filterData = {
            Pname: enteredName, 
            Prarity: enteredRarity,
            Ptype: enteredType,
            Pset: enteredSet
        }
        props.changeFilter(filterData)
    }

    return (
        <div className="filter">
            <input value={enteredName} onChange={nameFilter}></input>
            <select placeholder='Type' value={enteredType} onChange={typeFilter}>
                <option key='' value='' >Type</option>
                {props.typeList.map((type)=>(
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
            <select placeholder='Rarity' value={enteredRarity} onChange={rarityFilter}>
                <option key='' value=''>Rarity</option>
                {props.rarityList.map((rarity)=>(
                    <option key={rarity} value={rarity}>{rarity}</option>
                ))}
            </select>
            <select placeholder='Set' value={enteredSet} onChange={setFilter}>
                <option key='' value=''>Set</option>
                {props.setList.map((set)=>(
                    <option key={set.id} value={set.name}>{set.name}</option>
                ))}
            </select>
        </div>
      );
}

export default Filter;