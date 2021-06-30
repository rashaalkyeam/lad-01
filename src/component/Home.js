import React from 'react';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vote: 0
        };
    }
    votting = () => {
        this.setState({
            vote: this.state.vote + 1
        })
    }
render(){
    return(
        <div>
            <h2>{this.props.title}</h2>
            <img onClick={this.votting} src={this.props.image_url} alt={this.props.title}/>
            <p>{this.props.description}</p>
            <p>❤️ {this.state.vote}</p>
            
        </div>
    );
}
}
export default Home;