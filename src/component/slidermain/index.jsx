import React from 'react';
import styled from 'styled-components';
import background from '../images/pattern-bg.svg';
import iconNext from '../images/icon-next.svg';
import iconPrevious from '../images/icon-prev.svg';
import { useState,useEffect } from 'react';
// data
import datas from '../../data';



export const SliderMain = ()=>{
    console.log(datas)

    // useState
    const [data, setData] = useState(0);
    const {image, name , title, quote}= datas[data];

     // recyle
     const roller = (next)=>{
        if(next < 0){
            return datas.length-1;
        }
        if(datas.length-1 < next){
            return 0
        }
        
            return next;
    }



 
    const add = ()=>{
        setData((data)=>{
            let addAndSubNum = data +1
            return roller(addAndSubNum);
        })
    }
    const sub = ()=>{
        setData((data)=>{
            let addAndSubNum = data -1
            return roller(addAndSubNum)
        })
    }

   
    // guess function 
    const dice = ()=>{
        let guess =  Math.floor(Math.random() * datas.length)
        // console.log( Math.floor(Math.random() * datas.length));// using math.radom to target a random data by mutilplying by datas.length{array}
        if (guess === data){
            guess = data + 1;
            
        }
        setData(roller(guess));  // call the setDATa function with the roller function to avoid repeation of guess number simltenously 
    }


    return(
        <>
            <section>
                <MAIN>
                    <TOPIMAGE>
                        <IMG src={image}></IMG>
                        <ICONCONTAINER>
                            <BUTTON  >
                                <ICON onClick={sub} src={iconPrevious}></ICON></BUTTON>
                            <BUTTON onClick={add}><ICON src={iconNext}></ICON></BUTTON>
                        </ICONCONTAINER>
                        <RANDOMBUTTON onClick={dice}>
                            GUESS!
                        </RANDOMBUTTON>
                        <BACKGROUNDIMAGE src={background}></BACKGROUNDIMAGE>
                    </TOPIMAGE>
                    <NAMEQUOTECONTAINE>
                        <NAMETITLECONTAINER>
                                <NAME>{name}</NAME>
                                <ROLE>{title}</ROLE>
                        </NAMETITLECONTAINER>
                    <P>
                        {quote}
                    </P>  
                    </NAMEQUOTECONTAINE>
                </MAIN>
            </section>
        </>
    )
}





//   style section strart.....
export const MAIN = styled.div`
    width: 90%;
    margin: 1.2em;
    transition: all 0.4s ease-out;

    @media(min-width: 449px){
        width: 95%;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        margin-top: 7em;
        padding: 1em;
        padding-right: 2em;
        position: relative;
        right: 5%;
    }

`

export const TOPIMAGE = styled.div`
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-out;

    @media(min-width: 449px){
        width: 90%;
    }
`

export const IMG = styled.img`
    width: 70%;
    z-index: 2;
    position: absolute;

    @media(min-width: 449px){
    }
`

export const BACKGROUNDIMAGE = styled.img`
    z-index: 1;
    width: 320px;
    position: relative;

    @media(min-width: 449px){
        width: 500px;
        position: relative;
        top: 80px;
        left: 20px;
    }
`


// button icon...
export const ICONCONTAINER = styled.div`
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    background: #fff;
    width: 80px;
    border-radius: 20px;
    padding: .3em;
    bottom: 10px;
    transition: all 0.4s ease-out;

    @media(min-width: 449px){
        width: 100px;
        border-radius: 20px;
        padding: .3em;
        padding: 1em;
        margin-bottom: .2em;
    }
    
`

export const RANDOMBUTTON = styled.button`
    border: none;
    outline: none;
    background: #02c2a8;
    color: white;
    padding: .5em;
    border-radius: 12px;
    position: relative;
    top: 70px;
    margin-left: 2em;
    transition: all 0.4s ease-out;

    &:hover{
        cursor: pointer;
        transform: rotate(45deg);
        transition: all 0.4s ease-out;
    }

    @media(min-width: 449px){
        z-index: 4;
        margin-right: 2em;
        top: 130px;
    }
    
`

export const BUTTON = styled.button`
    border: none;
    background: #fff;
`

export const ICON = styled.img`
    color: #0369ee;
    width: 10px;
    border: none;
`

// quote name and role/title

export const NAMEQUOTECONTAINE = styled.div`
    margin-top: 2em;
    width: 100%;
    position: relative;
    margin-right: 5em;
    transition: all 0.4s ease-out;


    @media(min-width: 449px){
        z-index: 4;
        position: relative;
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
    }
`

export const P = styled.p`
    width: 90%;
    margin: 2em;
    display: block;
    font-size: 1rem;
    letter-spacing: .5px;
    text-align: center;
    color: #77777c;
    font-weight: 500;
    transition: all 0.4s ease-out;

    @media(min-width: 449px){
        font-size: 1.4rem;
        width: 100%;
        letter-spacing: .8px;
        margin-left: 10em;
    }
`

export const NAMETITLECONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-align: center;
    transition: all 0.4s ease-out;
    @media(min-width: 449px){
        margin-left: 18em;
        width: 100%;
    }
`
export const NAME = styled.h3`
    width: 60%;
    font-weight: 600;
    font-size: 1.3rem;
    transition: all 0.4s ease-out;
    @media(min-width: 449px){
        font-size: 1.5rem;
    }
`

export const ROLE =styled.h3`
    font-size: 1rem;
    transition: all 0.4s ease-out;
    color: hsl(240, 18%, 77%);
`

