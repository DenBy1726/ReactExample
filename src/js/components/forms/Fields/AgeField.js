import React from 'react';

class AgeField extends React.Component{
    constructor(props){
        super(props);
        let isValid = this.validate(props.value);
        this.state = {value: props.value, valid: isValid};
        this.onChange = this.onChange.bind(this);
    }

    validate(val){
        return val>0 && val < 110;
    }

    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);
        this.setState({value: val, valid: isValid});
    }
    render() {
        let color = this.state.valid===true?"green":"red";
        return    <p>
            <label>Возраст:</label>
            <input defaultValue=""  type="text" value={this.state.value} className={"formInput"} onChange={this.onChange} placeholder="Введите возраст"
                    style={{borderColor:color}}/>
        </p>;
    }
}

export default AgeField;