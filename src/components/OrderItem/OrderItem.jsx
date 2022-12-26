import {React, useContext, useState} from "react";

import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { GiEmptyMetalBucketHandle } from 'react-icons/gi';

import style from "components/OrderItem/styles.module.css";
import { Store } from "app";

function OrderItem({ image, title, description, price, onDelete}){
    const [store, setStore] = useContext(Store);
    const [counter, setCounter] = useState (1);

    return(
        <div className={style.wrapper}>
            <div className={style.product}>
                <div> 
                    <img className={style.img} src={image} alt="" />
                </div>
                <div className={style.text}>
                    <div className={style.title}>{title}</div>
                    <div className={style.description}>{description}</div>
                </div>
            </div>
            <div className={style.order}>
                <div className={style.price}>{price*counter} BYN</div>
                <div className={style.buttons}>
                    <button onClick={()=>{
                        if(counter>0){
                            setCounter(counter-1)
                        }
                    }} className={style.button}><AiOutlineMinus/></button>
                    <div className={style.counter}>{counter}</div>
                    <button onClick={()=>setCounter(counter+1)} className={style.button}><AiOutlinePlus/></button>
                </div>
                <div onClick={() => onDelete(title)} className={style.icon}><GiEmptyMetalBucketHandle/></div>
            </div>
        </div>
    )
}

export default OrderItem;