var React = require("react");
var TodoStore = require("../stores/todo_store");

var TodoListItem = React.createClass({

  handleDestroy: function(e) {
    TodoStore.destroy(this.props.todo.id);
  },

  render: function(){
    return (
      <div>
      <li>{this.props.todo.title}</li>
      <button onClick={this.handleDestroy} type="submit"> Delete!</button>
      </div>
    );
  }
});





module.exports = TodoListItem;
