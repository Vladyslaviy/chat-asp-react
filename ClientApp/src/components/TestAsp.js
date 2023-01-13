import React, { Component } from 'react';

export class TestAsp extends Component {
    static displayName = TestAsp.name;

  constructor(props) {
    super(props);
    this.state = { data: "s", loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

 
    static render_(data) {
        return (
            <div>
                <h1>DATA IS: {data}</h1>
            </div>
        );
    }
  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : TestAsp.render_(this.state.data);

    return (
      <div>
        <h1 id="tabelLabel" >Test</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

    async populateWeatherData() {
        
    const response = await fetch('User');
    const data_ = response.text;
    this.setState({ data: data_, loading: false });
  }
}
