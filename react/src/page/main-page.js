import React, { useState } from 'react'
import { MAP_NAME, MAP_MODE, MAP_PIC, MODE_PIC } from './map-pack'

export default () => {
    const [mapChoose, setMapChoose] = useState('')
    const [modeChoose, setModeChoose] = useState('')
    const [mapPic, setMapPic] = useState('')
    const [modePic, setModePic] = useState('')


    function handleRandomMap() {
        const array = new Uint32Array(7);
        let randomNumber = 0
        while (+randomNumber === 0) {
            randomNumber = (Math.floor(Math.floor(window.crypto.getRandomValues(array)[Math.floor((Math.random()*100)%7)]) % 7) + 1) || 2
        }
        randomMode(randomNumber)
    }


    function randomMode(mapKey) {
        const modeArr = [1]
        switch (mapKey) {
            case 2: {
                modeArr.push(2, 3, 4, 5)
                break
            }
            case 3: {
                modeArr.push(4)
                break
            }
            case 7: {
                modeArr.push(2, 5)
                break
            }
            default:
                break
        }
        setMapChoose(mapKey)
        const modeRndNum = modeArr[Math.floor(Math.random() * modeArr.length)]
        setModeChoose(modeRndNum)
        const mapUrl = require(`../pic/map/${MAP_PIC[mapKey]}`)
        const modeUrl = require(`../pic/mode/${MODE_PIC[modeRndNum]}`)
        setMapPic(mapUrl)
        setModePic(modeUrl)
    }




    return (
        <div className='container py-5'>
            <div className='border border-primary row justify-content-center'>
                <h1>Ready or Not?</h1>
                <buttom
                    className='btn btn-primary col-12 my-2'
                    onClick={handleRandomMap}
                >
                    Give me some PT
                </buttom>
                {mapChoose && <img src={mapPic} className='col-12 vh-25 w-auto' alt='mapPic'/>}
                {mapChoose && <h1>{MAP_NAME[mapChoose]}</h1>}
                {modeChoose && <img src={modePic} className='col-12 vh-25 w-auto' alt='modePic'/>}
                {modeChoose && <h1>{MAP_MODE[modeChoose]}</h1>}
            </div>
        </div>
    )
}