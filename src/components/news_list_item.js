import React from 'react';
import { css } from 'glamor';

let news_item = css({
    padding: '20px',
    boxSizing: 'border-box',
    borderBottom: '1px solid grey',
    ':hover':{
        color:'grey'
    }
})

let item_back = css({
    background:'lightgrey'
})

const NewsItem = ({ item }) => {

    return (
        <div {...news_item} {...item_back}>
            <h3 className='fon'>{ item.title }</h3>
            <div className='fon'>
                { item.feed }
            </div>
        </div>
    )
}

export default NewsItem
