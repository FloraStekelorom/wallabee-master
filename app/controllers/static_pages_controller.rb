class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def login
    render 'login'
  end

  def product
    @data = { product_id: params[:id] }.to_json
    render 'product'
  end


end
