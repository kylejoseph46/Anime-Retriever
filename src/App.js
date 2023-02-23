import { useState, useRef } from 'react'
import './App.css'
import DarkMode from './DarkMode'
import blackImage from './photos/blackImage.jpg'
import whiteImage from './photos/whiteImage.png'


function App() {
  const [animeTitle, setanimeTitle] = useState([])
  const [animeImage, setanimeImage] = useState([])
  const [animeLink, setanimeLink] = useState([])
  const inputRef = useRef()
  let imageToUse
  if (localStorage.getItem("theme") === 'light')
  {
    imageToUse = whiteImage
  }
  else 
  {
    imageToUse = blackImage
  }

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
    <div className="App">
        <nav>
        <h1 className="titler">Anime Retriever</h1>
        <DarkMode />
        </nav>
      <div className="title-search">
        <form id="search-form" onSubmit={handleSearch}>
          <input ref={inputRef} type="text" placeholder="Search anime"></input>
          <button type="submit">🔍</button>
        </form>
      </div>
      <div className="anime">
        <div className="anime-card">
          <a href={animeLink[0]}>
            {<img src={animeImage.length === 0 ? imageToUse : animeImage[0]} alt="img1"></img>}
          </a>
          <a href={animeLink[0]} target="_blank" rel="noreferrer">
          <h6>{animeTitle[0]}</h6>
          </a>
        </div>
        <div className="anime-card">
          <a href={animeLink[1]}>
            {<img src={animeImage.length === 0 ? imageToUse : animeImage[1]} alt="img1"></img>}
          </a>
          <a href={animeLink[1]} target="_blank" rel="noreferrer">
          <h6>{animeTitle[1]}</h6>
          </a>
        </div>
        <div className="anime-card">
          <a href={animeLink[2]}>
            {<img src={animeImage.length === 0 ? imageToUse : animeImage[2]} alt="img1"></img>}
          </a>
          <a href={animeLink[2]} target="_blank" rel="noreferrer">
          <h6>{animeTitle[2]}</h6>
          </a>
        </div>
        <div className="anime-card">
          <a href={animeLink[3]}>
            {<img src={animeImage.length === 0 ? imageToUse : animeImage[3]} alt="img1"></img>}
          </a>
          <a href={animeLink[3]} target="_blank" rel="noreferrer">
          <h6>{animeTitle[3]}</h6>
          </a>
        </div>
        <div className="anime-card">
          <a href={animeLink[4]}>
            {<img src={animeImage.length === 0 ? imageToUse : animeImage[4]} alt="img1"></img>}
          </a>
          <a href={animeLink[4]} target="_blank" rel="noreferrer">
          <h6>{animeTitle[4]}</h6>
          </a>
        </div>
        <div className="anime-card">
          <a href={animeLink[5]}>
            {<img src={animeImage.length === 0 ? imageToUse : animeImage[5]} alt="img1"></img>}
          </a>
          <a href={animeLink[5]} target="_blank" rel="noreferrer">
          <h6>{animeTitle[5]}</h6>
          </a>
        </div>
        <div className="anime-card">
          <a href={animeLink[6]}>
            {<img src={animeImage.length === 0 ? imageToUse : animeImage[6]} alt="img1"></img>}
          </a>
          <a href={animeLink[6]} target="_blank" rel="noreferrer">
          <h6>{animeTitle[6]}</h6>
          </a>
        </div>
        <div className="anime-card">
          <a href={animeLink[7]}>
            {<img src={animeImage.length === 0 ? imageToUse : animeImage[7]} alt="img1"></img>}
          </a>
          <a href={animeLink[7]} target="_blank" rel="noreferrer">
          <h6>{animeTitle[7]}</h6>
          </a>
        </div>
        <div className="anime-card">
          <a href={animeLink[8]}>
            {<img src={animeImage.length === 0 ? imageToUse : animeImage[8]} alt="img1"></img>}
          </a>
          <a href={animeLink[8]} target="_blank" rel="noreferrer">
          <h6>{animeTitle[8]}</h6>
          </a>
        </div>
        <div className="anime-card">
          <a href={animeLink[9]}>
            {<img src={animeImage.length === 0 ? imageToUse : animeImage[9]} alt="img1"></img>}
          </a>
          <a href={animeLink[9]} target="_blank" rel="noreferrer">
          <h6>{animeTitle[9]}</h6>
          </a>
        </div>
        <div className="anime-card">
          <a href={animeLink[10]}>
            {<img src={animeImage.length === 0 ? imageToUse : animeImage[10]} alt="img1"></img>}
          </a>
          <a href={animeLink[10]} target="_blank" rel="noreferrer">
          <h6>{animeTitle[10]}</h6>
          </a>
        </div>
        <div className="anime-card">
          <a href={animeLink[11]}>
            {<img src={animeImage.length === 0 ? imageToUse : animeImage[11]} alt="img1"></img>}
          </a>
          <a href={animeLink[11]} target="_blank" rel="noreferrer">
          <h6>{animeTitle[11]}</h6>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;