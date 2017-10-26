import React from 'react';
class DateComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <b>{new Date().toLocaleDateString()}</b>;
    }
}
export default DateComponent;
