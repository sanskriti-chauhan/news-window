// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0
//     };
//     document.title = `${this.capitalizeFirstLetter(
//       this.props.category
//     )} - NewsWindow`;
//   }
//   async compound() {
//     this.props.setProgress(10);
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eaaabc81c17a43f0942e95e801098284&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//      this.props.setProgress(30);
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//      this.props.setProgress(70);
//     console.log(parsedData);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     this.props.setProgress(100);
//   }

//   async componentDidMount() {
//     this.compound();
//   }
//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eaaabc81c17a43f0942e95e801098284&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults
//     });
//   };

//   render() {
//     return (
//       <>
//           <h2 className="my-4 text-center">
//             NewsWindow-Top {this.capitalizeFirstLetter(this.props.category)}{" "}
//             Headlines
//           </h2>
//           {this.state.loading && <Spinner/>}
//           <InfiniteScroll
//             dataLength={this.state.articles.length}
//             next={this.fetchMoreData}
//             hasMore={this.state.articles.length !== this.state.totalResults}
//             loader={!this.state.loading && <Spinner/>}
//           >
//             <div className="container">
//               <div className="row">
//                 {!this.state.loading &&
//                   this.state.articles.map((element) => {
//                     return (
//                       <div className="col-md-4" key={element.url}>
//                         <NewsItem
//                           title={element.title ? element.title : ""}
//                           description={
//                             element.description ? element.description : ""
//                           }
//                           imageUrl={element.urlToImage}
//                           newsUrl={element.url}
//                           author={element.author}
//                           date={element.publishedAt}
//                           source={element.source.name}
//                         />
//                       </div>
//                     );
//                   })}
//               </div>
//             </div>
//           </InfiniteScroll>
//       </>
//     );
//   }
// }

// export default News;


import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsWindow`;
  }

  async compound() {
    try {
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a36afb071a274457b39caa2a397ea7c4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.props.setProgress(30);
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log("Parsed data:", parsedData);
      if (parsedData.articles) {
        this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false,
        });
      } else {
        console.error("No articles found in API response");
      }
      this.props.setProgress(100);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async componentDidMount() {
    this.compound();
  }

  fetchMoreData = async () => {
    try {
      this.setState({ page: this.state.page + 1 });
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a36afb071a274457b39caa2a397ea7c4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log("Parsed data:", parsedData);
      if (parsedData.articles) {
        this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          totalResults: parsedData.totalResults,
        });
      } else {
        console.error("No articles found in API response");
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  render() {
    console.log("Rendering news items...");
    return (
      <>
        <h2 className="my-4 text-center">
          NewsWindow-Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={!this.state.loading && <Spinner />}
        >
          <div className="container">
            <div className="row">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;