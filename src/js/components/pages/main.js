import React from 'react';
class Main extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <div id="title"/>
                </header>
                <div id="main">
                    <div id="userform" className="contentDiv"> </div>
                    <div id="content1" className="contentDiv">
                        <div id="items"/>
                        <div id="switchButton"/>
                    </div>
                </div>
                <footer>
                    <p>Текущая дата: <span id="date"/></p>
                    <p>Текущее время: <span id="time"/></p>
                </footer>
            </div>
            );

    }
}

export default Main;