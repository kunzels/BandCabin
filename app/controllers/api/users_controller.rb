class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.photo.attached? == false
            @user.photo.attach(io: File.open("/Users/stevenk/Desktop/BandCabin/BandCabinApp/app/assets/images/defuser.png"), filename: "defuser.png")
        end
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json:@user.errors.full_messages, status:422
        end
    end

    def index 
        @users = User.all 
        render :index
    end
    
    def show
        @user = User.find_by(id: params[:id])
    end
    
    private
    def user_params
        params.require(:user).permit(:username, :email, :artist, :password, :photo, :photoUrl, :location, :description, :genre)
    end
end