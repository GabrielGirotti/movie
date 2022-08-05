//import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';







function App() {
  return (
    <div className="app">
      
      <Navbar />

      <Banner  />
      <div id='originals'></div>
      <br></br>
      <br></br>
      <br></br>
      <Row title="Originals" fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow
      />
      <div id='trending'></div>
      <br></br>
      <br></br>
      <br></br>
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
      <div id='toprate'></div>
      <br></br>
      <br></br>
      <br></br>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <br></br>
      <br></br>
      <br></br>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
