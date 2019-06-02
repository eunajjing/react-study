import React, { Component } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
  padding-bottom: 3rem;
  width: 960px;
  margin: 0 auto;
`;

// const sampleArticle = {
//   title: "제목",
//   description: "내용",
//   url: "https://google.com",
//   urlToImage: "https://via.placeholder.com/160"
//   //   원하는 픽셀로 가져올 수 있음
// };

class NewsList extends Component {
  state = {
    articles: null,
    loading: false
  };

  loadData = async () => {
    try {
      this.setState({
        loading: true
      });

      const { category } = this.props;
      const query = category === "all" ? "" : `&category=${category}`;

      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0f951dba0c4c4582bb201f6cf607bbb8`
      );

      this.setState({
        articles: res.data.articles
      });

      this.setState({
        loading: false
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.category !== this.props.category) {
      this.loadData();
    }
  }

  render() {
    const { loading, articles } = this.state;

    if (loading || !articles) return <NewsListBlock>loading...</NewsListBlock>;

    return (
      <NewsListBlock>
        {articles.map(article => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
    );
  }
}

export default NewsList;
