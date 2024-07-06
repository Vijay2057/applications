import {Component} from 'react';


class SampleComponent extends Component{
    state ={
        data : ""
    }

    myFunction = () =>{
     fetch(process.env.REACT_APP_API_URL+'/data')
    .then(response => response.json())
      .then(result => {
        console.log('API response:', result);
        this.setState({data: result["name"]})
        // Handle the response from the API
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors
      })
    }

    render(){
        return(
        <div>
            <button onClick={this.myFunction}> Click Me </button>
            <h1>{this.state.data}</h1>
        </div>
        )
    }
}

export default SampleComponent;