import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

const spanStyle = {
  padding: '20px',
  background: 'none',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: '100%',
  minHeight: '670px',
  height: '100%'
}

const slideImages = [
  {
    url: 'https://vhx.imgix.net/criterionchannelchartersu/assets/bd5a405b-f24d-43a6-a834-471076bb30d1.jpg?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280',
    caption: ''
  },
  {
    url: 'https://vhx.imgix.net/criterionchannelchartersu/assets/02d18272-1ade-478f-b908-d62201ebe38a.jpg?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280',
    caption: ''
  },
  {
    url: 'https://vhx.imgix.net/criterionchannelchartersu/assets/ff4dc209-4d32-42a9-a02e-1187cc23078d.jpg?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280',
    caption: ''
  },
  {
    url: 'https://vhx.imgix.net/criterionchannelchartersu/assets/a863edc3-9ab8-40dc-8a79-7ea8ce4312a6.jpg?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280',
    caption: ''
  },
];

const Slides = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    )
}

export default Slides;
