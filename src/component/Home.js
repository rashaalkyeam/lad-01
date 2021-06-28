import React from 'react';


class Home extends React.Component{
render(){
    return(
        <div>
            <h2>{this.props.title}</h2>
            <img src={this.props.imge_url} alt={this.props.title}/>
            <p>{this.props.descr}</p>
        </div>
    );
}

}

export default Home;