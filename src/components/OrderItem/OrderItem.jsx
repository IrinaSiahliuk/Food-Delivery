import {React, useState} from "react";


import style from "./styles.module.css";

import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsBucket } from 'react-icons/bs';

function OrderItem({ image, title, description, price}){

    const [counter, setCounter] = useState (0);


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
                <div className={style.price}>{price} BYN</div>
                <div className={style.buttons}>
                    <button onClick={()=>setCounter(counter-1)} className={style.button}><AiOutlineMinus/></button>
                    <div className={style.counter}>{counter}</div>
                    <button onClick={()=>setCounter(counter+1)} className={style.button}><AiOutlinePlus/></button>
                </div>
                <div className={style.icon}><BsBucket/></div>
            </div>
        </div>
    )
}

export default OrderItem;