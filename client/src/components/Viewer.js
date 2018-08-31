import React, { Component } from 'react';
import TweetList from './TweetList';
import Navigation from './Navigation';

const screenNames = {
    donald: "realDonaldTrump",
    hillary: "HillaryClinton"
}

class Viewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            twtList: [],
            active: "donald",
            loading: false,
        }
        this.fetchTweets = this.fetchTweets.bind(this)
        this.switchTweets = this.switchTweets.bind(this)
    }

    fetchTweets(user) {
        this.setState({ loading: true })
        fetch(`api/tweets/${user}`).then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                twtList: json,
                loading: false,
            })
        }).catch(err => {
            console.log(err);
        })
    }

    switchTweets(view) {
        if (view === this.state.active) return;
        this.fetchTweets(screenNames[view])
        this.setState({ active: view })
    }

    componentDidMount() {
        this.fetchTweets(screenNames[this.state.active])
    }

    render() {
        return (
            <div className="container pt-5 pb-5">
                <h3 className="text-center">Tweet Viewer</h3>
                <Navigation onButtonClick={this.switchTweets} active={this.state.active} />
                {
                    this.state.loading
                        ? <h6 className="text-muted">Loading ...</h6>
                        : <TweetList tweets={this.state.twtList} />
                }
            </div>
        );
    }
}

export default Viewer;