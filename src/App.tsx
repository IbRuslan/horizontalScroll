import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Scroll} from "./Scroll";

export type ItemType = {
    id: number,
    title: string,
    text: string
}

function App() {

    const items: ItemType[] = [
        {id: 1, title: 'Заголовок', text: 'Some text'},
        {id: 2, title: 'Заголовок', text: 'Some text'},
        {id: 3, title: 'Заголовок', text: 'Some text'},
        {id: 4, title: 'Заголовок', text: 'Some text'},
        {id: 5, title: 'Заголовок', text: 'Some text'},
        {id: 6, title: 'Заголовок', text: 'Some text'},
        {id: 7, title: 'Заголовок', text: 'Some text'},
    ]


    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>Beautiful horizontal scroll.</p>
            <div className={'container'}>
                <Scroll style={'items'}>
                        {items.map(item => {
                            return (
                                <div key={item.id} className={'item'}>
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div>
                            )
                        })}
                </Scroll>
            </div>
        </div>
    )
}

export default App;
