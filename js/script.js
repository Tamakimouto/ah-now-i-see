// Define the messages used in the game.
var messages = {
    "Help":{
	"Title": "Help",
	"Subtitle": "Some useful Links",
	"Message":"<p><a href='http://monogatari.hyuchia.com/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='http://monogatari.hyuchia.com/demo/'>Demo</a> - A simple Demo.</p>"
    }
}

// Define the music used in the game.
var music = {
    "dreary": "dreary.mp3"
}

// Define the voice files used in the game.
var voice = {

}

// Define the sounds used in the game.
var sound = {
    "bird": "crow.mp3",
    "water": "water.mp3"
}

// Define the videos used in the game.
var videos = {

}

// Define the images used in the game.
var images = {

}

// Define the backgrounds for each scene.
var scenes = {
    "bed": "bedroom.png",
    "bedroom": "r_bedroom.png",
    "bath": "bathroom.jpg",
    "empty": "empty.jpg"
}

// Define the Characters
var characters = {
    "mc":{
	"Name": "Emily",
	"Color": "#5bcaff"
    },

    "dad":{
	"Name": "Richard",
	"Color": "#5bcaff"
    },

    "siri":{
	"Name": "Siri",
	"Color": "blue"
    },
}

var script = {
    "Start":[

	"play music dreary loop",
	"mc ...?",
	"I open my eyes to the usual darkness.",
	"What time is it?",
	"Where's Father?",
	"dad EMILY, WHAT THE FUCK ARE YOU DOIN?! HURRY UP THE HELL UP!",
	"Father calls me from the kitchen.",
	
	"scene bed",
	"Ah, now I see...it's morning.",
	"I debate whether or not to respond to Father, but nothing good has ever come of it.",
	"I assume he can tell by the sounds that I'm up.",
	"A moment passes by as I reflect on my suroundings.",
	"I live in a rural neighborhood, the sun is shining bright and the birds are humming.",
	"It's another beautiful day...",
	"... Only the mentally ill would say something like that.",
	"Of course that's not how things are...",
	"play sound bird",
	
	"scene bedroom",
	"mc We don't live in that kind of happy-go-lucky world.",
	"mc Though, we do actually have birds outside...",
	"Getting out of bed, I slowly make my way to the bathroom.",
	"scene empty",
	"mc Now... where's the sink?",
	"I feel around the surroundings in an attempt find where I am.",
	"Ah...Now I see, here it is.",
	
	"scene bath",
	"The water turns on and I once again begin my daily ritual.",
	"play sound water loop",
	"While I'm washing my face...",
	"mc HEY SIRI! ...",
	"siri *Beep Boop*",
	"I hear Siri's beep letting me know that heard me.",
	"mc WHAT TIME IS IT?!",
	"siri At the tone, the time will be 5:41 AM ... beep.",
	"mc Seems like I'm almost late for school...",
	"I've just about stopped caring about such things for a while now.",
	
	
	

	{"Choice":{
	    "Test1":{
		"Text": "Does it work?",
		"Do": "jump Yes"
	    },
	    "Test2":{
		"Text": "Does it not work?",
		"Do": "jump No" 
	    }
	}}
    ],

    "Yes":[

	"Good, Here ends the demo",
	"end"
    ],

    "No":[

	"mc You... You LIAR!",
	"end"
    ]
}
