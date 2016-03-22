 _todos = {};

 _callbacks = [];

TodoStore = {

  changed: function (){
    _callbacks.forEach ( function(handler) {
      handler();
    });
  },

  addChangedHandler: function(handler) {
    _callbacks.push(handler);
  },

  removeChangedHandler: function(handler) {
    for (var i = 0; i < _callbacks.length; i++) {
      if (_callbacks[i] === handler) {
        _callbacks.splice(i, 1);
        return;
      }
    }
  },

  all: function() {
    var todos = [];

    for (var id in _todos) {
      if (_todos.hasOwnProperty(id)) {
        todos.push(_todos[id]);
      }
    }
    return todos;
  },

  fetch: function() {
    $.ajax({
      type: "GET",
      url: "/api/todos",
      dataType: "json",
      success: function (todos) {
        _todos = {};
        todos.forEach(function (todo) {
          _todos[todo.id] = todo;
        });
        TodoStore.changed();
      },
      error: function () {
        console.log("TodoStore#fetch not good.");
      }
    });
  },

  create: function(todo) {
    $.ajax({
      type:"POST",
      url:"api/todos",
      dataType:"json",
      data: {todo: todo},
      success: function (todo) {
        _todos[todo.id] = todo;
        TodoStore.changed();
      },
      error: function () {
        console.log("Post request failed");
      }
    });
  },

  destroy: function (id) {
    if (_todos[id] !== undefined) {
      $.ajax({
        type: "DELETE",
        url: "api/todos/" + id ,
        dataType: "json",

        success: function (todo) {
          delete _todos[todo.id];
          TodoStore.changed();
        },
        error: function () {
          console.log("Could not delete this todo!");
        }
      });
    }
  },

  toggleDone: function (id) {
    if (_todos[id] !== undefined) {
      $.ajax({
        type: "PATCH",
        url: "api/todos/" + id,
        dataType: "json",
        success: function (id) {
          var patchedTodoVal = _todos[id].done;
          if (patchedTodoVal) patchedTodoVal = false;
          else  patchedTodoVal = true;

          _todos[id].done = patchedTodoVal;
          TodoStore.changed();
        },
        error: function () {
          console.log("Could not toggle this todo!");
        }
      });
    }
  }

};

module.exports = TodoStore;
