import type { NextPage } from 'next'
import Head from 'next/head'
import SearchInput from '../components/_SearchInput'
import { useState,  useEffect } from 'react'
import { SetStateAction } from 'hoist-non-react-statics/node_modules/@types/react'
import { IndexStyle } from '../styles/pages/Index'
import Pagination from '../components/_Pagination'

const LIMIT = 12;

interface Iinfo {
  data?: [
    id: number,
    attributes: string[]
  ]
  meta?: [
    count: any
  ]
}

const Home: NextPage = () => {

  const [info, setInfo] = useState<Iinfo>({})
  const [text, setText] = useState('');
  const [offset, setOffset] = useState(0);

  console.log(info)

  useEffect(() => {
    if (text) {
      setInfo({})
      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=${LIMIT}`)
      .then(res => res.json())
      .then(res =>setInfo(res))
    }
  }, [text]);
  
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <IndexStyle>
          <h1>Animes</h1>
          <SearchInput value={text} onChange={(search: SetStateAction<string>) => setText(search)}/>
          {text && !info.data && (
            <span> Carregando ... </span>
          )}
          {info.data && (
            <ul className='anime-list'>
              {info.data.map((anime: any) => (
                <li key={anime.id}>
                  <img src={anime.attributes.posterImage.small} alt={anime.attributes.titles.en}/>
                  {anime.attributes.canonicalTitle}
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
