const { Films } = require('../models');

const filmsData = [{
    "film_title": "100 Girls",
    "film_format":  "DVD"
  }, {
    "film_title": "21 Jump Street",
    "film_format":  "BRD"
  }, {
    "film_title": "22 Jump Street",
    "film_format":  "BRD"
  }, {
    "film_title": "3 Ninjas ",
    "film_format":  "DVD"
  }, {
    "film_title": "3 Ninjas 2",
    "film_format":  "DVD"
  }, {
    "film_title": "3 Ninjas 3",
    "film_format":  "DVD"
  }, {
    "film_title": "3 Ninjas 4",
    "film_format":  "DVD"
  }, {
    "film_title": "50/50",
    "film_format":  "BRD"
  }, {
    "film_title": "500 Days Of Summer",
    "film_format":  "DVD"
  }, {
    "film_title": "Airheads",
    "film_format":  "DVD"
  }, {
    "film_title": "Almost Famous",
    "film_format":  "BRD"
  }, {
    "film_title": "American History X",
    "film_format":  "DVD"
  }, {
    "film_title": "American Pie",
    "film_format":  "BRD"
  }, {
    "film_title": "American Pie 2",
    "film_format":  "BRD"
  }, {
    "film_title": "American Pie 3: Wedding",
    "film_format":  "BRD"
  }, {
    "film_title": "American Pie 4: Reunion",
    "film_format":  "BRD"
  }, {
    "film_title": "Analyze That",
    "film_format":  "DVD"
  }, {
    "film_title": "Analyze This",
    "film_format":  "DVD"
  }, {
    "film_title": "Anchorman",
    "film_format":  "BRD"
  }, {
    "film_title": "Any Given Sunday",
    "film_format":  "DVD"
  }, {
    "film_title": "Atomic Blonde",
    "film_format":  "BRD"
  }, {
    "film_title": "Bad Boys",
    "film_format":  "BRD"
  }, {
    "film_title": "Bad Boys 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Beerfest",
    "film_format":  "DVD"
  }, {
    "film_title": "Big Lebowski",
    "film_format":  "BRD"
  }, {
    "film_title": "Bill & Ted`s Bogus Journey",
    "film_format":  "DVD"
  }, {
    "film_title": "Bill & Ted`s Excellent Adventure",
    "film_format":  "DVD"
  }, {
    "film_title": "Billy Madison",
    "film_format":  "DVD"
  }, {
    "film_title": "Boondock Saints",
    "film_format":  "BRD"
  }, {
    "film_title": "Boondock Saints 2",
    "film_format":  "BRD"
  }, {
    "film_title": "Bourne Identity",
    "film_format":  "DVD"
  }, {
    "film_title": "Bourne Supremacy",
    "film_format":  "DVD"
  }, {
    "film_title": "Bourne Ultimatum ",
    "film_format":  "DVD"
  }, {
    "film_title": "Broken Lizard Stands Up",
    "film_format":  "DVD"
  }, {
    "film_title": "The Care Bears Movie",
    "film_format":  "DVD"
  }, {
    "film_title": "Casino",
    "film_format":  "DVD"
  }, {
    "film_title": "Chaos Theory",
    "film_format":  "DVD"
  }, {
    "film_title": "Chasing Amy",
    "film_format":  "DVD"
  }, {
    "film_title": "Clerks 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Club Dread",
    "film_format":  "DVD"
  }, {
    "film_title": "Crank ",
    "film_format":  "DVD"
  }, {
    "film_title": "Crank 2",
    "film_format":  "BRD"
  }, {
    "film_title": "Crazy Stupid Love",
    "film_format":  "BRD"
  }, {
    "film_title": "Crocodile Dundee",
    "film_format":  "DVD"
  }, {
    "film_title": "Crocodile Dundee 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Dave Chappelles Block Party",
    "film_format":  "DVD"
  }, {
    "film_title": "Dave Chappelle Live",
    "film_format":  "DVD"
  }, {
    "film_title": "Date Night",
    "film_format":  "DVD"
  }, {
    "film_title": "Deadpool",
    "film_format":  "BRD"
  }, {
    "film_title": "Dead Man On Campus",
    "film_format":  "DVD"
  }, {
    "film_title": "Dead Poets Society",
    "film_format":  "DVD"
  }, {
    "film_title": "Death Sentence",
    "film_format":  "DVD"
  }, {
    "film_title": "The Departed",
    "film_format":  "DVD"
  }, {
    "film_title": "Dodgeball",
    "film_format":  "DVD"
  }, {
    "film_title": "Dogma",
    "film_format":  "DVD"
  }, {
    "film_title": "Don Jon",
    "film_format":  "BRD"
  }, {
    "film_title": "Donnie Brasco",
    "film_format":  "DVD"
  }, {
    "film_title": "Drive",
    "film_format":  "BRD"
  }, {
    "film_title": "Eastern Promises",
    "film_format":  "DVD"
  }, {
    "film_title": "Easy A",
    "film_format":  "BRD"
  }, {
    "film_title": "Eight Crazy Nights",
    "film_format":  "DVD"
  }, {
    "film_title": "Empire Records / Singles",
    "film_format":  "DVD"
  }, {
    "film_title": "Entourage The Movie",
    "film_format":  "BRD"
  }, {
    "film_title": "The Equalizer",
    "film_format":  "BRD"
  }, {
    "film_title": "The Equalizer 2",
    "film_format":  "BRD"
  }, {
    "film_title": "The Expendables",
    "film_format":  "BRD"
  }, {
    "film_title": "The Expendables 2",
    "film_format":  "BRD"
  }, {
    "film_title": "Fast And The Furious",
    "film_format":  "BRD"
  }, {
    "film_title": "Fast And The Furious 2",
    "film_format":  "BRD"
  }, {
    "film_title": "Fast And The Furious 3",
    "film_format":  "BRD"
  }, {
    "film_title": "Fast And The Furious 4",
    "film_format":  "BRD"
  }, {
    "film_title": "Fast And The Furious 5",
    "film_format":  "BRD"
  }, {
    "film_title": "Fast And The Furious 6",
    "film_format":  "BRD"
  }, {
    "film_title": "Fast And The Furious 7",
    "film_format":  "BRD"
  }, {
    "film_title": "Fast And The Furious 8",
    "film_format":  "BRD"
  }, {
    "film_title": "Faster",
    "film_format":  "BRD"
  }, {
    "film_title": "Finding Nemo",
    "film_format":  "DVD"
  }, {
    "film_title": "Fired Up!",
    "film_format":  "DVD"
  }, {
    "film_title": "Forgetting Sarah Marshall",
    "film_format":  "DVD"
  }, {
    "film_title": "Four Brothers",
    "film_format":  "DVD"
  }, {
    "film_title": "Fubar",
    "film_format":  "DVD"
  }, {
    "film_title": "Fubar 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Full Metal Jacket",
    "film_format":  "DVD"
  }, {
    "film_title": "Get Carter",
    "film_format":  "DVD"
  }, {
    "film_title": "Ghostbusters",
    "film_format":  "BRD"
  }, {
    "film_title": "Ghostbusters 2",
    "film_format":  "BRD"
  }, {
    "film_title": "The Godfather",
    "film_format":  "DVD"
  }, {
    "film_title": "The Godfather 2",
    "film_format":  "DVD"
  }, {
    "film_title": "The Godfather 3",
    "film_format":  "DVD"
  }, {
    "film_title": "Going The Distance",
    "film_format":  "DVD"
  }, {
    "film_title": "Goodfellas",
    "film_format":  "DVD"
  }, {
    "film_title": "Goods",
    "film_format":  "DVD"
  }, {
    "film_title": "Goon",
    "film_format":  "BRD"
  }, {
    "film_title": "Goon 2",
    "film_format":  "BRD"
  }, {
    "film_title": "Grindhouse",
    "film_format":  "BRD"
  }, {
    "film_title": "Half Baked",
    "film_format":  "DVD"
  }, {
    "film_title": "The Hangover",
    "film_format":  "DVD"
  }, {
    "film_title": "Happy Gilmore",
    "film_format":  "BRD"
  }, {
    "film_title": "Harold & Kumar",
    "film_format":  "DVD"
  }, {
    "film_title": "Harold & Kumar 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Harold & Kumar 3",
    "film_format":  "BRD"
  }, {
    "film_title": "He`s Just Not That Into You",
    "film_format":  "DVD"
  }, {
    "film_title": "High Fidelity",
    "film_format":  "DVD"
  }, {
    "film_title": "Hitch",
    "film_format":  "DVD"
  }, {
    "film_title": "Horrible Bosses",
    "film_format":  "BRD"
  }, {
    "film_title": "Hot Fuzz",
    "film_format":  "DVD"
  }, {
    "film_title": "Hot Shots",
    "film_format":  "DVD"
  }, {
    "film_title": "I Hope They Serve Beer In Hell",
    "film_format":  "DVD"
  }, {
    "film_title": "I Love You Man",
    "film_format":  "DVD"
  }, {
    "film_title": "Jay & Silent Bob Strike Back",
    "film_format":  "DVD"
  }, {
    "film_title": "Jingle All The Way",
    "film_format":  "DVD"
  }, {
    "film_title": "John Wick",
    "film_format":  "BRD"
  }, {
    "film_title": "John Wick 2",
    "film_format":  "BRD"
  }, {
    "film_title": "John Wick 3",
    "film_format":  "BRD"
  }, {
    "film_title": "Just Before I Go",
    "film_format":  "DVD"
  }, {
    "film_title": "Kick-Ass",
    "film_format":  "DVD"
  }, {
    "film_title": "Kingman",
    "film_format":  "BRD"
  }, {
    "film_title": "Knocked Up",
    "film_format":  "BRD"
  }, {
    "film_title": "Let`s Be Cops",
    "film_format":  "BRD"
  }, {
    "film_title": "Losers",
    "film_format":  "DVD"
  }, {
    "film_title": "Lucky Number Slevin",
    "film_format":  "BRD"
  }, {
    "film_title": "Machete",
    "film_format":  "DVD"
  }, {
    "film_title": "Machete Kills",
    "film_format":  "BRD"
  }, {
    "film_title": "Major League",
    "film_format":  "DVD"
  }, {
    "film_title": "Mallrats",
    "film_format":  "DVD"
  }, {
    "film_title": "Max Payne",
    "film_format":  "DVD"
  }, {
    "film_title": "The Mechanic",
    "film_format":  "BRD"
  }, {
    "film_title": "Mighty Ducks",
    "film_format":  "DVD"
  }, {
    "film_title": "Mighty Ducks 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Mighty Ducks 3",
    "film_format":  "DVD"
  }, {
    "film_title": "Mr & Mrs Smith",
    "film_format":  "DVD"
  }, {
    "film_title": "Muppets Christmas Movie",
    "film_format":  "DVD"
  }, {
    "film_title": "Muppets Movie",
    "film_format":  "BRD"
  }, {
    "film_title": "Music & Lyrics",
    "film_format":  "DVD"
  }, {
    "film_title": "The Night Before",
    "film_format":  "BRD"
  }, {
    "film_title": "Ninja Turtles",
    "film_format":  "DVD"
  }, {
    "film_title": "Ninja Turtles 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Ninja Turtles 3",
    "film_format":  "DVD"
  }, {
    "film_title": "Nobody",
    "film_format":  "BRD"
  }, {
    "film_title": "No Holds Barred",
    "film_format":  "DVD"
  }, {
    "film_title": "Office Space",
    "film_format":  "BRD"
  }, {
    "film_title": "Old School",
    "film_format":  "DVD"
  }, {
    "film_title": "Other Guys",
    "film_format":  "BRD"
  }, {
    "film_title": "Our Idiot Brother",
    "film_format":  "DVD"
  }, {
    "film_title": "Pain & Gain",
    "film_format":  "BRD"
  }, {
    "film_title": "Payback",
    "film_format":  "DVD"
  }, {
    "film_title": "Pineapple Express",
    "film_format":  "DVD"
  }, {
    "film_title": "Police Academy",
    "film_format":  "DVD"
  }, {
    "film_title": "Police Academy 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Police Academy 3",
    "film_format":  "DVD"
  }, {
    "film_title": "Police Academy 4",
    "film_format":  "DVD"
  }, {
    "film_title": "Purple Rain",
    "film_format":  "DVD"
  }, {
    "film_title": "RED",
    "film_format":  "BRD"
  }, {
    "film_title": "RED 2",
    "film_format":  "BRD"
  }, {
    "film_title": "Remember The Titans",
    "film_format":  "DVD"
  }, {
    "film_title": "The Replacements",
    "film_format":  "BRD"
  }, {
    "film_title": "Reservoir Dogs",
    "film_format":  "DVD"
  }, {
    "film_title": "Revenge Of The Nerds",
    "film_format":  "DVD"
  }, {
    "film_title": "Revenge Of The Nerds 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Robocop",
    "film_format":  "DVD"
  }, {
    "film_title": "Robocop 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Robocop 3",
    "film_format":  "DVD"
  }, {
    "film_title": "Rocker",
    "film_format":  "DVD"
  }, {
    "film_title": "Rock Star",
    "film_format":  "DVD"
  }, {
    "film_title": "Role Models",
    "film_format":  "DVD"
  }, {
    "film_title": "Rookie Of The Year",
    "film_format":  "DVD"
  }, {
    "film_title": "The Rundown",
    "film_format":  "BRD"
  }, {
    "film_title": "Scarface",
    "film_format":  "BRD"
  }, {
    "film_title": "School Of Life",
    "film_format":  "DVD"
  }, {
    "film_title": "School Of Rock",
    "film_format":  "DVD"
  }, {
    "film_title": "Scott Pilgrim Vs The World",
    "film_format":  "BRD"
  }, {
    "film_title": "Search Party",
    "film_format":  "DVD"
  }, {
    "film_title": "Shaun Of The Dead",
    "film_format":  "DVD"
  }, {
    "film_title": "She`s Out Of My League",
    "film_format":  "DVD"
  }, {
    "film_title": "Shoot`em Up",
    "film_format":  "DVD"
  }, {
    "film_title": "Slammin Salmon",
    "film_format":  "BRD"
  }, {
    "film_title": "SLC Punk",
    "film_format":  "DVD"
  }, {
    "film_title": "SLC Punk 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Smokin Aces",
    "film_format":  "DVD"
  }, {
    "film_title": "Soul Men",
    "film_format":  "DVD"
  }, {
    "film_title": "Spinal Tap",
    "film_format":  "DVD"
  }, {
    "film_title": "Step Brothers",
    "film_format":  "DVD"
  }, {
    "film_title": "Stick It",
    "film_format":  "DVD"
  }, {
    "film_title": "Superbad",
    "film_format":  "BRD"
  }, {
    "film_title": "Super Troopers",
    "film_format":  "BRD"
  }, {
    "film_title": "Super Troopers 2",
    "film_format":  "BRD"
  }, {
    "film_title": "Surf Ninjas",
    "film_format":  "DVD"
  }, {
    "film_title": "Swingers",
    "film_format":  "BRD"
  }, {
    "film_title": "Taken",
    "film_format":  "DVD"
  }, {
    "film_title": "Ted",
    "film_format":  "BRD"
  }, {
    "film_title": "Ted 2",
    "film_format":  "BRD"
  }, {
    "film_title": "Teen Wolf",
    "film_format":  "DVD"
  }, {
    "film_title": "Teen Wolf 2",
    "film_format":  "DVD"
  }, {
    "film_title": "This Is The End",
    "film_format":  "BRD"
  }, {
    "film_title": "Training Day",
    "film_format":  "DVD"
  }, {
    "film_title": "The Transporter",
    "film_format":  "BRD"
  }, {
    "film_title": "The Transporter 2",
    "film_format":  "BRD"
  }, {
    "film_title": "The Transporter 3",
    "film_format":  "BRD"
  }, {
    "film_title": "UHF",
    "film_format":  "DVD"
  }, {
    "film_title": "Undercover Brother",
    "film_format":  "DVD"
  }, {
    "film_title": "Valentine`s Day",
    "film_format":  "DVD"
  }, {
    "film_title": "Van Wilder",
    "film_format":  "DVD"
  }, {
    "film_title": "Van Wilder 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Varsity Blues",
    "film_format":  "BRD"
  }, {
    "film_title": "Waiting",
    "film_format":  "DVD"
  }, {
    "film_title": "Walk Hard",
    "film_format":  "DVD"
  }, {
    "film_title": "Waterboy",
    "film_format":  "DVD"
  }, {
    "film_title": "Wayne`s World",
    "film_format":  "BRD"
  }, {
    "film_title": "Wayne`s World 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Wedding Crashers",
    "film_format":  "DVD"
  }, {
    "film_title": "The Wedding Singer",
    "film_format":  "DVD"
  }, {
    "film_title": "Weekend At Bernie`s",
    "film_format":  "DVD"
  }, {
    "film_title": "Weekend At Bernie`s 2",
    "film_format":  "DVD"
  }, {
    "film_title": "Whip It",
    "film_format":  "DVD"
  }, {
    "film_title": "Who Framed Roger Rabbit?",
    "film_format":  "DVD"
  }, {
    "film_title": "Whole Nine Yards",
    "film_format":  "DVD"
  }, {
    "film_title": "Whole Ten Yards",
    "film_format":  "DVD"
  }, {
    "film_title": "World`s End",
    "film_format":  "BRD"
  }, {
    "film_title": "The Wrestler",
    "film_format":  "DVD"
  }, {
    "film_title": "Zack & Miri Make A Porno",
    "film_format":  "BRD"
  }, {
    "film_title": "Zombieland",
    "film_format":  "DVD"
  }]
  
const seedFilms = () => Films.bulkCreate(filmsData);

module.exports = seedFilms;