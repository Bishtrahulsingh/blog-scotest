import { IArticle } from '@/types'
import React from 'react'
import Image from 'next/image';

interface IPropType{
    article:IArticle;
}
const Blogcardcolor = ({article}:IPropType) => {
  return (
    <div className='bg-gradient-to-r from-fuchsia-900 to-violet-900 rounded-md flex items-center justify-around h-64'>
       
            <span className='text-lg w-2/3 text-white p-6 font-bold after:content-{""} after:bg-primaryDark after:block after:w-16 after:h-1 after-rounded-md  after:my-2 cursor-pointer md:text-3xl '>
                {article.attributes.Title}
            </span>

           <Image alt='techimg' width={140} height={140} src="/imgtech.png">

        </Image>
    
    </div>
  )
}

export default Blogcardcolor