import React, { Component } from 'react'
import NewsCard from './NewsCard'
import PropTypes from 'prop-types'

export default class News extends Component {
    static propTypes = {
        newsCategory: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        let link = `https://newsapi.org/v2/top-headlines?country=In&category=${this.props.newsCategory}&apiKey=1bfc2ea07f1248848da751a7900592a8`;
        let data = await fetch(link);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles
        });
    }

    render() {
        return (
            <div className='text-center my-4'>
                <h3>{this.props.newsCategory} - These is {this.props.newsCategory} news</h3>
                <div className="container my-4">
                    <div className="row">
                        {
                            this.state.articles.map((element) => {
                                return <div className="col-md-4 my-2 " key={element.url}><NewsCard title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url} /></div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

