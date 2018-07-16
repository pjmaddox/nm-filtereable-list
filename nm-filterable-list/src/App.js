import React, { Component } from 'react';
import './App.css';
import FilterableDisplayList from './components/FilterableDisplayList';
import CustomThrobber from './components/CustomThrobber';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      itemList: []
    };
  }

  componentDidMount() {
    this.getNewAgentSet();
  }

  getNewAgentSet() {
    this.setState({isLoading: true});

    fetch('/api/agents')
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json);
        this.setAgentList(json.results);
      });
  }

  setAgentList(newAgents) {
    this.setState({ itemList: newAgents, isLoading: false });
  }

  render() {
    let displayList = (this.state.isLoading? <CustomThrobber /> : <FilterableDisplayList displayList={this.state.itemList} />);
    return (
      <div className="App container">
        <header className="App-header row">
        <div className="col-sm-12">
          <h1 className="App-title">Field Agent Database</h1>
        </div>
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
