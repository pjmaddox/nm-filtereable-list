import React, { Component } from 'react';
import './App.css';
import FilterableDisplayList from './components/FilterableDisplayList';
import CustomThrobber from './components/CustomThrobber';
import _ from "lodash";
import DoSomethingButton from "./components/DoSomethingButton.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      itemList: [],
      inError: false
    };
  }

  componentDidMount() {
    this.getNewAgentSet();
  }

  getNewAgentSet() {
    this.setState({isLoading: true, inError: false});

    fetch('/api/agents')
      .then(res => {
        return res.json();
      })
      .then(json => {
        if (json.statusCode != 200) {
          this.setState({inError: true});
        } else {
          this.setAgentList(json.results);
        }
      });
  }

  setAgentList(newAgents) {
    let sortedAgents = _.orderBy(newAgents, ['codeName'], ['asc']);
    this.setState({ itemList: sortedAgents, isLoading: false });
  }

  render() {
    let displayListOrLoader = (this.state.isLoading? <CustomThrobber /> : <FilterableDisplayList displayList={this.state.itemList} />);
    let moreAgentsButton = ((this.state.isLoading || this.state.inError)? "" : <DoSomethingButton buttonText={"Find More Agents"} somethingToDo={this.getNewAgentSet.bind(this)}/>);
    if (this.state.inError) {
      displayListOrLoader = "There was an error with the WordsAPI. It is most likely down at the moment, please try again later. You can check the status of the WordsAPI website. It is CloudFlare-backed, so the site should be up if the API isn't."
    }
    return (
      <div className="App container">
        <header className="App-header row">
        <div className="col-sm-12">
          <h1 className="App-title">Field Agent Database</h1>
        </div>
        </header>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-12">
                {displayListOrLoader}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 moreAgentsButtonContainer">
                {moreAgentsButton}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
