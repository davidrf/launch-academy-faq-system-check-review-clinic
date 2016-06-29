import React from 'react';

let Question = props => {

  let answer;
  if (props.active) {
    answer = <h2>{props.answer}</h2>
  }


  return (
    <div onClick={props.onClick}>
      <h1>{props.question}</h1>
      {answer}
    </div>
  );
};

export default Question;
