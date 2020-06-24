class Api::AlbumsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index 
        @albums = Album.all 
        render :index
    end

    def show
        @album = Album.find_by(id: params[:id])
    end

    def create
        @album = current_user.albums.new(album_params)
            if @album.save
                # @album.build_tracks
                render "api/albums/show"
            else
                render json: @album, status: :unprocessable_entity
            end
    end

    def album_params
        params.require(:album).permit(:title, :price, :description, :photo, :genre, tracks_attributes: [:title, :audio_file])
    end

end