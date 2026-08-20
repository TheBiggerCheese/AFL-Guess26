const ALL_PLAYERS = [{"name": "Ron Barassi", "games": 253}, {"name": "Michael Tuck", "games": 426}, {"name": "Kevin Bartlett", "games": 403}, {"name": "Robert Harvey", "games": 383}, {"name": "Brent Harvey", "games": 432}, {"name": "Scott Pendlebury", "games": 435}, {"name": "Steele Sidebottom", "games": 345}, {"name": "Patrick Dangerfield", "games": 376}, {"name": "Mark Blicavs", "games": 311}, {"name": "Luke Parker", "games": 337}, {"name": "Lachie Neale", "games": 315}, {"name": "Jack Gunston", "games": 296}, {"name": "Dane Rampe", "games": 286}, {"name": "Jake Lloyd", "games": 282}, {"name": "Charlie Cameron", "games": 279}, {"name": "Jack Darling", "games": 339}, {"name": "Bradley Hill", "games": 299}, {"name": "Jeremy Cameron", "games": 277}, {"name": "Marcus Bontempelli", "games": 279}, {"name": "Isaac Heeney", "games": 244}, {"name": "Rory Laird", "games": 284}, {"name": "Taylor Walker", "games": 314}, {"name": "Jack Crisp", "games": 290}, {"name": "Dayne Zorko", "games": 314}, {"name": "Ollie Wines", "games": 291}, {"name": "Tom Hawkins", "games": 359}, {"name": "Joel Selwood", "games": 355}, {"name": "Gary Ablett", "games": 357}, {"name": "Tony Lockett", "games": 281}, {"name": "Jason Dunstall", "games": 269}, {"name": "Leigh Matthews", "games": 332}, {"name": "Wayne Carey", "games": 272}, {"name": "Paul Roos", "games": 356}, {"name": "Adam Goodes", "games": 372}, {"name": "Matthew Pavlich", "games": 353}, {"name": "Kade Simpson", "games": 342}, {"name": "Dustin Fletcher", "games": 400}, {"name": "Simon Madden", "games": 378}, {"name": "Ted Whitten", "games": 321}, {"name": "Brad Johnson", "games": 364}, {"name": "Chris Grant", "games": 341}, {"name": "Scott West", "games": 324}, {"name": "Nathan Burke", "games": 323}, {"name": "Nick Riewoldt", "games": 336}, {"name": "Robert Flower", "games": 272}, {"name": "David Mundy", "games": 376}, {"name": "Travis Boak", "games": 319}, {"name": "Eddie Betts", "games": 350}, {"name": "Mark Ricciuto", "games": 312}, {"name": "Ben Hart", "games": 311}, {"name": "Andrew McLeod", "games": 340}, {"name": "Tyson Edwards", "games": 321}, {"name": "Jude Bolton", "games": 325}, {"name": "Ryan O'Keefe", "games": 303}, {"name": "Shane Edwards", "games": 300}, {"name": "Trent Cotchin", "games": 306}, {"name": "Dustin Martin", "games": 302}, {"name": "Jack Riewoldt", "games": 347}, {"name": "Brett Deledio", "games": 243}, {"name": "Matthew Richardson", "games": 282}, {"name": "Kevin Murray", "games": 333}, {"name": "Bob Skilton", "games": 237}, {"name": "Alex Jesaulenko", "games": 256}, {"name": "Peter Hudson", "games": 245}, {"name": "Doug Hawkins", "games": 329}, {"name": "Gary Ablett Sr", "games": 248}, {"name": "Barry Cable", "games": 225}, {"name": "John Nicholls", "games": 328}, {"name": "Stephen Silvagni", "games": 312}, {"name": "Craig Bradley", "games": 375}, {"name": "Chris Judd", "games": 279}, {"name": "Michael Voss", "games": 289}, {"name": "Simon Black", "games": 322}, {"name": "Jonathan Brown", "games": 256}, {"name": "Jason Akermanis", "games": 325}, {"name": "Nigel Lappin", "games": 279}, {"name": "Luke Hodge", "games": 346}, {"name": "Sam Mitchell", "games": 329}, {"name": "Jarryd Roughead", "games": 283}, {"name": "Lance Franklin", "games": 354}, {"name": "Cyril Rioli", "games": 189}, {"name": "Jimmy Bartel", "games": 305}, {"name": "Cameron Ling", "games": 246}, {"name": "Joel Corey", "games": 276}, {"name": "Corey Enright", "games": 332}, {"name": "Harry Taylor", "games": 280}, {"name": "Mitch Duncan", "games": 275}, {"name": "James Kelly", "games": 273}, {"name": "Garry Ablett", "games": 357}, {"name": "Tony Shaw", "games": 313}, {"name": "Gavin Brown", "games": 254}, {"name": "Nathan Buckley", "games": 280}, {"name": "Dane Swan", "games": 258}, {"name": "Alan Didak", "games": 218}, {"name": "Leon Davis", "games": 225}, {"name": "Darren Jarman", "games": 386}, {"name": "Andrew Jarman", "games": 155}, {"name": "Mark Bickley", "games": 272}, {"name": "Ben Cousins", "games": 238}, {"name": "Dean Cox", "games": 290}, {"name": "Shannon Hurn", "games": 333}, {"name": "Josh Kennedy", "games": 293}, {"name": "Daniel Kerr", "games": 220}, {"name": "Peter Matera", "games": 253}, {"name": "Glenn Jakovich", "games": 276}, {"name": "Chris Mainwaring", "games": 267}, {"name": "Ross Glendinning", "games": 269}, {"name": "John Longmire", "games": 200}, {"name": "Paul Kelly", "games": 234}, {"name": "Barry Hall", "games": 289}, {"name": "Michael O'Loughlin", "games": 303}, {"name": "Tadhg Kennelly", "games": 197}, {"name": "Brett Kirk", "games": 241}, {"name": "Wayne Schwass", "games": 282}, {"name": "Glenn Archer", "games": 311}, {"name": "Drew Petrie", "games": 316}, {"name": "Todd Goldstein", "games": 315}, {"name": "Jack Ziebell", "games": 280}, {"name": "David Swallow", "games": 247}, {"name": "Gary Ablett Jr", "games": 357}, {"name": "Tom Lynch", "games": 247}, {"name": "Touk Miller", "games": 212}, {"name": "Jarrod Witts", "games": 214}, {"name": "Matthew Stokes", "games": 183}, {"name": "Steven May", "games": 247}, {"name": "Jack Viney", "games": 250}, {"name": "Jake Lever", "games": 180}, {"name": "Christian Salem", "games": 150}, {"name": "Max Gawn", "games": 250}, {"name": "Ed Langdon", "games": 130}, {"name": "Bayley Fritsch", "games": 120}, {"name": "Kysaiah Pickett", "games": 100}, {"name": "Tom Sparrow", "games": 110}, {"name": "Jake Bowey", "games": 80}, {"name": "Caleb Windsor", "games": 40}, {"name": "Trent Rivers", "games": 100}, {"name": "Shane McAdam", "games": 80}, {"name": "Kade Chandler", "games": 90}, {"name": "Charlie Spargo", "games": 80}, {"name": "Jacob van Rooyen", "games": 45}, {"name": "Harvey Langford", "games": 20}, {"name": "Xavier Lindsay", "games": 20}, {"name": "Matthew Jefferson", "games": 30}, {"name": "Koltyn Tholstrup", "games": 25}, {"name": "Jai Culley", "games": 20}, {"name": "Changkuoth Jiath", "games": 70}, {"name": "Patrick Cripps", "games": 180}, {"name": "Sam Walsh", "games": 160}, {"name": "Harry McKay", "games": 150}, {"name": "Jacob Weitering", "games": 200}, {"name": "Adam Saad", "games": 180}, {"name": "George Hewett", "games": 170}, {"name": "Nic Newman", "games": 150}, {"name": "Ollie Hollands", "games": 70}, {"name": "Jack Silvagni", "games": 130}, {"name": "Zach Merrett", "games": 230}, {"name": "Darcy Parish", "games": 200}, {"name": "Kyle Langford", "games": 170}, {"name": "Andrew McGrath", "games": 180}, {"name": "Nick Cox", "games": 100}, {"name": "Jordan Ridley", "games": 120}, {"name": "Peter Wright", "games": 120}, {"name": "Sam Draper", "games": 40}, {"name": "Kai Lohmann", "games": 60}, {"name": "Will Ashcroft", "games": 70}, {"name": "Josh Dunkley", "games": 170}, {"name": "Hugh McCluggage", "games": 190}, {"name": "Jarrod Berry", "games": 150}, {"name": "Harris Andrews", "games": 200}, {"name": "Oscar Allen", "games": 100}, {"name": "Sam Taylor", "games": 180}, {"name": "Tom Green", "games": 100}, {"name": "Toby Greene", "games": 280}, {"name": "Lachie Whitfield", "games": 280}, {"name": "Josh Kelly", "games": 200}, {"name": "Jesse Hogan", "games": 170}, {"name": "Jake Stringer", "games": 190}, {"name": "Nick Daicos", "games": 100}, {"name": "Josh Daicos", "games": 110}, {"name": "Jordan De Goey", "games": 200}, {"name": "Brayden Maynard", "games": 140}, {"name": "Darcy Moore", "games": 110}, {"name": "Jamie Elliott", "games": 150}, {"name": "Patrick Lipinski", "games": 100}, {"name": "Dan Houston", "games": 150}, {"name": "Jaeger O'Meara", "games": 200}, {"name": "Caleb Serong", "games": 120}, {"name": "Andrew Brayshaw", "games": 130}, {"name": "Sean Darcy", "games": 100}, {"name": "Luke Ryan", "games": 150}, {"name": "Shai Bolton", "games": 110}, {"name": "Luke Jackson", "games": 100}, {"name": "Jye Amiss", "games": 70}, {"name": "Max Holmes", "games": 90}, {"name": "Bailey Smith", "games": 100}, {"name": "Tom Stewart", "games": 180}, {"name": "Tanner Bruhn", "games": 60}, {"name": "Tyson Stengle", "games": 100}, {"name": "Christian Petracca", "games": 190}, {"name": "Noah Anderson", "games": 130}, {"name": "Matt Rowell", "games": 120}, {"name": "Ben King", "games": 120}, {"name": "Mac Andrew", "games": 50}, {"name": "Daniel Rioli", "games": 170}, {"name": "Sam Flanders", "games": 100}, {"name": "Jack Steele", "games": 180}, {"name": "Jack Macrae", "games": 250}, {"name": "Max King", "games": 90}, {"name": "Tom De Koning", "games": 100}, {"name": "Nasiah Wanganeen-Milera", "games": 60}, {"name": "Marcus Windhager", "games": 60}, {"name": "Liam Henry", "games": 80}, {"name": "Callum Wilkie", "games": 130}, {"name": "Errol Gulden", "games": 100}, {"name": "Chad Warner", "games": 100}, {"name": "Tom Papley", "games": 170}, {"name": "Brodie Grundy", "games": 170}, {"name": "Logan McDonald", "games": 70}, {"name": "Nick Blakey", "games": 100}, {"name": "Harley Reid", "games": 50}, {"name": "Tim Kelly", "games": 200}, {"name": "Elliot Yeo", "games": 163}, {"name": "Liam Duggan", "games": 180}, {"name": "Jamie Cripps", "games": 277}, {"name": "Reuben Ginbey", "games": 60}, {"name": "Brady Hough", "games": 100}, {"name": "Harry Sheezel", "games": 70}, {"name": "Luke Davies-Uniacke", "games": 120}, {"name": "Jy Simpkin", "games": 140}, {"name": "Bailey Scott", "games": 120}, {"name": "Tom Liberatore", "games": 250}, {"name": "Adam Treloar", "games": 280}, {"name": "Rory Lobb", "games": 160}, {"name": "Sam Darcy", "games": 70}, {"name": "Aaron Naughton", "games": 120}, {"name": "Bailey Dale", "games": 140}, {"name": "Tim English", "games": 120}, {"name": "James Sicily", "games": 160}, {"name": "Dylan Moore", "games": 100}, {"name": "Nick Watson", "games": 40}, {"name": "Will Day", "games": 80}, {"name": "Karl Amon", "games": 150}, {"name": "Mabior Chol", "games": 100}, {"name": "Cameron Mackenzie", "games": 50}, {"name": "Connor Rozee", "games": 120}, {"name": "Zak Butters", "games": 100}, {"name": "Jason Horne-Francis", "games": 80}, {"name": "Todd Marshall", "games": 100}, {"name": "Sam Powell-Pepper", "games": 100}, {"name": "Kane Farrell", "games": 80}, {"name": "Toby Nankervis", "games": 180}, {"name": "Nick Vlastuin", "games": 139}, {"name": "Tim Taranto", "games": 150}, {"name": "Jayden Short", "games": 180}, {"name": "Dion Prestia", "games": 143}, {"name": "Jacob Hopper", "games": 150}, {"name": "Noah Balta", "games": 100}, {"name": "Sam Lalor", "games": 30}, {"name": "Rhyan Mansell", "games": 60}, {"name": "Jonty Faull", "games": 20}, {"name": "Norm Smith", "games": 0}, {"name": "Jack Dyer", "games": 0}, {"name": "Ron Barassi Jr", "games": 0}, {"name": "Tom Wills", "games": 0}, {"name": "Arthur Calwell", "games": 0}, {"name": "Haydn Bunton", "games": 0}, {"name": "Gordon Coventry", "games": 0}, {"name": "Bob Pratt", "games": 0}, {"name": "Roy Cazaly", "games": 0}, {"name": "Dick Reynolds", "games": 0}, {"name": "Bill Hutchison", "games": 0}, {"name": "Ted Janks", "games": 0}, {"name": "Norm Van Brock", "games": 0}, {"name": "Keith Greig", "games": 0}, {"name": "Peter Daicos", "games": 0}, {"name": "Ray Shaw", "games": 0}, {"name": "Plugger Lockett", "games": 0}, {"name": "John Coleman", "games": 0}, {"name": "Graham Farmer", "games": 0}, {"name": "Polly Farmer", "games": 0}, {"name": "Doug Wade", "games": 0}, {"name": "Gary Dempsey", "games": 0}, {"name": "Francis Bourke", "games": 0}, {"name": "Kevin Sheedy", "games": 0}, {"name": "Malcolm Blight", "games": 0}, {"name": "John Kennedy", "games": 0}, {"name": "Tom Hafey", "games": 0}, {"name": "Mick Malthouse", "games": 0}];
const TEAM_TARGETS = {
  "Melbourne": [
    "Steven May",
    "Jack Viney",
    "Jake Lever",
    "Christian Salem",
    "Max Gawn",
    "Ed Langdon",
    "Bayley Fritsch",
    "Kysaiah Pickett",
    "Tom Sparrow",
    "Jake Bowey",
    "Caleb Windsor",
    "Trent Rivers",
    "Shane McAdam",
    "Kade Chandler",
    "Jacob van Rooyen",
    "Harvey Langford",
    "Xavier Lindsay",
    "Matthew Jefferson",
    "Koltyn Tholstrup",
    "Jai Culley",
    "Changkuoth Jiath"
  ],
  "Carlton": [
    "Patrick Cripps",
    "Sam Walsh",
    "Harry McKay",
    "Jacob Weitering",
    "Adam Saad",
    "George Hewett",
    "Nic Newman",
    "Ollie Hollands",
    "Jack Silvagni"
  ],
  "Collingwood": [
    "Nick Daicos",
    "Josh Daicos",
    "Jordan De Goey",
    "Brayden Maynard",
    "Darcy Moore",
    "Jack Crisp",
    "Scott Pendlebury",
    "Jamie Elliott",
    "Patrick Lipinski",
    "Dan Houston"
  ],
  "Brisbane Lions": [
    "Kai Lohmann",
    "Will Ashcroft",
    "Lachie Neale",
    "Josh Dunkley",
    "Hugh McCluggage",
    "Jarrod Berry",
    "Charlie Cameron",
    "Harris Andrews"
  ],
  "Essendon": [
    "Zach Merrett",
    "Darcy Parish",
    "Kyle Langford",
    "Andrew McGrath",
    "Nick Cox",
    "Jordan Ridley",
    "Peter Wright",
    "Sam Draper"
  ],
  "Geelong": [
    "Max Holmes",
    "Bailey Smith",
    "Jeremy Cameron",
    "Tom Stewart",
    "Patrick Dangerfield",
    "Tanner Bruhn",
    "Tyson Stengle"
  ],
  "Gold Coast": [
    "Christian Petracca",
    "Noah Anderson",
    "Matt Rowell",
    "Touk Miller",
    "Ben King",
    "Mac Andrew",
    "Daniel Rioli",
    "Sam Flanders"
  ],
  "GWS Giants": [
    "Sam Taylor",
    "Tom Green",
    "Toby Greene",
    "Lachie Whitfield",
    "Josh Kelly",
    "Jesse Hogan",
    "Jake Stringer"
  ],
  "Hawthorn": [
    "Jack Gunston",
    "James Sicily",
    "Dylan Moore",
    "Nick Watson",
    "Will Day",
    "Karl Amon",
    "Mabior Chol"
  ],
  "Fremantle": [
    "Jaeger O'Meara",
    "Caleb Serong",
    "Andrew Brayshaw",
    "Sean Darcy",
    "Luke Ryan",
    "Shai Bolton",
    "Luke Jackson",
    "Jye Amiss"
  ],
  "North Melbourne": [
    "Harry Sheezel",
    "Luke Davies-Uniacke",
    "Jy Simpkin",
    "Bailey Scott"
  ],
  "Port Adelaide": [
    "Ollie Wines",
    "Connor Rozee",
    "Zak Butters",
    "Jason Horne-Francis",
    "Todd Marshall",
    "Sam Powell-Pepper",
    "Kane Farrell"
  ],
  "Richmond": [
    "Toby Nankervis",
    "Nick Vlastuin",
    "Tim Taranto",
    "Jayden Short",
    "Dion Prestia",
    "Jacob Hopper",
    "Tom Lynch",
    "Shai Bolton",
    "Noah Balta",
    "Sam Lalor"
  ],
  "St Kilda": [
    "Jack Steele",
    "Bradley Hill",
    "Max King",
    "Tom De Koning",
    "Nasiah Wanganeen-Milera",
    "Marcus Windhager",
    "Liam Henry",
    "Callum Wilkie"
  ],
  "Sydney": [
    "Isaac Heeney",
    "Errol Gulden",
    "Chad Warner",
    "Tom Papley",
    "Brodie Grundy",
    "Dane Rampe",
    "Jake Lloyd",
    "Logan McDonald",
    "Nick Blakey"
  ],
  "West Coast": [
    "Harley Reid",
    "Tim Kelly",
    "Elliot Yeo",
    "Liam Duggan",
    "Jack Darling",
    "Jamie Cripps",
    "Reuben Ginbey",
    "Brady Hough"
  ],
  "Western Bulldogs": [
    "Tom Liberatore",
    "Marcus Bontempelli",
    "Adam Treloar",
    "Rory Lobb",
    "Sam Darcy",
    "Aaron Naughton",
    "Bailey Dale",
    "Tim English"
  ],
  "Adelaide Crows": [
    "Taylor Walker",
    "Rory Laird",
    "Ben Keays",
    "Chayce Jones",
    "Darcy Fogarty",
    "Reilly O'Brien",
    "Wayne Milera"
  ]
};
