import React, {
  useReducer, useEffect
} from 'react';

import useCombinedReducers from 'use-combined-reducers';
import DispatchContext from "./store/dispatch";
import ArticleList from "./conponents/ArticleList";
import { fetchAllArticles } from "./store/articlesSelectors";
import { articleReducer, articleStatusReducer } from "./store/articleReducer";
import { FETCHING_ARTICLES } from "./store/actionTypes";

const App = () => {
  const [state, dispatch] = useCombinedReducers({
    articles: useReducer(articleReducer, []),
    articlesStatus: useReducer(articleStatusReducer, FETCHING_ARTICLES)
  });

  const { articles, articlesStatus } = state;

  useEffect(() => {
    dispatch({ type: 'FETCHING_ARTICLES' });

    fetchAllArticles()
      .then((data) => {
        dispatch({ type: 'ADD_ARTICLES', data });
        dispatch({ type: 'FETCHED_ARTICLES' });
      })
      .catch((error) => {
        console.log('error ->', error);
      });
  }, []);   //This line is IMPORTANT since the [] makes sure it is also called only once !!!!


  return (
    <DispatchContext.Provider value={dispatch}>
      <ArticleList articles={articles} articlesStatus={articlesStatus}/>
    </DispatchContext.Provider>
  );
};

export default App;
