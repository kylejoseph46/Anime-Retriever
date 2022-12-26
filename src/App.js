import { useState, useRef } from 'react'
import './App.css'


function App() {
  const [animeTitle, setanimeTitle] = useState([])
  const [animeImage, setanimeImage] = useState([])
  const [animeLink, setanimeLink] = useState([])
  const inputRef = useRef()


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };


  const searchAnime = async (animeTitle) => {
    fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=14&search=${animeTitle}&sortBy=ranking&sortOrder=asc`, options)
      .then(response => response.json())
      .then(response => {
        setanimeTitle([])
        setanimeImage([])
        setanimeLink([])


        response.data.map(anime => {
          console.log(anime.title)
          console.log(anime.image)
          setanimeTitle((prevanimeTitle) => (
            [...prevanimeTitle, anime.title]
          ))
          setanimeImage((prevanimeImage) => (
            [...prevanimeImage, anime.image]
          ))
          setanimeLink((prevanimeLink) => (
            [...prevanimeLink, anime.link]
          ))
        })
      })
    return 1
  }


  const handleSearch = (e) => {
    e.preventDefault()
    let animeTitle = inputRef.current.value
    animeTitle = animeTitle.charAt(0).toUpperCase() + animeTitle.slice(1)
    searchAnime(animeTitle)
  }


  return (
    <>
      <div className="title-search">
        <h1>Anime Lister</h1>
        <form id="search-form" onSubmit={handleSearch}>
          <input ref={inputRef} type="text" placeholder="Search anime"></input>
          <button type="submit">🔍</button>
        </form>
      </div>
      <div className="anime">
        <div className="anime-card">
          <a href={animeLink[0]}>
            {<img src={animeImage[0]} alt="img1"></img>}
          </a>
          <h6>{animeTitle[0]}</h6>
        </div>
        <div className="anime-card">
          <a href={animeLink[1]}>
            {<img src={animeImage[1]} alt="img2"></img>}
          </a>
          <h6>{animeTitle[1]}</h6>
        </div>
        <div className="anime-card">
          <a href={animeLink[2]}>
            {<img src={animeImage[2]} alt="img3"></img>}
          </a>
          <h6>{animeTitle[2]}</h6>
        </div>
        <div className="anime-card">
          <a href={animeLink[3]}>
            {<img src={animeImage[3]} alt="img4"></img>}
          </a>
          <h6>{animeTitle[3]}</h6>
        </div>
        <div className="anime-card">
          <a href={animeLink[4]}>
            {<img src={animeImage[4]} alt="img5"></img>}
          </a>
          <h6>{animeTitle[4]}</h6>
        </div>
        <div className="anime-card">
          <a href={animeLink[5]}>
            {<img src={animeImage[5]} alt="img6"></img>}
          </a>
          <h6>{animeTitle[5]}</h6>
        </div>
        <div className="anime-card">
          <a href={animeLink[6]}>
            {<img src={animeImage[6]} alt="img7"></img>}
          </a>
          <h6>{animeTitle[6]}</h6>
        </div>
        <div className="anime-card">
          <a href={animeLink[7]}>
            {<img src={animeImage[7]} alt="img8"></img>}
          </a>
          <h6>{animeTitle[7]}</h6>
        </div>
        <div className="anime-card">
          <a href={animeLink[8]}>
            {<img src={animeImage[8]} alt="img9"></img>}
          </a>
          <h6>{animeTitle[8]}</h6>
        </div>
        <div className="anime-card">
          <a href={animeLink[9]}>
            {<img src={animeImage[9]} alt="img10"></img>}
          </a>
          <h6>{animeTitle[9]}</h6>
        </div>
        <div className="anime-card">
          <a href={animeLink[10]}>
            {<img src={animeImage[10]} alt="img11"></img>}
          </a>
          <h6>{animeTitle[10]}</h6>
        </div>
        <div className="anime-card">
          <a href={animeLink[11]}>
            {<img src={animeImage[11]} alt="img12"></img>}
          </a>
          <h6>{animeTitle[11]}</h6>
        </div>
      </div>
    </>
  );
}

export default App;