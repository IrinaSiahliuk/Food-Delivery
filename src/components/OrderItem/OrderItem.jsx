import {React, useContext, useState} from "react";

import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { GiEmptyMetalBucketHandle } from 'react-icons/gi';

import style from "components/OrderItem/styles.module.css";
import { Store } from "app";

function OrderItem({ image, title, description, price, count, onDelete}){
    const [store, setStore] = useContext(Store);

    function changeCount() {
        setStore((pre) => ({
            ...pre,
            user: { ...pre.user, shoppingCart: store.user.shoppingCart.map((item) => {
                if(item.title === title){
                    return {
                        ...item,
                        count: count
                    }
                }
                else {
                    return item
                }
            })},
        }));
    }

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
                <div className={style.price}>{price*count} BYN</div>
                <div className={style.buttons}>
                    <button onClick={()=>{
                        if(count>0){
                            count -= 1;
                            changeCount();
                        }
                    }} className={style.button}><AiOutlineMinus/></button>
                    <div className={style.counter}>{count}</div>
                    <button onClick={()=>{
                        count += 1;
                        changeCount();
                    }} className={style.button}><AiOutlinePlus/></button>
                </div>
                <div onClick={() => onDelete(title)} className={style.icon}><GiEmptyMetalBucketHandle/></div>
            </div>
        </div>
    )
}

export default OrderItem;