import ReactDOM from 'react-dom';
import React from 'react';
import DateComponent from './components/Date.jsx';
import Time from './components/Time.jsx';
import SwitchableButton from './components/SwitchableButton.jsx';
import Hello from './components/Hello.jsx';
import ItemsList from './components/ItemList.jsx';

ReactDOM.render(
    <DateComponent/>,
    document.getElementById("date")
);

ReactDOM.render(
    <Time/>,
    document.getElementById("time")
);
ReactDOM.render(
    <SwitchableButton/>,
    document.getElementById("switchButton")
);
ReactDOM.render(
    <Hello/>,
    document.getElementById("title")
);

const propsValues = {
    title: "Список смартфонов",
    items: [
        "HTC U Ultra",
        "iPhone 7",
        "Google Pixel",
        "Hawei P9",
        "Meizu Pro 6",
        "Asus Zenfone 3"
    ]
};

ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("items")
);