class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentVideo: this.props.data[0],
      value: '',
      videoData: exampleVideoData
    };


  }
  componentWillMount() {
    this.getYoutubeVideos('cats');
  }
  getYoutubeVideos(query) {
    this.props.search({key: window.YOUTUBE_API_KEY, query: query, max: 5}, (data) => {this.setState({videoData: data, currentVideo: data[0]})});
  }
  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  onSearch(value){
    this.setState({
      currentVideo: value
    });
    this.getYoutubeVideos(value);
  }
  render() {

    return (
      <div>
        <Nav search={this.props.search} onChange={this.onSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoData} onClick={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );

  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
console.log(window.videoData);