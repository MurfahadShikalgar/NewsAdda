import React, { Component } from 'react'

export default class NewsCard extends Component {
    render() {
        let {title, desc, imageUrl, newsUrl} = this.props;
        return (
            <div className="card bg-light h-100 ">
                <img src = {!imageUrl? "https://s.abcnews.com/images/US/mike-pence-file-ap-jef-230410_1681145678466_hpMain_16x9_992.jpg": imageUrl} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href={newsUrl} className="btn btn-sm btn-dark mt-auto ">Show More</a>
                </div>
            </div>
        )
    }
}

