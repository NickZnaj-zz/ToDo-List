# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.destroy_all
todo1 = Todo.create!(title: "go to zhongguo", body: "but actually, don't. or go to taiwan.")
todo2 = Todo.create!(title: "Learn the Japanese", body: "call chris a buburu")
todo3 = Todo.create!(title: "Get date of release of assessment 6 practice kay", body: "This is VERY urgent!!!!!!!!!!!!!!!!!!!")
