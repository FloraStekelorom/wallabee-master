module Api
  class ProductsController < ApplicationController

    def index
      @products = Product.order(created_at: :desc).page(params[:page]).per(6)
      return render json: { error: 'not_found' }, status: :not_found if !@products

      render 'api/products/index', status: :ok
    end

    def show
      @product = Product.find_by(id: params[:id])
      return render json: { error: 'not_found' }, status: :not_found if !@product

      render 'api/products/show', status: :ok
    end

  end
end
