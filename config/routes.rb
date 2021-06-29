Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'contacts#index'

  namespace :api do 
    namespace :v1 do 
      resources :contacts, param: :name #nombre y no id
    end
  end

  get '*path', to: 'contacts#index', via: :all #evuta que se interfiera con routes de react
end
