require 'sinatra'

get '/' do
  File.read('public/hello.txt')
end

get '/cities' do
  "cities"
end
