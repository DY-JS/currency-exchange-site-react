import React from 'react';
import './Calc.css';

class Calc extends React.Component{
  constructor(props){
    super(props);
  // let {rate}=this.props;
    this.state={
        result:0,
      // rate: this.props.rate  //почему-то через this.state.rate не работает, пробовал по-разному
    }
  }

// static getDirivedStateFromProps(props, state){  //почему-то через this.state.rate не работает
//     return {rate:props.rate};
// }

calcRate=(e)=>{
    e.preventDefault();
    let elements=e.target.elements; //macсив єл-тов формы
let amount=elements['count-currency'].value;//сумма валюты из input
//console.log(amount);
let typeCurrency=elements['type-currency'].value;//валюта из select  
console.log(typeCurrency, this.props.rate);
this.setState({result:(amount/this.props.rate[typeCurrency]).toFixed(2)}) //через this.props.rate норм работает
}                                    //колво / курс[typeCurrency]
                                  
render(){
  return (
    <div className='calculator'>
      <h3> Калькулятор обмена</h3>
        <div className="block">
            <div>Я хочу</div>
            <div>
                <form onSubmit={this.calcRate}>
                <input type="number" defaultValue="150" name='count-currency'/>
                <select name="type-currency" id="">
                {Object.keys(this.props.rate).map(cur=>
(<option className="" key={cur} value={cur}>{cur}</option> ))
}
                </select >
                <input type='submit' defaultValue='calc'/>
                </form>
            </div>

            <div>
                <h4>Результат</h4>
                <ul className="calc-res">
                    <li>USD {this.state.result}</li>
                </ul>
            </div>
        </div>
        </div>
 );
}
}

export default Calc;
