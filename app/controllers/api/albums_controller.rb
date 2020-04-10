class Api::AlbumsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index 
        @albums = Album.all 
        render :index
    end

    def show
        @album = Album.find_by(params[:id])
    end

    def create
        @album = Album.create(album_params)
        render :show
    end

    def album_params
        params.require(:album).permit(:title, :user_id)
    end

end