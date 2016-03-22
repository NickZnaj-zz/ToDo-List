class Api::TodosController < ApplicationController

  def create
    @todo = Todo.create!(todo_params)
    render json: @todo
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def update

  end

  def show

  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render json: @todo
  end

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end

end
