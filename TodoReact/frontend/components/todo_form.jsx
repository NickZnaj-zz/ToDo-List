var React = require("react");
var TodoStore = require("../stores/todo_store");

var TodoForm = React.createClass ({
  getInitialState: function () {
    return {title: "", body: ""};
  },

  updateTitle: function (e) {
    this.setState({title:e.target.value});
  },

  updateBody: function (e) {
    this.setState({body:e.target.value});
  },

  handleSubmit: function(e) {
    TodoStore.create(this.state);
  },

  render: function () {
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Enter Title</h2>
          <input type="text" value={this.state.title} onChange={this.updateTitle}/>
        <h2>Enter Body</h2>
          <input type="textarea" value={this.state.body} onChange={this.updateBody}/>
          <br></br>
          <button type="submit">Submit!!!</button>

      </form>

    );
  }
});

module.exports = TodoForm;
