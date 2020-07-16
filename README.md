![bandcabin logo](./app/assets/images/bclogo.png)
# A bandcamp project clone
Bandcabin is a fullstack learning project, a bandcamp clone, and a work in progress. Bandcabin is a platform for artists to be able to easilly share and sell their music online. It provides a personal page for your music and allows for in app streaming.

[Live site](https://bandcabin.herokuapp.com/#/)

## Technologies

### Frontend

  * React
  * Redux
  * JavaScript
  * CSS

### Backend

  * Ruby
  * Rails
  * PostgreSQL

## User Authorization
Bandcabin has custom user authentication with a persistent user state.  Through cookies, users remain logged in, while their email is saved in the backend.  The model ensures uniqueness, and the passwords are hashed using BCrypt.  Various validations are performed to ensure vailidity.

### AWS S3:

Using Amazon Web Services S3 load time is minimized and storage space is not a concern. The Rails credentials are integrated with the AWS credentials, allowing the app to access AWS. The bucket policy permissions then allow the storage of data in S3.

### Albums:

Every album has information neccesary for its creation
* Title 
* Description
* Genre
* Price

Default images are chosen if a user does not select an image, and restrictions are put in place to ensure only song files (wav, mp3 etc) get uploaded as tracks, and only image files (jpg, jpeg, png etc) are allowed as album art.

Tracks are able to be played on the album page, with quick loading times and high quality sound.  
