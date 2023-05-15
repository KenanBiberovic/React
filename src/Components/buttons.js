import React, { Component } from "react";

class Buttons extends Component {
  state = {
    hresult: 0,
    aresult: 0,
  };

  render() {
    return (
      <div className="container">
        <div className="btn-wrap">
          {/*  */}
          <button
            className="home-btn"
            onClick={() => {
              this.setState({ hresult: this.state.hresult + 1 });
            }}
          >
            Home
          </button>
          {/*  */}
          <button
            className="away-btn"
            onClick={() => {
              this.setState({ aresult: this.state.aresult + 1 });
            }}
          >
            Away
          </button>
          {/*  */}
          <button
            className="reset-btn"
            onClick={() => {
              this.setState({
                aresult: (this.state.aresult = 0),
                hresult: (this.state.hresult = 0),
              });
            }}
          >
            Reset
          </button>
          {/*  */}
        </div>
        <div className="result-wrap">
          <h1 className="home-result">{this.state.hresult}</h1>
          <h1 className="away-result">{this.state.aresult}</h1>
        </div>
      </div>
    );
  }
}
export default Buttons;
