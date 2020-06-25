class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
    )
    # sleep 2
    if @user
      # debugger
      login(@user)
      render "api/users/show"
    else
      # debugger
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["There is no user logged in"], status: 404
    end
  end
end
