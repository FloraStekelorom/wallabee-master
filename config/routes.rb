Rails.application.routes.draw do
  root to: 'static_pages#home'

  get '/login' => 'static_pages#login'
  get '/product/:id' => 'static_pages#product'
  get '/about-us' => 'static_pages#about'
  get '/careers' => 'static_pages#careers'
  get '/terms-and-conditions' => 'static_pages#terms'
  get '/privacy' => 'static_pages#privacy'
  get '/cookies' => 'static_pages#cookies'
  get '/contact' => 'static_pages#contact'

  namespace :api do
    # Add routes below this line
    resources :users, only: [:create]
    resources :sessions, only: [:create, :destroy]
    resources :products, only: [:index, :show]

    #SESSIONS
    delete '/sessions'   => 'sessions#destroy'
    get '/authenticated' => 'sessions#authenticated'

  end

end
