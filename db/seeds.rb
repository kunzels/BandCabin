# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!({username: 'Demoth', artist: 'TheDemoBoys', email:'Demoman@this.com', password:'demoguy5000'})
User.create!({username: 'Poofart', artist: 'Thefartypoo', email:'poofat@this.com', password:'pooman1000'})