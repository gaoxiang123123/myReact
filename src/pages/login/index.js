import React from 'react';
import Server from '../../service/login';

class App extends React.Component {
    
    componentDidMount() {
        const res = Server.login();
        console.log(res);
    }
    render() {
        return (
            <div>111111</div>
        )
    }
}

export default App