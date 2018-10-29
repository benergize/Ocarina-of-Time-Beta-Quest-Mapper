/*__________________________________________________________________________________
//
//	FILENAME: zones.js
//	CREATED: 10/26/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: The array of objects that contains all the zones in the game as well
//	(cont.) as where they lead.
//
//
*/


	/*{"zone":"The name that appears in the zone selection dropdown",
		"parent":"Used primarily by the doorChart to populate a single zone (generally the one with the least doors) with the doors from other zones with more doors. We split up zones into groups of inter-accessible doors to make sure pathfinding works.",
		"doors":[
			{"zoneTo":"Where the door leads","doorTo":"What door you're dumped into","doorName":"The name of this very door."},
			{"zoneTo":"","doorTo":"","doorName":"Startup (Adult)"}
		],
		"hide":If the door isn't a parent this should probably be false. Determines whether it appears in zone lists,
		"children":[Zones to synchronize door data with. Necesary for pathfinding purposes.]
	},*/

zones = [	
	{"zone":"Game",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Startup (Child)"},
			{"zoneTo":"","doorTo":"","doorName":"Startup (Adult)"},
			{"zoneTo":"","doorTo":"","doorName":"Main World Death (Child)"},
			{"zoneTo":"","doorTo":"","doorName":"Main World Death (Adult)"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Deku Tree",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Kokiri Forest"},
			{"zoneTo":"","doorTo":"","doorName":"Deku Tree Boss"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Death"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Save"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Dodongo's Cavern",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Death Mountain Trail"},
			{"zoneTo":"","doorTo":"","doorName":"Dondogo's Cavern Boss"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Death"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Save"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Gerudo Training Grounds",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Gerudo Fortress"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Forest Temple Boss",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Forest Temple"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Water Temple",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Lake Hylia"},
			{"zoneTo":"","doorTo":"","doorName":"Main Entrance, Water Temple Boss"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Death"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Save"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Lost Scene",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"???"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Action Testing Room",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"???"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Stalfos Middle Room",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"???"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Stalfos Boss Room",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"???"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Item Testing Room",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"???"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Inside Jabu Jabu's Belly",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Zora's Fountain"},
			{"zoneTo":"","doorTo":"","doorName":"Map 14, Inside Jabu Jabu's Belly Boss"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Death"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Save"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Royal Family's Tomb",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Graveyard"},
			{"zoneTo":"","doorTo":"","doorName":"Sun Song Cutscene"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Market Entrance - Child Day",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Market"},
			{"zoneTo":"","doorTo":"","doorName":"Lots 'o Pots"},
			{"zoneTo":"","doorTo":"","doorName":"Hyrule Field"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Market Entrance - Child Night",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Market"},
			{"zoneTo":"","doorTo":"","doorName":"Lots 'o Pots"},
			{"zoneTo":"","doorTo":"","doorName":"Hyrule Field"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Market Entrance - Adult",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Market"},
			{"zoneTo":"","doorTo":"","doorName":"Lots 'o Pots"},
			{"zoneTo":"","doorTo":"","doorName":"Hyrule Field"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Shadow Temple",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Graveyard"},
			{"zoneTo":"","doorTo":"","doorName":"Outside Boss Door"},
			{"zoneTo":"","doorTo":"","doorName":"Shadow Temple Boss, Secret Map #0"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Death"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Save"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Shooting Gallery (Adult)",
		"parent":"Kakariko Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Shooting Gallery"}
		],
		"hide":true,
		"children":[]
	},
	{"zone":"Market Buildings",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Shooting Gallery"}
		],
		"hide":false,
		"children":["Happy Mask Shop","Bombchu Bowling Alley","Market Potion Shop","Bazaar","Treasure Box Shop",]
	},
	
	{"zone":"Grottos",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Default"}
		],
		"hide":false,
		"children":["Grotto (Cow)","Grotto (Forest Stage)","Grotto (Tektite)","Grotto (Two Deku Salescrubs, Closest sells Green Pot)","Grotto (Bombable Wall)","Grotto (Two Wolfos)","Grotto (Two Deku Salescrubs, Closest sells Deku Nut Upgrade)","Grotto (Octoroc)","Grotto (Webbed)","Grotto (Three Deku Salescrubs)","Grotto (Two Redeads)","Grotto (Heart Piece Scrub)","Grotto (Big Skulltula)","Small Fairy Fountain"]
	},

	{"zone":"Small Fairy Fountain",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Small Fairy Fountain"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Grotto (Big Skulltula)",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Big Skulltula"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Grotto (Heart Piece Scrub)",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Heart Piece Scrub"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Grotto (Two Redeads)",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Two Redeads"}
		],
		"hide":true,
		"children":[]
	},
	
	{"zone":"Grotto (Three Deku Salescrubs)",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Three Deku Salescrubs"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Grotto (Webbed)",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Webbed"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Grotto (Octoroc)",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Octoroc"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Grotto (Two Deku Salescrubs, Closest sells Deku Nut Upgrade)",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Two Deku Salescrubs, Closest sells Deku Nut Upgrade"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Grotto (Two Wolfos)",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Two Wolfos"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Grotto (Bombable Wall)",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Bombable Wall"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Grotto (Two Deku Salescrubs, Closest sells Green Pot)",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Two Deku Salescrubs, Closest sells Green Pot"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Grotto (Tektite)",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Tektite"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Grotto (Forest Stage)",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Forest Stage"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Grotto (Cow)",
		"parent":"Grottos",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Cow"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Lakeside Laboratory",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Lake Hylia"},
			{"zoneTo":"","doorTo":"","doorName":"Possibly Eyedrops Timeout"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Dark Link Testing Area",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"???"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Grave with Shield",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Hylian Shield Chest, Graveyard"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Lon Lon Ranch Buildings",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Talon's House, Lon Lon Ranch"},
			{"zoneTo":"","doorTo":"","doorName":"Talon's House, Lose/Win Cucco Game"}
		],
		"hide":false,
		"children":["Back Tower","Stables"]
	},

	{"zone":"Back Tower",
		"parent":"Lon Lon Ranch Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Back Tower, Lon Lon Ranch"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Temple of Time",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Outside Temple of Time"},
			{"zoneTo":"","doorTo":"","doorName":"Pull or Place Master Sword"},
			{"zoneTo":"","doorTo":"","doorName":"Standing facing away SoT spot"},
			{"zoneTo":"","doorTo":"","doorName":"After pulling the MS for first time?"},
			{"zoneTo":"","doorTo":"","doorName":"Temple of Time, Light Arrow Cutscene"},
			{"zoneTo":"","doorTo":"","doorName":"Front of Pedestal"},
			{"zoneTo":"","doorTo":"","doorName":"Prelude Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Adult savewarp"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Treasure Box Shop",
		"parent":"Market Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Treasure Box Shop"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Back Alley - Day",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Right side of alley, door Back Alley Village House"},
			{"zoneTo":"","doorTo":"","doorName":"Right Entrance, Market"},
			{"zoneTo":"","doorTo":"","doorName":"Left Entrance, Market"},
			{"zoneTo":"","doorTo":"","doorName":"Puppy Woman's House"},
			{"zoneTo":"","doorTo":"","doorName":"Bombchu Shop"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Back Alley - Night",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Right side of alley, door Back Alley Village House"},
			{"zoneTo":"","doorTo":"","doorName":"Right Entrance, Market"},
			{"zoneTo":"","doorTo":"","doorName":"Left Entrance, Market"},
			{"zoneTo":"","doorTo":"","doorName":"Puppy Woman's House"},
			{"zoneTo":"","doorTo":"","doorName":"Bombchu Shop"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Chamber of Sages",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"???"},
			{"zoneTo":"","doorTo":"","doorName":"??? (Forest Medallion?)"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Granny's Potion Shop",
		"parent":"Kakariko Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Granny's Potion Shop"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Beta Castle Courtyard",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"???"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Castle Courtyard - Day",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Castle, Crawlspace"},
			{"zoneTo":"","doorTo":"","doorName":"Zelda's Courtyard"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Castle Courtyard - Night",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Castle, Crawlspace"},
			{"zoneTo":"","doorTo":"","doorName":"Zelda's Courtyard"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Lots o' Pots",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Market Entrance"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Spirit Temple",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Desert Colossus"},
			{"zoneTo":"","doorTo":"","doorName":"Boss Room Entrance, Spirit Temple Boss"},
			{"zoneTo":"","doorTo":"","doorName":"Crashes (Bad Map)"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Death"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Save"}
		],
		"hide":false,
		"children":["Spirit Temple (Mirror Shield Entrance)","Spirit Temple (Silver Gauntlets Entrance)"]
	},
	{"zone":"Spirit Temple (Silver Gauntlets Entrance)",
		"parent":"Spirit Temple",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Desert Colossus"},
			{"zoneTo":"","doorTo":"","doorName":"Boss Room Entrance, Spirit Temple Boss"},
			{"zoneTo":"","doorTo":"","doorName":"Desert Colossus, Silver Gauntlets Chest"},
			{"zoneTo":"","doorTo":"","doorName":"Crashes (Bad Map)"}
		],
		"hide":true,
		"children":["Spirit Temple","Spirit Temple (Mirror Shield Entrance)"]
	},
	{"zone":"Spirit Temple (Mirror Shield Entrance)",
		"parent":"Spirit Temple",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Desert Colossus"},
			{"zoneTo":"","doorTo":"","doorName":"Boss Room Entrance, Spirit Temple Boss"},
			{"zoneTo":"","doorTo":"","doorName":"Desert Colossus, Mirror Shield Chest"},
			{"zoneTo":"","doorTo":"","doorName":"Crashes (Bad Map)"}
		],
		"hide":true,
		"children":["Spirit Temple","Spirit Temple (Mirror Shield Entrance)","Spirit Temple (Silver Gauntlets Entrance)"]
	},

	{"zone":"Ice Cavern",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Zora's Fountain"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Death"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Save"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Spirit Temple Boss",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Spirit Temple"},
			{"zoneTo":"","doorTo":"","doorName":"Inside Boss Map"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Collision Testing Arena",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"???"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Bottom of the Well",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Village"},
			{"zoneTo":"","doorTo":"","doorName":"???"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Cutscene Map",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"???"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Market - Child Day",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Market Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Shooting Gallery"},
			{"zoneTo":"","doorTo":"","doorName":"Happy Mask Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Treasure Box Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Temple of Time"},
			{"zoneTo":"","doorTo":"","doorName":"Back Alley, (Right)"},
			{"zoneTo":"","doorTo":"","doorName":"Back Alley, (Left)"},
			{"zoneTo":"","doorTo":"","doorName":"Market Potion Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Bazaar"},
			{"zoneTo":"","doorTo":"","doorName":"Bombchu Bowling Alley"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Market - Child Night",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Market Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Shooting Gallery"},
			{"zoneTo":"","doorTo":"","doorName":"Happy Mask Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Treasure Box Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Temple of Time"},
			{"zoneTo":"","doorTo":"","doorName":"Back Alley, (Right)"},
			{"zoneTo":"","doorTo":"","doorName":"Back Alley, (Left)"},
			{"zoneTo":"","doorTo":"","doorName":"Potion Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Bazaar"},
			{"zoneTo":"","doorTo":"","doorName":"Bombchu Bowling Alley"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Market - Adult",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Market Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Shooting Gallery"},
			{"zoneTo":"","doorTo":"","doorName":"Happy Mask Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Treasure Box Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Temple of Time"},
			{"zoneTo":"","doorTo":"","doorName":"Back Alley, (Right)"},
			{"zoneTo":"","doorTo":"","doorName":"Back Alley, (Left)"},
			{"zoneTo":"","doorTo":"","doorName":"Potion Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Bazaar"},
			{"zoneTo":"","doorTo":"","doorName":"Bombchu Bowling Alley"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Depth Test",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"???"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Bazaar",
		"parent":"Market Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Bazaar"}
		],
		"hide":true,
		"children":[]
	},
	
	{"zone":"Bazaar (Adult)",
		"parent":"Kakariko Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Bazaar"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Kokiri Forest Buildings",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Mido's House"}
		],
		"hide":false,
		"children":["Know-it-all Brothers","Kokiri Shop","House of Twins","Saria's House","Link's House"]
	},

	{"zone":"Link's House",
		"parent":"Kokiri Forest Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Link's House, Bed Entrance, Savewarp"},
			{"zoneTo":"","doorTo":"","doorName":"Link's House"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Saria's House",
		"parent":"Kokiri Forest Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Saria's House"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"House of Twins",
		"parent":"Kokiri Forest Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"House of Twins"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Kokiri Shop",
		"parent":"Kokiri Forest Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Kokiri Shop"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Know-it-all Brothers",
		"parent":"Kokiri Forest Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Know-it-all Brothers"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Hyrule Field",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"After Zelda Escape, 2nd+ Impa Escort"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Village"},
			{"zoneTo":"","doorTo":"","doorName":"Zora River, Land"},
			{"zoneTo":"","doorTo":"","doorName":"Kokiri Forest Bridge (Lost Woods)"},
			{"zoneTo":"","doorTo":"","doorName":"Lake Hylia"},
			{"zoneTo":"","doorTo":"","doorName":"Gerudo Valley"},
			{"zoneTo":"","doorTo":"","doorName":"Lon Lon Ranch"},
			{"zoneTo":"","doorTo":"","doorName":"Market Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Positioned near Lake Hylia"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto in fence by Lake Hylia"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto next to tree near Lake Hylia"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto near Gerudo Valley"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto Northwest of Lon Lon Ranch"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto under boulder west of Lake Hylia"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto under boulder next to Market entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto under boulder northwest of Market Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto near Kakariko Village"},
			{"zoneTo":"","doorTo":"","doorName":"Owl Drop Spot, Lake Hylia"},
			{"zoneTo":"","doorTo":"","doorName":"Unused Location"},
			{"zoneTo":"","doorTo":"","doorName":"Lon Lon Ranch, Southern Fence Jump"},
			{"zoneTo":"","doorTo":"","doorName":"Lon Lon Ranch, Western Fence Jump"},
			{"zoneTo":"","doorTo":"","doorName":"Lon Lon Ranch, Eastern Fence Jump"},
			{"zoneTo":"","doorTo":"","doorName":"Zora River, Water"},
			{"zoneTo":"","doorTo":"","doorName":"Lon Lon Ranch, Front Gate Jump"},
			{"zoneTo":"","doorTo":"","doorName":"Get Ocarina of Time"},
			{"zoneTo":"","doorTo":"","doorName":"After Impa Escort Cutscene"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Kakariko Village",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Hyrule Field"},
			{"zoneTo":"","doorTo":"","doorName":"Graveyard"},
			{"zoneTo":"","doorTo":"","doorName":"Bazaar"},
			{"zoneTo":"","doorTo":"","doorName":"Impa's House, Main Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto in town center"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto behind fence"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Village House, Boss's House"},
			{"zoneTo":"","doorTo":"","doorName":"Granny's Potion Shop"},
			{"zoneTo":"","doorTo":"","doorName":"?, Windmill"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Potion Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Shooting Gallery"},
			{"zoneTo":"","doorTo":"","doorName":"House of Skulltula"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Potion Shop, Back Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Nocturne Cutscene"},
			{"zoneTo":"","doorTo":"","doorName":"Owl Drop Spot, Death Mountain Crater, Owl Teleport"}
		],
		"hide":false,
		"children":["Kakariko Village (Bottom of the Well Entrance)","Kakariko Village (Death Mountain Trail Entrance)","Kakariko Village (Cow Heartpiece Entrance)"]
	},
	
	{"zone":"Kakariko Village (Cow Heartpiece Entrance)",
		"parent":"Kakariko Village",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Hyrule Field"},
			{"zoneTo":"","doorTo":"","doorName":"Graveyard"},
			{"zoneTo":"","doorTo":"","doorName":"Bazaar"},
			{"zoneTo":"","doorTo":"","doorName":"Impa's House, Cow Heartpiece Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Impa's House, Main Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto in town center"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto behind fence"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Village House, Boss's House"},
			{"zoneTo":"","doorTo":"","doorName":"Granny's Potion Shop"},
			{"zoneTo":"","doorTo":"","doorName":"?, Windmill"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Potion Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Shooting Gallery"},
			{"zoneTo":"","doorTo":"","doorName":"House of Skulltula"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Potion Shop, Back Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Nocturne Cutscene"},
			{"zoneTo":"","doorTo":"","doorName":"Owl Drop Spot, Death Mountain Crater, Owl Teleport"}
		],
		"hide":true,
		"children":["Kakariko Village (Bottom of the Well Entrance)","Kakariko Village (Death Mountain Trail Entrance)","Kakariko Village"]
	},
	
	{"zone":"Kakariko Village (Death Mountain Trail Entrance)",
		"parent":"Kakariko Village",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Hyrule Field"},
			{"zoneTo":"","doorTo":"","doorName":"Death Mountain Trail"},
			{"zoneTo":"","doorTo":"","doorName":"Graveyard"},
			{"zoneTo":"","doorTo":"","doorName":"Bazaar"},
			{"zoneTo":"","doorTo":"","doorName":"Impa's House, Main Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto in town center"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto behind fence"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Village House, Boss's House"},
			{"zoneTo":"","doorTo":"","doorName":"Granny's Potion Shop"},
			{"zoneTo":"","doorTo":"","doorName":"?, Windmill"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Potion Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Shooting Gallery"},
			{"zoneTo":"","doorTo":"","doorName":"House of Skulltula"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Potion Shop, Back Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Nocturne Cutscene"},
			{"zoneTo":"","doorTo":"","doorName":"Owl Drop Spot, Death Mountain Crater, Owl Teleport"}
		],
		"hide":true,
		"children":["Kakariko Village (Bottom of the Well Entrance)","Kakariko Village (Death Mountain Trail Entrance)","Kakariko Village","Kakariko Village (Cow Heartpiece Entrance)"]
	},
	
	{"zone":"Kakariko Village (Bottom of the Well Entrance)",
		"parent":"Kakariko Village",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Hyrule Field"},
			{"zoneTo":"","doorTo":"","doorName":"Graveyard"},
			{"zoneTo":"","doorTo":"","doorName":"Bazaar"},
			{"zoneTo":"","doorTo":"","doorName":"Bottom of the Well"},
			{"zoneTo":"","doorTo":"","doorName":"Impa's House, Main Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto in town center"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto behind fence"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Village House, Boss's House"},
			{"zoneTo":"","doorTo":"","doorName":"Granny's Potion Shop"},
			{"zoneTo":"","doorTo":"","doorName":"?, Windmill"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Potion Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Shooting Gallery"},
			{"zoneTo":"","doorTo":"","doorName":"House of Skulltula"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Potion Shop, Back Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Nocturne Cutscene"},
			{"zoneTo":"","doorTo":"","doorName":"Owl Drop Spot, Death Mountain Crater, Owl Teleport"}
		],
		"hide":true,
		"children":["Kakariko Village (Death Mountain Trail Entrance)","Kakariko Village","Kakariko Village (Cow Heartpiece Entrance)"]
	},

	{"zone":"Kakariko Graveyard",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Village"},
			{"zoneTo":"","doorTo":"","doorName":"Gravekeeper's Hut"},
			{"zoneTo":"","doorTo":"","doorName":"?, Dampe's Grave"},
			{"zoneTo":"","doorTo":"","doorName":"Grave with Shield"},
			{"zoneTo":"","doorTo":"","doorName":"Grave with Redead"},
			{"zoneTo":"","doorTo":"","doorName":"Royal Family's Tomb"}
		],
		"hide":false,
		"children":["Kakariko Graveyard (Shadow Temple Entrances)"]
	},
	{"zone":"Kakariko Graveyard (Shadow Temple Entrances)",
		"parent":"Kakariko Graveyard",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Village"},
			{"zoneTo":"","doorTo":"","doorName":"Shadow Temple"},
			{"zoneTo":"","doorTo":"","doorName":"Gravekeeper's Hut"},
			{"zoneTo":"","doorTo":"","doorName":"?, Dampe's Grave"},
			{"zoneTo":"","doorTo":"","doorName":"Grave with Shield"},
			{"zoneTo":"","doorTo":"","doorName":"Grave with Redead"},
			{"zoneTo":"","doorTo":"","doorName":"Royal Family's Tomb"},
			{"zoneTo":"","doorTo":"","doorName":"Nocturne Warp"},
			{"zoneTo":"","doorTo":"","doorName":"Shadow Temple Boss, Blue Warp"}
		],
		"hide":true,
		"children":["Kakariko Graveyard"]
	},

	{"zone":"Zora River",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Land Entrance, Hyrule Field"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto under boulder"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto near ladder"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto by entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Dropped top of Waterfall"},
			{"zoneTo":"","doorTo":"","doorName":"Zora's Domain"},
			{"zoneTo":"","doorTo":"","doorName":"Water Entrance, Hyrule Field"},
			{"zoneTo":"","doorTo":"","doorName":"Lost Woods"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Kokiri Forest",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"After Forest Medallion Cutscene"},
			{"zoneTo":"","doorTo":"","doorName":"Deku Tree"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto by Lost Woods"},
			{"zoneTo":"","doorTo":"","doorName":"Kokiri Forest Bridge"},
			{"zoneTo":"","doorTo":"","doorName":"Link's House"},
			{"zoneTo":"","doorTo":"","doorName":"Kokiri Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Know-it-all Brothers"},
			{"zoneTo":"","doorTo":"","doorName":"Lost Woods"},
			{"zoneTo":"","doorTo":"","doorName":"Spawn on Link's House"},
			{"zoneTo":"","doorTo":"","doorName":"House of Twins"},
			{"zoneTo":"","doorTo":"","doorName":"Mido's House"},
			{"zoneTo":"","doorTo":"","doorName":"Saria's House"},
			{"zoneTo":"","doorTo":"","doorName":"After Deku Tree Death Cutscene, Kokiri Forest"},
			{"zoneTo":"","doorTo":"","doorName":"Deku Sprout Cutscene"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Sacred Forest Meadow",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Lost Woods"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto by Lost Woods"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto by forest temple"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto in maze"},
			{"zoneTo":"","doorTo":"","doorName":"Minuet Warp"},
			{"zoneTo":"","doorTo":"","doorName":"Forest Temple Boss, Blue Warp"}
		],
		"hide":false,
		"children":["Sacred Forest Meadow (Forest Temple Entrance)"]
	},
	{"zone":"Sacred Forest Meadow (Forest Temple Entrance)",
		"parent":"Sacred Forest Meadow",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Lost Woods"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto by Lost Woods"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto by forest temple"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto in maze"},
			{"zoneTo":"","doorTo":"","doorName":"Forest Temple"},
			{"zoneTo":"","doorTo":"","doorName":"Minuet Warp"},
			{"zoneTo":"","doorTo":"","doorName":"Forest Temple Boss, Blue Warp"}
		],
		"hide":true,
		"children":["Sacred Forest Meadow"]
	},

	{"zone":"Lake Hylia",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Hyrule Field (Owl)"},
			{"zoneTo":"","doorTo":"","doorName":"Gerudo Valley"},
			{"zoneTo":"","doorTo":"","doorName":"Water Temple"},
			{"zoneTo":"","doorTo":"","doorName":"Fishing Pond"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto under tombstone"},
			{"zoneTo":"","doorTo":"","doorName":"Hyrule Field"},
			{"zoneTo":"","doorTo":"","doorName":"Lakeside Laboratory"},
			{"zoneTo":"","doorTo":"","doorName":"Serenade Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Zora's Domain"},
			{"zoneTo":"","doorTo":"","doorName":"Serenade Warp"},
			{"zoneTo":"","doorTo":"","doorName":"Water Temple Boss, Blue Warp"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Zora's Domain",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Zora River"},
			{"zoneTo":"","doorTo":"","doorName":"Eyeball Frog Timeout"},
			{"zoneTo":"","doorTo":"","doorName":"Zora's Fountain"},
			{"zoneTo":"","doorTo":"","doorName":"Lake Hylia"},
			{"zoneTo":"","doorTo":"","doorName":"Zora Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto near Zora's River"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Zora's Fountain",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Sapphire Cutscene Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Inside Jabu Jabu's Belly"},
			{"zoneTo":"","doorTo":"","doorName":"Zora's Domain"},
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Farore's Wind)"}, 
			{"zoneTo":"","doorTo":"","doorName":"SE corner facing fallen tree"}
		],
		"hide":false,
		"children":["Zora's Fountain (Ice Cavern Entrance)"]
	},
	{"zone":"Zora's Fountain (Ice Cavern Entrance)",
		"parent":"Zora's Fountain",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Sapphire Cutscene Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Inside Jabu Jabu's Belly"},
			{"zoneTo":"","doorTo":"","doorName":"Zora's Domain"},
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Farore's Wind)"},
			{"zoneTo":"","doorTo":"","doorName":"Ice Cavern"},
			{"zoneTo":"","doorTo":"","doorName":"SE corner facing fallen tree"}
		],
		"hide":true,
		"children":["Zora's Fountain"]
	},

	{"zone":"Gerudo Valley",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Thrown out of Gerudo Fortress, Caught without usable hookshot"},
			{"zoneTo":"","doorTo":"","doorName":"Triggers Fortress Loading Zone"},
			{"zoneTo":"","doorTo":"","doorName":"Gerudo Fortress"},
			{"zoneTo":"","doorTo":"","doorName":"Lake Hylia"},
			{"zoneTo":"","doorTo":"","doorName":"Carpenter's Tent"}
		],
		"hide":false,
		"children":["Gerudo Valley (Gerudo Fortress Side)"]
	},
	
	{"zone":"Gerudo Valley (Hyrule Field Side)",
		"parent":"Gerudo Valley",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Hyrule Field"},
			{"zoneTo":"","doorTo":"","doorName":"Lake Hylia"},
			{"zoneTo":"","doorTo":"","doorName":"Carpenter's Tent"}
		],
		"hide":true,
		"children":["Gerudo Valley"]
	},

	{"zone":"Lost Woods",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Kokiri Forest"},
			{"zoneTo":"","doorTo":"","doorName":"Sacred Forest Meadow"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto near Goron City"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto near Sacred Forest Meadow"},
			{"zoneTo":"","doorTo":"","doorName":"Forest Stage"},
			{"zoneTo":"","doorTo":"","doorName":"Mushroom Timeout (Adult)"},
			{"zoneTo":"","doorTo":"","doorName":"Start at the tree opposite of the main entrance"},
			{"zoneTo":"","doorTo":"","doorName":"??? placed west of Cojiro Guy map"},
			{"zoneTo":"","doorTo":"","doorName":"Exit point clockwise Sacred Forest Meadow exit"},
			{"zoneTo":"","doorTo":"","doorName":"Goron City"},
			{"zoneTo":"","doorTo":"","doorName":"Zora River"}
		],
		"hide":false,
		"children":[]
	},
	
	{"zone":"Kokiri Forest Bridge",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Kokiri Forest"},
			{"zoneTo":"","doorTo":"","doorName":"Hyrule Field"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Desert Colossus",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Haunted Wasteland"},
			{"zoneTo":"","doorTo":"","doorName":"Spirit Temple"},
			{"zoneTo":"","doorTo":"","doorName":"After Requiem Cutscene"},
			{"zoneTo":"","doorTo":"","doorName":"Requiem Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Nabooru Capture Cutscene Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Nayru's Love)"},
			{"zoneTo":"","doorTo":"","doorName":"Spirit Temple Boss, Blue Warp"}
		],
		"hide":false,
		"children":["Desert Colossus (Mirror Shield Entrance)","Desert Colossus (Gauntlets Entrance)"]
	},
	{"zone":"Desert Colossus (Mirror Shield Entrance)",
		"parent":"Desert Colossus",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Haunted Wasteland"},
			{"zoneTo":"","doorTo":"","doorName":"Spirit Temple"},
			{"zoneTo":"","doorTo":"","doorName":"After Requiem Cutscene"},
			{"zoneTo":"","doorTo":"","doorName":"Requiem Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Nabooru Capture Cutscene Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Nayru's Love)"},
			{"zoneTo":"","doorTo":"","doorName":"Spirit Temple Boss, Blue Warp"},
			{"zoneTo":"","doorTo":"","doorName":"Spirit Temple, Mirror Shield Entrance"}
		],
		"hide":true,
		"children":["Desert Colossus","Desert Colossus (Gauntlets Entrance)"]
	},
	{"zone":"Desert Colossus (Gauntlets Entrance)",
		"parent":"Desert Colossus",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Haunted Wasteland"},
			{"zoneTo":"","doorTo":"","doorName":"Spirit Temple"},
			{"zoneTo":"","doorTo":"","doorName":"After Requiem Cutscene"},
			{"zoneTo":"","doorTo":"","doorName":"Requiem Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Nabooru Capture Cutscene Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Nayru's Love)"},
			{"zoneTo":"","doorTo":"","doorName":"Spirit Temple Boss, Blue Warp"},
			{"zoneTo":"","doorTo":"","doorName":"Spirit Temple, Gauntlets Entrance"},
		],
		"hide":true,
		"children":["Desert Colossus","Desert Colossus (Mirror Shield Entrance)"]
	},

	
	{"zone":"Gerudo Fortress",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Gerudo Valley"},
			{"zoneTo":"","doorTo":"","doorName":"A"},
			{"zoneTo":"","doorTo":"","doorName":"B"},
			{"zoneTo":"","doorTo":"","doorName":"C"},
			{"zoneTo":"","doorTo":"","doorName":"D"},
			{"zoneTo":"","doorTo":"","doorName":"E"},
			{"zoneTo":"","doorTo":"","doorName":"F"},
			{"zoneTo":"","doorTo":"","doorName":"G"},
			{"zoneTo":"","doorTo":"","doorName":"H"},
			{"zoneTo":"","doorTo":"","doorName":"I"},
			{"zoneTo":"","doorTo":"","doorName":"J"},
			{"zoneTo":"","doorTo":"","doorName":"K"},
			{"zoneTo":"","doorTo":"","doorName":"L"},
			{"zoneTo":"","doorTo":"","doorName":"M"},
			{"zoneTo":"","doorTo":"","doorName":"N"},
			{"zoneTo":"","doorTo":"","doorName":"After Horseback Archery, Gerudo Fortress"},
			{"zoneTo":"","doorTo":"","doorName":"Captured First Time with Hookshot"},
			{"zoneTo":"","doorTo":"","doorName":"Captured Second Time"}
		],
		"hide":false,
		"children":["Gerudo Fortress (Haunted Wasteland Entrance)"]
	},
	{"zone":"Gerudo Fortress (Haunted Wasteland Entrance)",
		"parent":"Gerudo Fortress",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Gerudo Valley"},
			{"zoneTo":"","doorTo":"","doorName":"A"},
			{"zoneTo":"","doorTo":"","doorName":"B"},
			{"zoneTo":"","doorTo":"","doorName":"C"},
			{"zoneTo":"","doorTo":"","doorName":"D"},
			{"zoneTo":"","doorTo":"","doorName":"E"},
			{"zoneTo":"","doorTo":"","doorName":"F"},
			{"zoneTo":"","doorTo":"","doorName":"G"},
			{"zoneTo":"","doorTo":"","doorName":"H"},
			{"zoneTo":"","doorTo":"","doorName":"I"},
			{"zoneTo":"","doorTo":"","doorName":"J"},
			{"zoneTo":"","doorTo":"","doorName":"K"},
			{"zoneTo":"","doorTo":"","doorName":"L"},
			{"zoneTo":"","doorTo":"","doorName":"M"},
			{"zoneTo":"","doorTo":"","doorName":"N"},
			{"zoneTo":"","doorTo":"","doorName":"Haunted Wasteland"},
			{"zoneTo":"","doorTo":"","doorName":"After Horseback Archery, Gerudo Fortress"},
			{"zoneTo":"","doorTo":"","doorName":"Captured First Time with Hookshot"},
			{"zoneTo":"","doorTo":"","doorName":"Captured Second Time"}
		],
		"hide":true,
		"children":["Gerudo Fortress"]
	},

	{"zone":"Haunted Wasteland",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Desert Colossus"},
			{"zoneTo":"","doorTo":"","doorName":"Crashes (Bad Map)"}
		],
		"hide":false,
		"children":["Haunted Wasteland (Gerudo Fortress)"]
	},
	
	
	{"zone":"Haunted Wasteland (Gerudo Fortress)",
		"parent":"Haunted Wasteland",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Gerudo Fortress"},
			{"zoneTo":"","doorTo":"","doorName":"Crashes (Bad Map)"}
		],
		"hide":true,
		"children":["Haunted Wasteland"]
	},

	{"zone":"Hyrule Castle",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Market Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Castle Courtyard"},
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Din's Fire)"},
			{"zoneTo":"","doorTo":"","doorName":"Guard Capture (Outside)"},
			{"zoneTo":"","doorTo":"","doorName":"Castle Courtyard, Caught by guard"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Ganon's Castle",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Market Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Double Hearts)"},
			{"zoneTo":"","doorTo":"","doorName":"Crashes (Bad Map)"},
			{"zoneTo":"","doorTo":"","doorName":"Castle Courtyard, Caught by guard"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Death Mountain Trail",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Village"},
			{"zoneTo":"","doorTo":"","doorName":"Goron City"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto near Goron City"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto under boulder on trail"},
			{"zoneTo":"","doorTo":"","doorName":"Death Mountain Crater"},
			{"zoneTo":"","doorTo":"","doorName":"Dodongo's Cavern"},
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Magic)"},
			{"zoneTo":"","doorTo":"","doorName":"Goron Ruby Cutscene"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Death Mountain Crater",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Grotto near Death Mountain Trail"},
			{"zoneTo":"","doorTo":"","doorName":"Death Mountain Trail"},
			{"zoneTo":"","doorTo":"","doorName":"Goron City"},
			{"zoneTo":"","doorTo":"","doorName":"Fire Temple"},
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Double Magic)"},
			{"zoneTo":"","doorTo":"","doorName":"Bolero Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Fire Temple Boss, Blue Warp"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Goron City",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Death Mountain Trail"},
			{"zoneTo":"","doorTo":"","doorName":"Death Mountain Crater"},
			{"zoneTo":"","doorTo":"","doorName":"Goron Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto past lava"}
		],
		"hide":false,
		"children":["Goron City (Kokiri Forest Entrance)"]
	},
	
	{"zone":"Goron City (Kokiri Forest Entrance)",
		"parent":"Goron City",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Death Mountain Trail"},
			{"zoneTo":"","doorTo":"","doorName":"Death Mountain Crater"},
			{"zoneTo":"","doorTo":"","doorName":"Goron Shop"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto past lava"},
			{"zoneTo":"","doorTo":"","doorName":"Kokiri forest entrance"}
		],
		"hide":true,
		"children":["Goron City"]
	},

	{"zone":"Lon Lon Ranch",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Hyrule Field"},
			{"zoneTo":"","doorTo":"","doorName":"Epona's Song Cutscene"},
			{"zoneTo":"","doorTo":"","doorName":"Grotto at far southeast of ranch"},
			{"zoneTo":"","doorTo":"","doorName":"Near South Gate"},
			{"zoneTo":"","doorTo":"","doorName":"Near West Gate"},
			{"zoneTo":"","doorTo":"","doorName":"Talon's House"},
			{"zoneTo":"","doorTo":"","doorName":"Stables"},
			{"zoneTo":"","doorTo":"","doorName":"Pay Ingo to Ride"},
			{"zoneTo":"","doorTo":"","doorName":"Beat Ingo Both Times"},
			{"zoneTo":"","doorTo":"","doorName":"You're too slow!"},
			{"zoneTo":"","doorTo":"","doorName":"??? (Near Ingo/Malon)"},
			{"zoneTo":"","doorTo":"","doorName":"Ranch Buildings, Back Tower"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Fire Temple",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Death Mountain Crater"},
			{"zoneTo":"","doorTo":"","doorName":"Outside Boss Door, Fire Temple Boss, Secret Map #0"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Death"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Save"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Forest Temple",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Sacred Forest Meadow"},
			{"zoneTo":"","doorTo":"","doorName":"Outside Boss Door, Forest Temple Boss, Secret Map #0"},
			{"zoneTo":"","doorTo":"","doorName":"Ceiling Crush room"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Death"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Save"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Outside Temple of Time - Child Day",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Market Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Temple of Time"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Outside Temple of Time - Child Night",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Market Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Temple of Time"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Outside Temple of Time - Adult",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Market Entrance"},
			{"zoneTo":"","doorTo":"","doorName":"Temple of Time"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Tower Collapse",
		"parent":"",
		"doors":[],
		"hide":false,
		"children":["TCAB","TCBC","TCCD","TCDE","TCEF","TCFG","TCGG","TCGA"]
	},
	
	{"zone":"TCGA",
		"parent":"Tower Collapse",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Ganondorf Death Cutscene"},
			{"zoneTo":"","doorTo":"","doorName":"A (Exterior)"}
		],
		"hide":true,
		"children":["TCAB","TCBC","TCCD","TCDE","TCEF","TCFG","TCGG"]
	},

	{"zone":"TCAB",
		"parent":"Tower Collapse",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"A (Interior)"},
			{"zoneTo":"","doorTo":"","doorName":"B (Interior)"}
		],
		"hide":true,
		"children":["TCBC","TCCD","TCDE","TCEF","TCFG","TCGG","TCGA"]
	},

	{"zone":"TCBC",
		"parent":"Tower Collapse",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"B (Exterior)"},
			{"zoneTo":"","doorTo":"","doorName":"C (Exterior)"}
		],
		"hide":true,
		"children":["TCAB","TCCD","TCDE","TCEF","TCFG","TCGG","TCGA"]
	},

	{"zone":"TCCD",
		"parent":"Tower Collapse",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"C (Interior)"},
			{"zoneTo":"","doorTo":"","doorName":"D (Interior)"}
		],
		"hide":true,
		"children":["TCAB","TCBC","TCDE","TCEF","TCFG","TCGG","TCGA"]
	},

	{"zone":"TCDE",
		"parent":"Tower Collapse",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"D (Exterior)"},
			{"zoneTo":"","doorTo":"","doorName":"E (Exterior)"}
		],
		"hide":true,
		"children":["TCAB","TCBC","TCCD","TCEF","TCFG","TCGG","TCGA"]
	},

	{"zone":"TCEF",
		"parent":"Tower Collapse",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"E (Interior)"},
			{"zoneTo":"","doorTo":"","doorName":"F (Interior)"}
		],
		"hide":true,
		"children":["TCAB","TCBC","TCCD","TCEF","TCFG","TCGG","TCGA"]
	},

	{"zone":"TCFG",
		"parent":"Tower Collapse",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"F (Exterior)"},
			{"zoneTo":"","doorTo":"","doorName":"G (Exterior)"}
		],
		"hide":true,
		"children":["TCAB","TCBC","TCCD","TCDE","TCEF","TCGG","TCGA"]
	},

	{"zone":"TCGG",
		"parent":"Tower Collapse",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"G (Interior)"},
			{"zoneTo":"","doorTo":"","doorName":"H/Ganon"}
		],
		"hide":true,
		"children":["TCAB","TCBC","TCCD","TCDE","TCEF","TCFG","TCGA"]
	},

	{"zone":"Stables",
		"parent":"Lon Lon Ranch Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Stables"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Kakariko Buildings",
		"parent":"Kakariko Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Boss's House"}
		],
		"hide":false,
		"children":["Bazaar (Adult)","Granny's Potion Shop","Shooting Gallery (Adult)","House of Skulltula","Impa's House (Main Entrance)","Impa's House (Cow Heartpiece Entrance)","Kakariko Potion Shop"]
	},

	{"zone":"Inside Jabu Jabu's Belly Boss",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Inside Jabu Jabu's Belly"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Fire Temple Boss",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Fire Temple"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Gravekeeper's Hut",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Graveyard"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Great Fairy's Fountain",
		"parent":"Great Fairy's Fountain",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Magic)"}
		],
		"hide":false,
		"children":["Great Fairy's Fountain (Nayru's Love)","Great Fairy's Fountain (Farore's Wind)","Great Fairy's Fountain (Double Hearts)","Great Fairy's Fountain (Din's Fire)","Great Fairy's Fountain (Double Magic)"]
	},

	{"zone":"Great Fairy's Fountain (Double Magic)",
		"parent":"Great Fairy's Fountain",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Double Magic)"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Great Fairy's Fountain (Din's Fire)",
		"parent":"Great Fairy's Fountain",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Din's Fire)"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Great Fairy's Fountain (Double Hearts)",
		"parent":"Great Fairy's Fountain",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Double Hearts)"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Great Fairy's Fountain (Farore's Wind)",
		"parent":"Great Fairy's Fountain",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Farore's Wind)"}
		],
		"hide":true,
		"children":[]
	},


	{"zone":"Great Fairy's Fountain (Nayru's Love)",
		"parent":"Great Fairy's Fountain",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Great Fairy's Fountain (Nayru's Love)"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Grave with Redead",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Graveyard"}
		],
		"hide":false,
		"children":[]
	},
	

	{"zone":"Goron Shop",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Goron City"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Zora Shop",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Zora's Domain"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Kakariko Potion Shop",
		"parent":"Kakariko Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Potion Shop (Main Entrance)"},
			{"zoneTo":"","doorTo":"","doorName":"Kakariko Potion Shop (Back Entrance)"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Market Potion Shop",
		"parent":"Market Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Market Potion Shop"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Bombchu Shop",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"??? (Back Alley)"},
			{"zoneTo":"","doorTo":"","doorName":"Back Alley, (Left)"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Puppy Woman's House",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Back Alley, (Left)"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Impa's House (Cow Heartpiece Entrance)",
		"parent":"Kakariko Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Impa's House (Cow Heartpiece Entrance)"}
		],
		"hide":true,
		"children":[]
	},
	
	{"zone":"Impa's House (Main Entrance)",
		"parent":"Kakariko Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Impa's House (Main Entrance)"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Carpenter's Tent",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Gerudo Valley"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Zelda's Courtyard",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Castle Courtyard"},
			{"zoneTo":"","doorTo":"","doorName":"Triforce Legend Cutscene"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Dodongo's Cavern Boss",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Dodongo's Cavern"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Deku Tree Boss",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Deku Tree"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Shadow Temple Boss",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Shadow Temple"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Water Temple Boss",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Water Temple"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Ganon's Tower Climb",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Outside Boss Door"},
			{"zoneTo":"","doorTo":"","doorName":"Facing Boss Key Door"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Ganondorf Boss Room",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Ganon's Tower Climb"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Back Alley Village House",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Back Alley Guy's House, Back Alley, (Right)"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"? (From Dampe's Grave)",
		"parent":"?",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Dampe's Grave, Graveyard"},
			{"zoneTo":"","doorTo":"","doorName":"Windmill, Kakariko Village"},
			{"zoneTo":"","doorTo":"","doorName":"Windmill After Song of Storms?"}
		],
		"hide":true,
		"children":["?"]
	},

	{"zone":"?",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Windmill, Kakariko Village"},
			{"zoneTo":"","doorTo":"","doorName":"Windmill After Song of Storms?"}
		],
		"hide":false,
		"children":["? (From Dampe's Grave)"]
	},

	{"zone":"Fishing Pond",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Lake Hylia"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Inside Ganon's Castle",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Ganon's Tower Climb"},
			{"zoneTo":"","doorTo":"","doorName":"Clear Forest Trial, Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Death, Forest Trial, Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Clear Water Trial, Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Death, Water Trial, Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Clear Shadow Trial, Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Death, Shadow Trial, Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Clear Fire Trial, Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Death, Fire Trial, Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Clear Light Trial, Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Death, Light Trial, Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Clear Spirit Trial, Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Death, Spirit Trial, Inside Ganon's Castle"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Death"},
			{"zoneTo":"","doorTo":"","doorName":"Zone Save"}
		],
		"hide":false,
		"children":[]
	},
	
	{"zone":"Thieves' Hideout",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"B"},
			{"zoneTo":"","doorTo":"","doorName":"C"},
			{"zoneTo":"","doorTo":"","doorName":"Captured First Time with Hookshot"},
			{"zoneTo":"","doorTo":"","doorName":"Captured Second Time"}
			
		],
		"hide":false,
		"children":["Thieves' Hideout (L,M,N)","Thieves' Hideout (J,K)","Thieves' Hideout (H,I)","Thieves' Hideout (D,E,F,G)"]
	},

	{"zone":"Thieves' Hideout (D,E,F,G)",
		"parent":"Thieves' Hideout",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"D"},
			{"zoneTo":"","doorTo":"","doorName":"E"},
			{"zoneTo":"","doorTo":"","doorName":"F"},
			{"zoneTo":"","doorTo":"","doorName":"G"},
			{"zoneTo":"","doorTo":"","doorName":"Captured First Time with Hookshot"},
			{"zoneTo":"","doorTo":"","doorName":"Captured Second Time"}
		],
		"hide":true,
		"children":["Thieves' Hideout","Thieves' Hideout (H,I)","Thieves' Hideout (J,K)","Thieves' Hideout (L,M,N)"]
	},

	{"zone":"Thieves' Hideout (H,I)",
		"parent":"Thieves' Hideout",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"H"},
			{"zoneTo":"","doorTo":"","doorName":"I"},
			{"zoneTo":"","doorTo":"","doorName":"Captured First Time with Hookshot"},
			{"zoneTo":"","doorTo":"","doorName":"Captured Second Time"}
		],
		"hide":true,
		"children":["Thieves' Hideout","Thieves' Hideout (D,E,F,G)","Thieves' Hideout (J,K)","Thieves' Hideout (L,M,N)"]
	},

	{"zone":"Thieves' Hideout (J,K)",
		"parent":"Thieves' Hideout",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"J"},
			{"zoneTo":"","doorTo":"","doorName":"K"},
			{"zoneTo":"","doorTo":"","doorName":"Captured First Time with Hookshot"},
			{"zoneTo":"","doorTo":"","doorName":"Captured Second Time"}
		],
		"hide":true,
		"children":["Thieves' Hideout","Thieves' Hideout (D,E,F,G)","Thieves' Hideout (H,I)","Thieves' Hideout (L,M,N)"]
	},

	{"zone":"Thieves' Hideout (L,M,N)",
		"parent":"Thieves' Hideout",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"L"},
			{"zoneTo":"","doorTo":"","doorName":"M"},
			{"zoneTo":"","doorTo":"","doorName":"N"},
			{"zoneTo":"","doorTo":"","doorName":"Captured First Time with Hookshot"},
			{"zoneTo":"","doorTo":"","doorName":"Captured Second Time"}
		],
		"hide":true,
		"children":["Thieves' Hideout","Thieves' Hideout (D,E,F,G)","Thieves' Hideout (H,I)","Thieves' Hideout (J,K)"]
	},

	{"zone":"Bombchu Bowling Alley",
		"parent":"Market Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Bombchu Bowling Alley"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"Beshitu",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"???"}
		],
		"hide":false,
		"children":[]
	},

	{"zone":"Happy Mask Shop",
		"parent":"Market Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Happy Mask Shop"}
		],
		"hide":true,
		"children":[]
	},

	{"zone":"House of Skulltula",
		"parent":"Kakariko Buildings",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"House of Skulltula"}
		],
		"hide":true,
		"children":[]
	},


	{"zone":"Warp Songs",
		"parent":"",
		"doors":[
			{"zoneTo":"","doorTo":"","doorName":"Sun Song"},
			{"zoneTo":"","doorTo":"","doorName":"Minuet of Forest"},
			{"zoneTo":"","doorTo":"","doorName":"Bolero of Fire"},
			{"zoneTo":"","doorTo":"","doorName":"Serenade of Water"},
			{"zoneTo":"","doorTo":"","doorName":"Requiem of Spirit"},
			{"zoneTo":"","doorTo":"","doorName":"Prelude of Light"}
		],
		"hide":false,
		"children":[],
	}
];