import React from 'react'
import { Separator } from '../../components/ui/separator';


interface SubSubTitle {
    key: number;
    subSubTitle: string;
    content?: string[];
  }
  
  interface SubTitle {
    key: number;
    subTitle: string;
    content?: string[];
    subSubtitles?: SubSubTitle[];
  }
  
  interface Title {
    key: number;
    title: string;
    content?: string[];
    subTitles?: SubTitle[];
  }
  
  interface Article {
    originLink: string;
    title: string;
    article: {
      resume: string;
      architecture: Title[];
    };
  }
  
  interface ArticleComponentProps {
    article: Article;
  }

  function renderSubSubTitle(subSubtitle: SubSubTitle) {
    return (
      <div className='mb-2' key={subSubtitle.key}>
        <h4 className='text-2xl'>{subSubtitle.subSubTitle}</h4>
        {subSubtitle.content?.map((contentItem, index) => (
          <p className='my-1' key={index}>{contentItem}</p>
        ))}
      </div>
    );
  }
  
  function renderSubTitle(subTitle: SubTitle) {
    return (
      <div className='mb-3' key={subTitle.key}>
        <h3 className='text-3xl'>{subTitle.subTitle}</h3>
        {subTitle.content?.map((contentItem, index) => (
          <p className='my-1' key={index}>{contentItem}</p>
        ))}
        {subTitle.subSubtitles?.map(renderSubSubTitle)}
      </div>
    );
  }
  
  function renderTitle(title: Title) {
    return (
      <div className='mb-4' key={title.key}>
        <h2 className='text-4xl'>{title.title}</h2>
        {title.content?.map((contentItem, index) => (
          <p className='my-1' key={index}>{contentItem}</p>
        ))}
        {title.subTitles?.map(renderSubTitle)}
        {/* Assuming Separator is a valid React component */}
        <Separator />
      </div>
    );
  }

const BlogArticle: React.FC<ArticleComponentProps> = ({ article }) => {

      return (
        <div className='mx-20'>
        {article.article.architecture?.map(renderTitle)}
      </div>
      );
    };
    
    

export default BlogArticle