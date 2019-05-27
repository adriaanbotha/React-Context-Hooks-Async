import React from 'react';
import { FETCHING_ARTICLES } from "../store/actionTypes"

const ArticlList = ({ articles, articlesStatus }) => {

  console.log('ArticlList - articles received -> ', articles);
  console.log('ArticlList - articlesStatus NOW -> ', articlesStatus);

  if (articlesStatus.type === FETCHING_ARTICLES) {
    return (
      <div>
       No Records found...maybe still fetching.......!!!
      </div>
    )
  }

  return (
    <div>
      {articles.map((item, index) => (
        <ArticleItem key={index} title={item.title} />
      ))}
    </div>
  )
};

const ArticleItem = ({ title }) => {
  return (
    <li>
      <label>
        {title}
      </label>
    </li>
  );
};

export default ArticlList;
