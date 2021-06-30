import React from 'react';
import Calc from '../Calc/Calc';
import './Rate.css';

class Rate extends React.Component{
  constructor(props){
    super(props);

this.state={
    'date': '',
    'currencyRate': {}
}

this.currency=['GBP', 'JPY', 'EUR', 'AUD', 'CAD', 'PHP'];
this.getRate();  //в конструкторе вызвали ф-цию, поэтому данные из ф-ции 
}                //сразу отобразились на странице при загрузке

getRate=()=>{
fetch("https://fixer-fixer-currency-v1.p.rapidapi.com/latest?symbols=GBP%2CJPY%2CEUR%2CPHP%2CAUD%2CCAD&base=USD", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f6ad324afcmsh26e301b5053d351p1a77bfjsn1c552f4318f8",
		"x-rapidapi-host": "fixer-fixer-currency-v1.p.rapidapi.com"
	}
}).then(resp=>{return resp.json();})
  .then(data=>{
    //console.log(data);  
    this.setState({date:data.date});
    let rateList={}; //курсы
    this.currency.forEach(elem=>rateList[elem]=data.rates[elem]) //записали курсы из ответа
    this.setState({currencyRate:rateList}); //записали курсы в State
});
}

  render(){
  return (
  <div className="rate">
<h3> Курс валют на {this.state.date}</h3>
        <div className="flex-container">
{Object.keys(this.state.currencyRate).map(cur=>
(
<div className="block flex-item" key={cur}>
                <div className="currency-name">{cur}</div>
                <div className="currency-in">{this.state.currencyRate[cur].toFixed(2)}*</div>
                <p>* За 1 USD</p>
</div>
))}
    </div>
    <Calc rate={this.state.currencyRate}/>
</div>
 );
}
}

export default Rate;
