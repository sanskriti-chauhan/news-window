// // import { getByTitle } from "@testing-library/react";
// import React, { Component } from "react";

// export class NewsItem extends Component {
//   render() {
//      let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
//     return (
//       <>
//         <div className="card my-3">
//           <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%' ,zIndex:'1'}}>
//             {source}
//           </span>
//           <img
//             src={
//               !imageUrl
//                 ? "https://cdn.racingnews365.com/2023/_1800x945_crop_center-center_75_none/DBZ_5463.jpg?v=1690710656"
//                 : imageUrl
//             }
//             className="card-img-top"
//             alt="..."
//           />
//           <div className="card-body">
//             <h5 className="card-title">{title}...</h5>
//             <p className="card-text">{description}...</p>
//             <p className="card-text">
//               <small className="text-body-secondary">
//                 By {!author ? "unKnown" : author} on{" "}
//                 {new Date(date).toGMTString()}
//               </small>
//             </p>
//             <a
//               href={newsUrl}
//               target="_blank"
//               className="btn btn-sm  btn-warning"
//             >
//               Read More
//             </a>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default NewsItem;

import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <>
        <div className="card my-3">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://cdn.racingnews365.com/2023/_1800x945_crop_center-center_75_none/DBZ_5463.jpg?v=1690710656"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;