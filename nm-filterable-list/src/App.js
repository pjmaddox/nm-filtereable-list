import React, { Component } from 'react';
import './App.css';
import FilterableDisplayList from './components/FilterableDisplayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      itemList: []
    };
  }
  render() {
    let displayList = (this.state.isLoading? "" : <FilterableDisplayList displayList={this.state.itemList} />);
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">MI6 Known Spys</h1>
        </header>
        <div className="row">
          <div className="col-sm-12">
            {displayList}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
