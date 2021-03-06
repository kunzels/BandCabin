# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Track.destroy_all
# Album.destroy_all
# User.destroy_all

# gizzard = User.create!({username: 'King Gizzard', artist: 'King Gizzard and the Lizard Wizard', email:'gizz@gmail.com', password:'demoguy5000', location:"Austrailia", description:"King Gizzard & the Lizard Wizard is an Australian rock band formed in 2010 in Melbourne, Victoria. The band consists of Stu Mackenzie (vocals, guitar, bass, keyboards, flute), Ambrose Kenny-Smith (vocals, harmonica, keyboards), Cook Craig (guitar, bass, vocals), Joey Walker (guitar, bass, keyboards, vocals), Lucas Skinner (bass, keyboards), Michael Cavanagh (drums, percussion), and Eric Moore (drums, percussion, management). They are known for their energetic live shows and prolific recording output, having released two EPs, fifteen studio albums, and four live albums since their formation.", genre:"Prog Rock"})
# manman = User.create!({username: 'ManMan', artist: 'ManMan', email:'manman@gmail.com', password:'demoguy5001', location:"Philidalphia", description:'Man Man is an experimental rock band from Philadelphia and now based in Los Angeles. Their multi-instrumental style is centered on the piano playing of lead singer, songwriter, and lyricist Honus Honus (Ryan Kattner).', genre:"Experimental Rock"})
# weatherbox = User.create!({username: 'Weatherbox', artist: 'Weatherbox', email:'weatherbox@gmail.com', password:'demoguy5002', location:"California", description:'Weatherbox is an American indie rock band from San Diego, California, United States, led by singer/songwriter Brian Warren and currently composed of Warren and varied touring members.', genre:"Math Rock"})
# seedUser1 = User.create!({username: 'seedUser1', artist: 'The Bibblers', email:'seedUser1@gmail.com', password:'seedguy101', location:"Seedsville", description:'We are a band that really loves Seeds.  There are alot of bands pretending they are the seed band, but we are the real one.', genre:"Seed Band"})

# gizzard.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/Gizz.png"), filename: "jason.jpg")
# manman.photo.attach(io: open("https://bandcabin-seeds.s3.amheroku run rake db:migrateazonaws.com/ManMan/manman.jpg"), filename: "jason.jpg")
# weatherbox.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/weatherbox/weatherbox.jpeg"), filename: "jason.jpg")
# seedUser1.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/seedVolta.jpeg"), filename: "jason.jpg")

# poly = Album.create(title: "Polygondwanaland", user_id: gizzard.id, price: 10, description: "Polygondwanaland is the twelfth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard. The album was released under an open source licence. The band uploaded the master tapes online for anyone to use. It was released on 17 November 2017. It was the fourth of five albums released by the band in 2017.", genre: "Rock,Metal,Experimental,")
# poly.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/poly.jpg"), filename: "jason.jpg")
# nonagon = Album.create(title: "Nonagon Infinity", user_id: gizzard.id, price: 10, description: "Nonagon Infinity is the eighth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard. It was released on 29 April 2016 on ATO Records. The album is designed to play as an 'infinite loop' where 'the record can be played front-to-back-to-front-to-back and the sound won’t break.'", genre: "Rock,Experimental,Punk,")
# nonagon.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/nonagon.jpg"), filename: "jason.jpg")
# mindFuzz = Album.create(title: "I'm in your Mind Fuzz", user_id: gizzard.id, price: 10, description: "Another Album here to listen to and enjoy on the wonderful Bandcabin application.", genre: "Rock,Punk,")
# mindFuzz.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/mindfuzz.jpg"), filename: "jason.jpg")
# motu = Album.create(title: "Murder of the Universe", user_id: gizzard.id, price: 10, description: "Murder of the Universe is the tenth studio album by Australian psychedelic rock band King Gizzard & the Lizard Wizard. It was released on 23 June 2017 by Flightless Records in Australia, ATO Records in the United States, and Heavenly Recordings in the United Kingdom. It is the second of five albums released by the band in 2017. It is also the longest album that the band have released to date at 21 tracks and 46 minutes in length.", genre: "Rock,Metal,Experimental,Spokenword,Soundtrack,")
# motu.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/motu.jpg"), filename: "jason.jpg")

# dream = Album.create(title: "Dream Hunting", user_id: manman.id, price: 10, description:'Dream Hunting in the Valley of the In-Between is the sixth studio album by American band Man Man. It was released on May 1, 2020 under Sub Pop.', genre: "Rock,Punk,Jazz,Alternative,")
# dream.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/ManMan/dream.jpg"), filename: "jason.jpg")

# flies = Album.create(title: "Flies In All Directions", user_id: weatherbox.id, price: 10, description:"Weatherbox returns with a quite bit of snark and cheekiness that makes Flies In All Directions that much more interesting to absorb. It's packed with the typical start-stop riffs, distorted guitar bends and angular hooks that make a Weatherbox album but a lot of the tracks take time to roam out of the sandbox.", genre: "Punk,Rock,Alternative,")
# flies.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/weatherbox/flies.jpg"), filename: "jason.jpg")

# seedAlbum1 = Album.create(title: "Seed Album", user_id: seedUser1.id, price: 10, description:"This is our bands seed. Many others pretend to be us but we are the original.", genre: "Jazz,Rock,Alternative,Acoustic")
# seedAlbum1.photo.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/seedAlbum.jpg"), filename: "jason.jpg")

# seedTrack1 = Track.create(title: "Some albums need only one seed.", album_id: seedAlbum1.id)
# seedTrack1.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/jingle.mp3"), filename: "jingle.mp3")

# flies1 = Track.create(title: "Pagan Baby", album_id: flies.id)
# flies1.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/weatherbox/Pagan+Baby.mp3"), filename: "Pagan Baby.mp3")
# flies2 = Track.create(title: "Bring Us The Head Of Weatherbox", album_id: flies.id)
# flies2.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/weatherbox/Bring+Us+the+Head+of+Weatherbox.mp3"), filename: "Bring Us The Head Of Weatherbox.mp3")
# flies3 = Track.create(title: "The Fresh Prints Of Bill Ayers", album_id: flies.id)
# flies3.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/weatherbox/The+Fresh+Prints+of+Bill+Ayers.mp3"), filename: "The Fresh Prints Of Bill Ayers.mp3")
# flies4 = Track.create(title: "Bathin' In The Fuss", album_id: flies.id)
# flies4.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/weatherbox/Bathin'+in+the+Fuss.mp3"), filename: "Bathin' In The Fuss.mp3")
# flies5 = Track.create(title: "Radio Hive", album_id: flies.id)
# flies5.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/weatherbox/Radio+Hive.mp3"), filename: "Radio Hive.mp3")
# flies6 = Track.create(title: "The Devil And Whom?", album_id: flies.id)
# flies6.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/weatherbox/The+Devil+and+Whom_.mp3"), filename: "The Devil And Whom_.mp3")
# flies7 = Track.create(title: "Dark All Night For Us", album_id: flies.id)
# flies7.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/weatherbox/Dark+All+Night+for+Us.mp3"), filename: "Dark All Night For Us.mp3")
# flies8 = Track.create(title: "Drag Out", album_id: flies.id)
# flies8.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/weatherbox/Drag+Out.mp3"), filename: "Drag Out.mp3")
# flies9 = Track.create(title: "The Drones", album_id: flies.id)
# flies9.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/weatherbox/The+Drones.mp3"), filename: "The Drones.mp3")

# dream1 = Track.create(title: "Dreamers", album_id: dream.id)
# dream1.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/ManMan/dreamers.mp3"), filename: "dreamers.mp3")
# dream2 = Track.create(title: "Cloud Nein", album_id: dream.id)
# dream2.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/ManMan/cloud_nein.mp3"), filename: "cloud_nein.mp3")
# dream3 = Track.create(title: "On The Mend", album_id: dream.id)
# dream3.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/ManMan/on_the_mend.mp3"), filename: "on_the_mend.mp3")
# dream4 = Track.create(title: "Lonely Beuys", album_id: dream.id)
# dream4.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/ManMan/lonely_beuys.mp3"), filename: "lonely_beuys.mp3")
# dream5 = Track.create(title: "Future Peg", album_id: dream.id)
# dream5.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/ManMan/future_peg.mp3"), filename: "future_peg.mp3")
# dream6 = Track.create(title: "Goat", album_id: dream.id)
# dream6.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/ManMan/goat.mp3"), filename: "goat.mp3")
# dream7 = Track.create(title: "Inner Iggy", album_id: dream.id)
# dream7.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/ManMan/inner_iggy.mp3"), filename: "inner_iggy.mp3")
# dream8 = Track.create(title: "Hunters", album_id: dream.id)
# dream8.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/ManMan/hunters.mp3"), filename: "hunters.mp3")
# dream9 = Track.create(title: "Oyster Point", album_id: dream.id)
# dream9.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/ManMan/oyster_point.mp3"), filename: "oyster_point.mp3")
# dream10 = Track.create(title: "The Prettiest Song In The World", album_id: dream.id)
# dream10.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/ManMan/the_prettiest_song_in_the_world.mp3"), filename: "the_prettiest_song_in_the_world.mp3")


# non1 = Track.create(title: "Inner Cell", album_id: nonagon.id)
# non1.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/5.+Inner+Cell.mp3"), filename: "inner.mp3")
# non2 = Track.create(title: "Holding Fast", album_id: nonagon.id)
# non2.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/7.+Horology.mp3"), filename: "horology.mp3")
# non3 = Track.create(title: "Searching...", album_id: nonagon.id)
# non3.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/9.+Searching....mp3"), filename: "searching.mp3")

# mf1 = Track.create(title: "Inner Cell", album_id: mindFuzz.id)
# mf1.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/5.+Inner+Cell.mp3"), filename: "inner.mp3")
# mf2 = Track.create(title: "Holding Fast", album_id: mindFuzz.id)
# mf2.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/7.+Horology.mp3"), filename: "horology.mp3")
# mf3 = Track.create(title: "Searching...", album_id: mindFuzz.id)
# mf3.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/9.+Searching....mp3"), filename: "searching.mp3")

# motu1 = Track.create(title: "Bonk Boy", album_id: motu.id)
# motu1.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/5.+Inner+Cell.mp3"), filename: "inner.mp3")
# motu2 = Track.create(title: "Learning to Be", album_id: motu.id)
# motu2.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/7.+Horology.mp3"), filename: "horology.mp3")
# motu3 = Track.create(title: "Searching...", album_id: motu.id)
# motu3.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/9.+Searching....mp3"), filename: "searching.mp3")

# crumb = Track.create(title: "Crumbling Castle", album_id: poly.id)
# crumb.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/1.+Crumbling+Castle.mp3"), filename: "crumble.mp3")
# polyg = Track.create(title: "Polygondwanaland", album_id: poly.id)
# polyg.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/2.+Polygondwanaland.mp3"), filename: "poly.mp3")
# castle = Track.create(title: "The Castle In The Air", album_id: poly.id)
# castle.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/3.+The+Castle+In+The+Air.mp3"), filename: "castle.mp3")
# dunes = Track.create(title: "Deserted Dunes Welcome Weary Feet", album_id: poly.id)
# dunes.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/4.+Deserted+Dunes+Welcome+Weary+Feet.mp3"), filename: "crumble.mp3")
# inner = Track.create(title: "Inner Cell", album_id: poly.id)
# inner.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/5.+Inner+Cell.mp3"), filename: "inner.mp3")
# loyalty = Track.create(title: "Loyalty", album_id: poly.id)
# loyalty.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/6.+Loyalty.mp3"), filename: "loyalty.mp3")
# horology = Track.create(title: "Horology", album_id: poly.id)
# horology.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/7.+Horology.mp3"), filename: "horology.mp3")
# tetra = Track.create(title: "Tetrachromacy", album_id: poly.id)
# tetra.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/8.+Tetrachromacy.mp3"), filename: "tetrachromacy.mp3")
# searching = Track.create(title: "Searching...", album_id: poly.id)
# searching.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/9.+Searching....mp3"), filename: "searching.mp3")
# fourth = Track.create(title: "The Fourth Colour", album_id: poly.id)
# fourth.audio_file.attach(io: open("https://bandcabin-seeds.s3.amazonaws.com/10.+The+Fourth+Colour.mp3"), filename: "colour.mp3")