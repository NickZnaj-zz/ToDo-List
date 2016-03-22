class Todo < ActiveRecord::Base
  validates :title, :body, presence: true
  validates :done, inclusion: { in: [false, true] }
end
