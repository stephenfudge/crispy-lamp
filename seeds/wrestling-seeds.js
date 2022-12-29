const { Wrestling } = require('../models');


const wrestlingData = [{
    "wrestling_title": "Colossal Canadians Best Of Monster Mafia Volume 1",
    "wrestling_presentation": "Compilation",
    "wrestling_promotion": " ",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Payback",
    "wrestling_promotion": "FIP",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Unstoppable",
    "wrestling_promotion": "FIP",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "The Usual Suspects",
    "wrestling_promotion": "FIP",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Matt & Nicks Excellent FWE Adventure",
    "wrestling_promotion": "FWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "11th Anniversary",
    "wrestling_promotion": "PWG",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Best Of AJ Styles Volume 2",
    "wrestling_promotion": "ROH",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Best In The World",
    "wrestling_promotion": "ROH",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Bloodstained Honor",
    "wrestling_promotion": "ROH",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "The Briscoe Brothers",
    "wrestling_promotion": "ROH",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "CM Punk: Better Than You",
    "wrestling_promotion": "ROH",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "CM Punk: Straight Edge",
    "wrestling_promotion": "ROH",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "El Generico: Ole! Ole!",
    "wrestling_promotion": "ROH",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Greatest Rivalries",
    "wrestling_promotion": "ROH",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Samoa Joe vs CM Punk",
    "wrestling_promotion": "ROH",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Stars Of Honor",
    "wrestling_promotion": "ROH",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "The Summer Of Punk",
    "wrestling_promotion": "ROH",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Best Of The X Division Volume 1",
    "wrestling_promotion": "TNA",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Best Of The X Division Volume 2",
    "wrestling_promotion": "TNA",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Christian Cage",
    "wrestling_promotion": "TNA",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Fandemonium Tag Teams",
    "wrestling_promotion": "TNA",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Team 3D",
    "wrestling_promotion": "TNA",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Ultimate Matches",
    "wrestling_promotion": "TNA",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Allied Powers Greatest Tag Teams",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Andre The Giant",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Best Of In Your House",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "Best Of King Of The Ring",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "Best Of Nitro Volume 1",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Best Of Nitro Volume 2",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "Best Of Saturday Nights Main Event",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Best Of Smackdown 1999 - 2009",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Big Show: A Giants World",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Bloodsport ECW",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Bobby Heenan",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Bret Hart",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "Bret Hart: Best There Is…",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Brian Pillman: Loose Cannon",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Chris Benoit: Hard Knocks",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Chris Jericho: Breaking The Code",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Clash Of Champions",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "CM Punk",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "Daniel Bryan: Just Say Yes Yes Yes",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Superstar Collection: Daniel Bryan",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Dusty Rhodes",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "ECW One Night Stand 2005",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "ECW One Night Stand 2006",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "ECW Unreleased Volume 1",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "ECW Unreleased Volume 2",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "ECW Unreleased Volume 3",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Eddie Guerrero: Cheating Death, Stealing Life",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Eddie Guerrero: Viva La Raza",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Edge: A Decade Of Decadence",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Falls Count Anywhere",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "Great American Bash 2007",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "The Greatest Cage Matches Of All Time",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Greatest Rivalries: Shawn Vs Bret",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "Greatest Wrestling Factions",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "Hart & Soul: Hart Family",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Hell In A Cell: Greatest Hell In A Cell Matches",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "History Of Intercontinental Championship",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Jake The Snake Roberts: Pick Your Poison",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "John Morrison: Rock Star",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Ladder Match 1",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Ladder Match 2",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Macho Man",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "Macho Man: Ultimate Collection",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Matt & Jeff Hardy: Twist Of Fate",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Mick Foley: Greatest Hits & Misses",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "The Monday Night War",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Most Powerful Families In Wrestling",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Mr. Perfect",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "New Years Revolution 2005",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "OMG! Top 50 Incidents In WWE History",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Owen Hart",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "Rey Mysterio: Biggest Little Man",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Ric Flair: The Definitive Collection",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Ric Flair & The Four Horsemen",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "The Ultimate Ric Flair Collection",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Rise & Fall Of ECW",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Road Warriors",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "The Epic Journey Of The Rock",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "The Rock: Most Electrifying Man",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Roddy Piper: Born To Controversy ",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 1988",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 1989",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 1990",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 1991",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 1992",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 1993",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 1994",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 1995",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 1996",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 1997",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 1998",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 1999",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 2000",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 2001",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 2002",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 2003",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 2004",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 2005",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 2006",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Royal Rumble 2007",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "RVD: One Of A King",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Satans Prison: Elimination Chamber",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Shawn Michaels: Boyhood Dream",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Shawn Michaels: Heartbreak & Triump",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Shawn Michaels: My Journey",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Starrcade Essential Collection 1983 - 2000",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Stone Cold Steve Austin",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "Story Of WrestleMania",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Straight Outta Dudleyville",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "SummerSlam 1988",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 1989",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 1990",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 1991",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 1992",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 1993",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 1994",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 1995",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 1996",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 1997",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 1998",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 1999",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 2000",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 2001",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 2002",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 2003",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 2004",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 2005",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 2006",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "SummerSlam 2007",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Survivor Series 1987",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Survivor Series 1988",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Survivor Series 1989",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Survivor Series 1990",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Survivor Series 1991",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Survivor Series 1992",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Survivor Series 1993",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Survivor Series 1994",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Survivor Series 1995",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Survivor Series 1996",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Triple H: King Of Kings",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "The Self Destruction Of The Ultimate Warrior",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "The Undertakers Deadliest Matches",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "War Games",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "BRD"
  }, {
    "wrestling_title": "Worlds Greatest Wrestling Managers",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Documentary",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "Wrestlings Highest Flyers",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "Compilation",
    "wrestling_format":  "DVD"
  },
  {
    "wrestling_title": "WrestleMania 1",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 2",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 3",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 4",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 5",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 6",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 7",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 8",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 9",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 10",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 11",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 12",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 13",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 14",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 15",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 16",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 17",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 18",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 19",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }, {
    "wrestling_title": "WrestleMania 20",
    "wrestling_promotion": "WWE",
    "wrestling_presentation": "PPV",
    "wrestling_format":  "DVD"
  }
]

const seedWrestling = () => Wrestling.bulkCreate(wrestlingData);

module.exports = seedWrestling;