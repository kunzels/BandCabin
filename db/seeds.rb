# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Album.destroy_all
User.destroy_all
User.create!({username: 'Demoth', artist: 'TheDemoBoys', email:'Demoman@this.com', password:'demoguy5000', location:"Germany", description:"German man with a German plan.", genre:"Kraut Rock"})
Album.create(title: "DemoAlbum", user_id: User.first.id, price: 50, description: "Good Album", genre: "Kraut Rock")
User.first.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/jason.jpg"), filename: "jason.jpg")