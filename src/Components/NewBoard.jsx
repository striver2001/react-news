import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem';

const NewBoard = ({category}) => {

   
    const[articles,setArticles]= useState([]);

    useEffect(()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=3bda9b466f7348d2814027a0e40122dd`;
        // let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.API_KEY}`;


        fetch(url).then(response=>response.json()).then(data=> {setArticles(data.articles)
            console.log(data);
        }).catch(error => console.error('Error fetching data:', error));
    },[category]);


  return (
    <div className='  '>
      <h2 className=' text-center'>Latest <span className='badge bg-danger '>News</span></h2>
      {
        articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description ={news.description} src={news.urlToImage} url={news.url}/>
        })
      }
    </div>
  )
}

export default NewBoard
