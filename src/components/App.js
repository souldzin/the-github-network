import React from "react";

function searchMessage(search) {
    return search ? `Searching for "${search}"...` : "";
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }

    componentDidMount() {
        this.refs.search.focus();
    }

    onSearchChange(newSearch) {
        this.setState({
            search: newSearch
        });
    }

    render() {
        const {search} = this.state;

        return (
            <div className="app-container">
                <div className="big-search">
                    <input type="text" 
                        ref="search"
                        value={search} 
                        onChange={(x) => this.onSearchChange(x.target.value)} />
                </div>
                <div className="content">
                    <div>
                        {searchMessage(search)}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;