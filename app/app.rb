module Project
  class App < Padrino::Application
    register SassInitializer
    # use ActiveRecord::ConnectionAdapters::ConnectionManagement
    register Padrino::Rendering
    register Padrino::Mailer
    register Padrino::Helpers

    enable :sessions

    get '/' do
        render 'main'
    end
  end
end
