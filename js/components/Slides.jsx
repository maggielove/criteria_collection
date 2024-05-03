import { Slide } from 'react-slideshow-image';

const divStyle = {
  // display: 'flex',
  // padding: '20px',
  // alignItems: 'center',
  // justifyContent: 'center',
  // backgroundSize: '100%',
  // minHeight: '670px',
  // height: '100%'
}

const slideImages = [
  {
    url: 'https://vhx.imgix.net/criterionchannelchartersu/assets/bd5a405b-f24d-43a6-a834-471076bb30d1.jpg?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280',
    alt: `One Night: featuring Collateral, Assault on Precinct 13, After Hours,
    Before Sunrise, Mikey and Nicky, and more.`
  },
  {
    url: 'https://vhx.imgix.net/criterionchannelchartersu/assets/02d18272-1ade-478f-b908-d62201ebe38a.jpg?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280',
    alt: `1950 Peak Noir: featuring Sunset Boulevard, Gun Crazy, In a Lonely Place,
    The Asphalt Jungle, Night and the City, and more. With an introduction by Imogen
    Sara Smith and Eddie Muller.`
  },
  {
    url: 'https://vhx.imgix.net/criterionchannelchartersu/assets/ff4dc209-4d32-42a9-a02e-1187cc23078d.jpg?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280',
    alt: `Celebrate Black History: Featuring Daughters of the Dust, After Sherman,
    Tongues Untied, Black Panthers`
  },
  {
    url: 'https://vhx.imgix.net/criterionchannelchartersu/assets/a863edc3-9ab8-40dc-8a79-7ea8ce4312a6.jpg?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280',
    alt: `Living the Part: featuring performances by Robert De Niro, Meryl Streep,
    Joaquin Phoenix, Cate Blanchett, Jefrrey Wright, and more. With an introduction
    by Isaac Butler.`
  },
];

const Slides = () => {
    return (
      <div className="slide-container">
        <Slide autoplay={false} indicators={true}>
         {slideImages.map((slideImage, index)=> (
            <div key={index} style={{ ...divStyle }}>
              <img src={slideImage.url} alt={slideImage.alt} />
            </div>
          ))}
        </Slide>
      </div>
    )
}

export default Slides;
