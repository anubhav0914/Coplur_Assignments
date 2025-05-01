import React, { Component, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Calculatore() {

    const [value, setValue] = useState('');

    return (
        <div className='main-container'>
            <div className='cal-container'>
                <div className='cal-input'>
                    <input type='text' className='cal-input-in' value={value} />
                </div>
                <div className='btns-row'>
                    <input type='button' onClick={e => setValue('')} value="AC"/>
                    <input type='button' onClick={e => setValue(value.slice(0, -1))} value="DE"/>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="."/>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="%"/>
                </div>
                <div className='btns-row'>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="√"></input>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="("></input>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value=")"></input>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="^"></input>
                </div>
                <div className='btns-row'>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="7"/>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="8"/>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="9"/>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="/"/>
                </div>
                <div className='btns-row'>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="4"/>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="5"/>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="6"/>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="*"/>
                </div>
                <div className='btns-row'>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="1"/>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="2"/>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="3"/>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="+"/>
                </div>
                <div className='btns-row'>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="0"></input>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="00"></input>
                    <input type='button' onClick={e => setValue(eval(value))} value="="></input>
                    <input type='button' onClick={e => setValue(value + e.target.value)} value="-"></input>
                </div>

            </div>
        </div>
    )
}

