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

}

// Define the videos used in the game.
var videos = {

}

// Define the images used in the game.
var images = {

}

// Define the backgrounds for each scene.
var scenes = {
    "bed": "bedroom.png"
}

// Define the Characters
var characters = {
    "mc":{
	"Name": "Emily",
	"Color": "#5bcaff"
    },

    "mom":{
	"Name": "Mom",
	"Color": "#5bcaff"
    }
}

var script = {
    "Start":[

	"play music dreary loop",
	"mc ...?",
	"I open my eyes to the usual darkness.",
	"What time is it?",
	"Where's mom?",
	"mom Oh, Emily, you're up? Good Morning, try and get ready for breakfast.",
	"Mother calls me from the kitchen.",
	"Ah, I see...it's morning.",
	"scene bed",

	{"Choice":{
	    "Test1":{
		"Text": "test",
		"Do": "jump Yes"
	    },
	    "Test2":{
		"Text": "test",
		"Do": "jump No" 
	    }
	}}
    ],

    "Yes":[

	"h That's awesome!",
	"h Then you are ready to go ahead and create an amazing Game!",
	"h I can't wait to see what story you'll tell!",
	"end"
    ],

    "No":[

	"h You can do it now.",

	"display message Help",

	"h Go ahead and create an amazing Game!",
	"h I can't wait to see what story you'll tell!",
	"end"
    ]
}
