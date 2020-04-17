# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Album.destroy_all
User.destroy_all
gizzard = User.create!({username: 'KingGizz', artist: 'King Gizzard and the Lizard Wizard', email:'gizz@gmail.com', password:'demoguy5000', location:"Austrailia", description:"King Gizzard & the Lizard Wizard is an Australian rock band formed in 2010 in Melbourne, Victoria.[1][2] The band consists of Stu Mackenzie (vocals, guitar, bass, keyboards, flute), Ambrose Kenny-Smith (vocals, harmonica, keyboards), Cook Craig (guitar, bass, vocals), Joey Walker (guitar, bass, keyboards, vocals), Lucas Skinner (bass, keyboards), Michael Cavanagh (drums, percussion), and Eric Moore (drums, percussion, management). They are known for their energetic live shows and prolific recording output, having released two EPs, fifteen studio albums, and four live albums since their formation.", genre:"Prog Rock"})
gizzard.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/Gizz.png"), filename: "jason.jpg")
nonagon = Album.create(title: "Nonagon Infinity", user_id: gizzard.id, price: 10, description: "Nonagon Infinity is the eighth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard. It was released on 29 April 2016 on ATO Records. The album is designed to play as an 'infinite loop' where 'the record can be played front-to-back-to-front-to-back and the sound won’t break.'", genre: "Prog Rock")
nonagon.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/nonagon.jpg"), filename: "jason.jpg")
mindFuzz = Album.create(title: "I'm in your Mind Fuzz", user_id: gizzard.id, price: 10, description: "Another Album here to listen to and enjoy on the wonderful Bandcabin application.", genre: "Prog Rock")
mindFuzz.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/mindfuzz.jpg"), filename: "jason.jpg")
motu = Album.create(title: "Murder of the Universe", user_id: gizzard.id, price: 10, description: "Murder of the Universe is the tenth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard. It was released on 23 June 2017 by Flightless Records in Australia, ATO Records in the United States, and Heavenly Recordings in the United Kingdom. It is the second of five albums released by the band in 2017. It is also the longest album that the band have released to date at 21 tracks and 46 minutes in length.", genre: "Prog Rock")
motu.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/motu.jpg"), filename: "jason.jpg")