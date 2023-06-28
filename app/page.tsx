'use client'
import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";
import Tabs from "@/components/Tabs";
import { fetchArticles, fetchCategories } from "@/http";
import { IArticle, ICategory, ICollectionResponse, IQueryOptions } from "@/types";
import { AxiosResponse } from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "qs"; 

 
const Home = async () => {    
  const router = useRouter();   
  const searchparam = useSearchParams().get('search')|| ""; 
  let query:number = Number(useSearchParams().get('page'));
  const options:Partial<IQueryOptions> = {
    populate : ['author.avatar'],
    sort: ['id:desc'],
    pagination:{
        page:query?query:1,
        pageSize:8
    },
  }

  if(searchparam){
    options.filters={
        Title:{
            $containsi:searchparam,
        }
    } 
  }
  const queryString = qs.stringify(options)

  //CATEGORIES FETCHING//
  const {data:categories}:AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories(); 
  
  //ARTICLES FETCHING//
  const {data:articles}:AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString);

  //PAGINATION DETAILS//
  const page = articles.meta.pagination.page;
  const pagecount = articles.meta.pagination.pageCount;

  return (
        <div className="md:pb-5"> 
            <Head>  
                <title>Homepage</title>
                <meta
                    name="description" 
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" /> 
            </Head>
            <Tabs categories={categories.data}/>
            <ArticleList articles={articles.data}/>
            <Pagination page={page} pagecount={pagecount} redirectUrl={"/"} searchparam={searchparam}/>
        </div>
    );
}; 

export default Home;