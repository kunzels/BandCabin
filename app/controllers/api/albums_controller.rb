class Api::AlbumsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index 
        @albums = Album.all 
        render :index
    end

    def show
        @album = Album.includes(:tracks).find(params[:id])
    end

    def create
        @album = current_user.albums.new(album_params)
            if @album.save
                # @album.build_tracks
                render "api/albums/show"
            else
                render json: [@album.errors], :status => 424
            end
    end

    def album_params
        params.require(:album).permit(:title, :price, :description, :photo, :genre, tracks_attributes: [:title, :audio_file])
    end

end