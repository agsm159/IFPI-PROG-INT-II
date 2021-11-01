import type { NextPage } from 'next'
import Head from 'next/head'
import SearchInput from '../components/_SearchInput'
import { useState,  useEffect } from 'react'
import { SetStateAction } from 'hoist-non-react-statics/node_modules/@types/react'
import { IndexStyle } from '../styles/pages/Index'
import Pagination from '../components/_Pagination'
import qs from 'qs'
import { FiStar } from 'react-icons/fi'

const LIMIT = 16;

interface IInfo {
  data?: []
  meta?: {
    count: number
  }
}

interface IQuery {
  page?: {
    limit: number
    offset: number
  }
  filter?: {
    text: string
  }
}

const Home: NextPage = () => {

  const [info, setInfo] = useState<IInfo>({})
  const [text, setText] = useState('');
  const [offset, setOffset] = useState(0);

  console.log(info);
  

  useEffect(() => {
    //setInfo({})
    const query:IQuery = {
      page: {
        limit: LIMIT,
        offset, 
      }
    }

    if (text) {
      query.filter = {
        text,
      }
    }

    fetch(`https://kitsu.io/api/edge/anime?${qs.stringify(query)}`)
      .then(res => res.json())
      .then(res =>setInfo(res))
  }, [text,offset]);
  
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <IndexStyle>
          <h1>Search Animes</h1>
          <SearchInput value={text} onChange={(search: SetStateAction<string>) => setText(search)}/>
          {text && !info.data && (
            <span> Carregando ... </span>
          )}
          {info.data && (
            <ul className='anime-list'>
              {info.data.map((anime: any) => (
                <li key={anime.id}>
                  <p className="anime-item-title">Title: {anime.attributes.canonicalTitle}</p>
                  <div className="anime-item-average-rating">
                    <p>{anime.attributes.averageRating}</p>
                    <FiStar color="F9B208"/>
                  </div>
                  <img src={anime.attributes.posterImage.small} alt={anime.attributes.titles.en}/>
                  <p className="anime-item-synopsis">Synopsis: {anime.attributes.synopsis}</p>
                  <p className="anime-item-age-rating-guide">Age Rating Guide: {anime.attributes.ageRatingGuide}</p>
                  <p className="anime-item-episode-count">Episodes Count: {anime.attributes.episodeCount}</p>
                </li>
              ))}
            </ul>
          )}
        </IndexStyle>
        {info.meta && (
          <Pagination limit={LIMIT} 
          total={info.meta.count}
          offset={offset}
          setOffset={setOffset}
          />
        )}
     </main>
    </div>
  )
}

export default Home
