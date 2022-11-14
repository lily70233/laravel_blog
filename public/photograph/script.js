const numberOfPhotos = 30;
let photos = [];
for (var i = 0; i < numberOfPhotos; i++) {
  photos.push(`https://source.unsplash.com/random?sig=${i}`);
}

class AlbumImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    const image = new Image();
    image.onload = () => {this.setState({ loaded: true });};
    image.src = this.props.image;
  }

  get style() {
    if (this.state.loaded) {
      return {
        backgroundImage: `url(${this.props.image})` };

    }
  }

  get classNames() {
    let classNames = 'image';
    if (this.state.loaded) {
      classNames += ' image--loaded';
    }
    return classNames;
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: this.classNames, style: this.style }));

  }}


const App = () => /*#__PURE__*/
React.createElement("div", { className: "album" }, /*#__PURE__*/
React.createElement("h1", null, "Vacation"), /*#__PURE__*/
React.createElement("h2", null, numberOfPhotos, " photos"), /*#__PURE__*/
React.createElement("div", { className: "photos" },
photos.map((image, i) => /*#__PURE__*/
React.createElement(AlbumImage, { key: i, image: image }))));





ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.querySelector('#app'));