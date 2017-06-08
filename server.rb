require 'sinatra'

get '/' do
  file.read('public/hello.txt')
end

get '/cities' do
  "cities"
end
