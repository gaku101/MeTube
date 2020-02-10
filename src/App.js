import React, { Component } from 'react';
import './App.css';
import Ysearch from 'youtube-api-search'
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import List from './components/Video/List/List'
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = 'AIzaSyCDisS4oPhZjXdprnaOFvh94LJpG2d7Z-8'

class App extends Component {

  state = { videos: [], 
            selectedVideo: null }

  componentDidMount(){
    Ysearch({ key: YOUTUBE_API_KEY, term: 'tutorial vue.js' }, (data) => {
      this.setState({videos: data, selectedVideo: data[1]});
    });
  }

  onVideoClickHandler = (video) => {
    this.setState({ selectedVideo:video })
  }

  onKeywordChangedHandler = (keyword) => {
    let newTerm = 'tutorial' + keyword;
    if(keyword === ''){
      newTerm = 'tutorial vue.js';
    }

    Ysearch({ key: YOUTUBE_API_KEY, term: newTerm}, (data) => {
      this.setState({ videos: data, selectedVideo: data[0]})
    });
  }

  render() {
    return (
      <div className="App">
        <Header onKeywordChanged={this.onKeywordChangedHandler}/>
        <Body>
          <Video video={this.state.selectedVideo} />
          <List videos={this.state.videos}
                onVideoClicked={this.onVideoClickHandler}            selectedVideo={this.state.selectedVideo}   
           />      
        </Body>
      </div>
    );
  }
}

export default App;
