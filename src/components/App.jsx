class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentVideo: this.props.data[0]
    };


  }

  onVideoClick(video) {
    console.log("I've been clicked", video);
    this.setState({
      currentVideo: video
    });
  }

  render() {

    console.log(this.props);

    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.props.data} onClick={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );

  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
