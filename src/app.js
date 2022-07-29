import React from "react"
import ReactDOM from "react-dom"
import Die from "./components/die.js"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import { faListCheck } from "@fortawesome/free-solid-svg-icons"
import Dot from "./components/dot.js"




export default function App() {
    //allow hold a die and if isheld true, change background color (x)
    //click on button will toggle hold(x)
    //when it's onhold, roll dice will not roll them (x)
    //set a winning coniddtion which is all on hold and all match - hint use array.every(x)
    //show confetti when win and hide otherwise (x) > use
    //reset game after winning (x)
    //confetti resize (x)

    /*extra credit
    1. make dots
    a. make a dot component and inport it
    b. show doct number matching cunt
    c.format dots
    2 track time and times
    3. localstorage save
    */

    const [dice, setDice]= React.useState(rollNewDice())
    const [tenzies, setTenzies]=React.useState(false)
    function rollNewDice(){
        //generate an array of 10 random numbers 1-6
        const newDice=[]
        for (let i=0; i<10; i++){
            newDice.push({
                value: Math.ceil(Math.random()*6),
                id: nanoid(),
                isHeld: false
            })
        }
        return newDice
    }
    function reSet(){
        setDice(rollNewDice())
        setTenzies(false)
    }
    function rollDice(){
        // setDice(rollNewDice())
        //only genereate die for those not on hold
        const newDice=[]
        for (let i=0; i<10; i++){
            if (!dice[i].isHeld) {
                newDice.push({
                    value: Math.ceil(Math.random()*6),
                    id: nanoid(),
                    isHeld: false
                })
            }
            else {
                newDice.push(dice[i])
            }
            
        }
        setDice(newDice) 
    }
    function toggleHeld(id){
        //setDice state change
        setDice(prevDice=>{
            const newDice=[];
            for (let i=0; i<prevDice.length; i++){
                if (prevDice[i].id===id) {
                    newDice.push({
                        ...prevDice[i],
                        isHeld: !prevDice[i].isHeld
                    })
                }
                else {
                    newDice.push(prevDice[i])
                }
            }
            return newDice
        })
    }

    React.useEffect(()=>{
        const allHeld=dice.every((die)=>die.isHeld)
        const allMatch=dice.every((die)=>die.value===dice[0].value)
        if (allHeld&&allMatch) {
            setTenzies(true)
        }
    }, [dice])

    const diceElements = dice.map(die=>{
        return (
            <Die
                key={nanoid()}
                value={die.value}
                id={die.id}
                isHeld={die.isHeld}
                onClick={()=>toggleHeld(die.id)}    
            />
        )
    })
    return (
        
        <main className="main">
            {tenzies&&
            <Confetti 
                width="360px" 
            />}
            
            <div className="innerMain">
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="dice" >
                    {diceElements}
                </div>
                
                <button className="roll" onClick={!tenzies?rollDice:reSet}>{!tenzies?"Roll":"New Game"}</button>
            </div>
        </main>
    )
}