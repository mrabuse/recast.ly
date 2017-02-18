class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videoList: [],
      currentVideo: exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.onSearchQuery('cute kittens');
  }

  onVideoEntryClick (video) {
    this.setState ({currentVideo: video});
  }

  onSearchQuery (query) {
    let context = this;

    let options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      context.setState({
        videoList: videos,
        currentVideo: videos[0]
      });
    });
  }

  render() {
    return (
      (<div>
        <Nav onSearchQuery={this.onSearchQuery.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} onVideoEntryClick={this.onVideoEntryClick.bind(this)}/>
        </div>
      </div>)
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
