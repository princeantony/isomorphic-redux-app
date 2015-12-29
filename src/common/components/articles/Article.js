import React from 'react';
import ArticleForm from './ArticleForm.js';
import Loader from './Loader.js';
import ArticleList from './ArticleList.js';

export default class Article extends React.Component {
    // Constructor
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    /* This method is run when component just added to the real DOM*/
    componentDidMount() {
        this.props.articlesGet();
    }

    render() {
        const {isFetching,articles,error}=this.props;
        return (
            <div>
                {isFetching && <Loader/> }
                {!isFetching && <ArticleList articles={articles}/>}
            </div>
        )
    }
}