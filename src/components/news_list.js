import React from 'react';
import NewsItem from './news_list_item'
// only use class based components if you need a lot of power
// else use just use normal react

const NewsList = (props) => {   // props is the news from index.js

    const news = props.news.map((item, index) => ( // react uses index/key to keep track of elements that are being added
        <NewsItem item={item} key={index} />
    ))

    return (
        <>
            { props.children }
            { news }
        </>
    )//   () => () will return jsx instead of js
}

export default NewsList;
