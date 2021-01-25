class Product < ApplicationRecord
  belongs_to :user
  validates :title, presence: true, length: { maximum: 70 }
  validates :description, presence: true, length: { maximum: 2000 }
  validates :country, presence: true, length: { maximum: 200 }
  validates :city, presence: true, length: { maximum: 200 }
  validates :type_art, presence: true
  validates :category, presence: true
  validates :condition, presence: true
  validates :price, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 100000 } # in USD
  validates :profit_sharing, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 100 } # in USD
  validates :year, presence: true, numericality: { only_integer: true }
  validates :height, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 10000 } # in cm
  validates :length, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 10000 } # in cm
  validates :width, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 10000 } # in cm

  validates :user, presence: true
end
