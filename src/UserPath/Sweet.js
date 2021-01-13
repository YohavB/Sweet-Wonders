import React, { Component } from 'react';

export class Sweet extends Component {
    render() {
      
    let Data = this.props.Data;
    return (
      <section  >
        <div className="sweet">
          <div className="title">{Data.sweetMenu}</div>
          <div className="subTitle">{Data.icecreamName}</div>
          <div>
            {Data.icecream &&
              Data.icecream.map((item, index ) => {
                return (
                  <div key={index}>
                    <div className="product">
                      {item.product} &bull; {item.quantity}
                    </div>
                    {item.price}
                  </div>
                );
              })}
          </div>
          <div className="subTitle">{Data.sorbetName}</div>
          <div>
            {Data.sorbet &&
              Data.sorbet.map((item, index) => {
                return (
                  <div key={index}>
                  <div className="product" >
                    {item.product} &bull; {item.quantity}
                  </div>
                  {item.price}
                </div>
                );
              })}
          </div>
          <div className="subTitle">{Data.specialityName}</div>
          <div>
            {Data.speciality &&
              Data.speciality.map((item, index ) => {
                return (
                  <div key={index}>
                  <div className="product" >
                    {item.product} &bull; {item.quantity}
                  </div>
                  {item.price}
                </div>
                );
              })}
          </div>
          <div className="subTitle">{Data.eventName}</div>
          <div>
            {Data.event &&
              Data.event.map((item,index) => {
                return (
                  <div key={index}>
                  <div className="product" >
                    {item.product} &bull; {item.quantity}
                  </div>
                  {item.price}
                </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}            


export default Sweet;
