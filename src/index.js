import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timePosted="Today at 2:30pm"
        text="Hey, what's up?"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Mike"
        timePosted="Today at 2:38pm"
        text="nothing really."
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Anne"
        timePosted="Today at 2:45pm"
        text="not much, hbu?"
        avatar={faker.image.avatar()}
      />
      <ApprovalCard />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
