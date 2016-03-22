var React = require("react");
var TodoStore = require("../stores/todo_store");
var TodoListItem = require("./todo_list_item");
var TodoForm = require("./todo_form");


var TodoList = React.createClass({
  getInitialState: function () {
    return {todos: TodoStore.all()};
  },

  componentDidMount: function () {
    TodoStore.addChangedHandler(this.setStateFromStore);
    TodoStore.fetch();
  },

  setStateFromStore: function () {
    this.setState({todos: TodoStore.all()});
  },

  render: function () {
    var self = this;

    var allTheTodos = this.state.todos.map( function(todo, index){
       return <TodoListItem key={index} todo={todo}/>;
    });

    if (this.state.todos.length === 0) {
      allTheTodos = <p> Fetching all the todos for you...!</p>;
    }

    return (
      <div>
        <h2>Meet the todos!</h2>
        {allTheTodos}
        <TodoForm/>
      </div>
    );
  }
});


module.exports = TodoList;
