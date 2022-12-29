const { Music } = require('../models');

const musicData =
[{
    "music_artist": "AC/DC",
    "music_title": "Family Jewels",
    "music_format": "DVD"
  },{
    "music_artist": "AC/DC",
    "music_title": "Live At Donnington",
    "music_format": "DVD"
  },{
    "music_artist": "AC/DC",
    "music_title": "No Bull",
    "music_format": "DVD"
  },{
    "music_artist": "AC/DC",
    "music_title": "Stiff Upper Lip Live",
    "music_format": "DVD"
  },{
    "music_artist": "Ben Folds & WASO",
    "music_title": "Live In Perth",
    "music_format": "DVD"
  },{
    "music_artist": "Billy Talent",
    "music_title": "Scandalous Travellers",
    "music_format": "DVD"
  },{
    "music_artist": "Black Sabbath",
    "music_title": "Gathered In Their Masses",
    "music_format": "BRD"
  },{
    "music_artist": "Danko Jones",
    "music_title": "Bring On The Mountain",
    "music_format": "DVD"
  },{
    "music_artist": "Ozzy Osbourne",
    "music_title": "God Bless Ozzy Osbourne",
    "music_format": "BRD"
  },{
    "music_artist": "Ozzy Osbourne",
    "music_title": "Live At Budokan",
    "music_format": "DVD"
  },{
    "music_artist": "Red Hot Chili Peppers",
    "music_title": "Off The Map",
    "music_format": "DVD"
  },{
    "music_artist": "Red Hot Chili Peppers",
    "music_title": "What Hits?",
    "music_format": "DVD"
  },{
    "music_artist": "S.O.D.",
    "music_title": "Kill Yourself The Movie",
    "music_format": "DVD"
  },{
    "music_artist": "S.O.D.",
    "music_title": "Speak English Or Live",
    "music_format": "DVD"
  },{
    "music_artist": "S.O.D.",
    "music_title": "20 Years Of Destruction",
    "music_format": "DVD"
  },{
    "music_artist": "Spanky",
    "music_title": "Off Time",
    "music_format": "DVD"
  },{
    "music_artist": "Steel Panther",
    "music_title": "British Invasion",
    "music_format": "BRD"
  },{
    "music_artist": "Weird Al Yankovic",
    "music_title": "LIVE",
    "music_format": "DVD"
  }]


const seedMusic = () => Music.bulkCreate(musicData);

module.exports = seedMusic;