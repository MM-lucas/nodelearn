import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/news_list';
import './styles/styles.css';
import Footer from './components/footer';
import JSON from './db.json';


class App extends Component {

    constructor(){
        super()
        this.state = {
            news:JSON,
            footerText:"This is the footer",
            filtered:[]
        }
    }


    getKeywords = (event) => {
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        })

        this.setState({
            filtered
        })
    }


    render(){

        const state = this.state

        return (
            <>
                <Header getKeywords={ this.getKeywords }/>

                <NewsList news={state.filtered.length === 0 ? state.news:state.filtered}>
                    <h1 className='fon'>This is the News</h1>
                </NewsList>

                <Footer
                    footerText={state.footerText}/>
            </>
        )
    }
}


// const App = () => {
//     return (
//         <>
//           <Header/>
//         </>
//     )  //this is jsx that comes from React, not html
// // return React.createElement('h1', {className:'title'}, 'Hello Porld')
// }

ReactDOM.render(<App/>, document.getElementById('root'))
