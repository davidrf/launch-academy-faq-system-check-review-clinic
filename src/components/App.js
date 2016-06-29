import React from 'react';
import Question from './Question'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosenQuestionId: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (id === this.state.chosenQuestionId) {

      this.setState({ chosenQuestionId: null })
    } else {

      this.setState({ chosenQuestionId: id })
    }
  }

  render() {
    let questions = this.props.data.map(question => {

      let onClick = () => {
        this.handleClick(question.id);
      }

      let active = false;

      if (question.id === this.state.chosenQuestionId) {
        active = true;
      }



      return (
        <Question
          key={question.id}
          onClick={onClick}
          active={active}
          question={question.question}
          answer={question.answer}
        />
      );
    });

    return (
      <div>
        <h1>We are here to help</h1>
        {questions}
      </div>
    );
  }
}
export default App;
