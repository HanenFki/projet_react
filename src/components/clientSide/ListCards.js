import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementArticleCard from './ElementArticleCard';
import LoginClient from '../authentificationClient/loginClient';
function ListCards() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/produits')
      .then((res) => {
        const data = res.data;
        setArticles(data);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

   return (
    <div className="container">
<ElementArticleCard articles={articles} isAuthenticated={LoginClient}  />
    </div>
  );
}

export default ListCards;
