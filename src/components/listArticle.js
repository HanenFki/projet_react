import axios from 'axios';
import {useEffect,useState} from 'react';
import  ElementArticle from './elementArticle';
import Menu from '../components/menu';
function ListArticle() {
    const[articles,setArticles]=useState([]);
    useEffect(() => {
    axios.get("http://localhost:3001/produits")
    .then((response)=>setArticles(response.data));
        }, []);

  const deleteProd = async (id) => {
    if (!window.confirm("Are you sure you want to delete")) {
     return;
         }

        axios.delete('http://localhost:3001/produits/' + id)
.then(() => {
     console.log('successfully deleted!')
         setArticles(prevArticles => prevArticles.filter((article) => article.id !== id));
        }).catch((error) => {
            console.log(error)
    })
    }
    
    
     return ( 
     <>
    <Menu/>
     <h2>Liste des articles </h2>
     <ElementArticle articles={articles} deleteProd={deleteProd}/>
   </>
            
    );
    }
    
    export default ListArticle;
    