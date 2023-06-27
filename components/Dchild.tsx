import { fetchCategories } from '@/http';
import { ICategory, ICollectionResponse } from '@/types';
import { AxiosResponse } from 'axios';
import qs from 'qs';
import React from 'react'
import Tabs from './Tabs';

const Dchild = async({pathname}) => {
    console.log("alksdjf"+pathname)
    const options = {
        populate:['author.avatar'], 
        sort: ['id:desc'],
        filters:{
            category:{
            slug:"pathname.slice(31,pathname.length)",
            },
        }
        }

    const queryString = qs.stringify(options);
    const {data:categories}:AxiosResponse<ICollectionResponse<ICategory[]>> =await fetchCategories();
    //const {data:articles}:AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString);
  return (
    <div>
        <Tabs categories={categories.data}/>
        {/* <ArticleList articles={articles.data}/> */}
    </div>
  )
}

export default Dchild