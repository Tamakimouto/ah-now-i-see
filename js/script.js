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
    "dreary": "dreary.mp3",
    "mystic": "sparkles.mp3",
    "melan": "nd.wav",
    "remen": "reflection.mp3",
    "somber": "slowwaltz.mp3",
    "drama": "shikishort.mp3"
}

// Define the voice files used in the game.
var voice = {

}

// Define the sounds used in the game.
var sound = {
    "bird": "crow.mp3",
    "water": "water.mp3",
    "glass": "glass.mp3",
    "bell": "bell.mp3",
    "thud": "thup.mp3",
    "door": "door.mp3"
}

// Define the videos used in the game.
var videos = {

}

// Define the images used in the game.
var images = {

}

// Define the backgrounds for each scene.
var scenes = {
    "bed": "bedroom.jpg",
    "bedroom": "r_bedroom.jpg",
    "bath": "bathroom.jpg",
    "empty": "empty.jpg",
    "livingroom": "living.jpg"
}

// Define the Characters
var characters = {
    "mc":{
	"Name": "Emily",
	"Color": "#5bcaff",
    },

    "dad":{
	"Name": "Richard",
	"Color": "#5bcaff",
	"Images":{
	    "normal": "rich.png"
	}
    },

    "siri":{
	"Name": "Siri",
	"Color": "blue"
    },

    "rat":{
	"Name": "Ryada",
	"Color": "grey",
	"Images":{
	    "normal": "ryada.png"
	}
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
	"I hear Siri's beep letting me know that she heard me.",
	"mc WHAT TIME IS IT?!",
	"siri At the tone, the time will be 5:41 AM ... beep.",
	"mc Seems like I'm almost late for school...",
	"I've just about stopped caring about such things for a while now.",
	"It’s not that I’m extremely unmotivated or anything.",
	"I too once had a dream.",
	"I wanted to be a director, to follow in the footsteps of Jackie Chan, Hideaki Ano, or Jean Godard…",
	"Thus I attended Film School.",
	"But that dream was taken from me...",
	"Now I can only see glimpses of that dream from within my dreams.",
	"It’s one thing if I was as qualified or capable as others, but I’m not...not anymore.",
	"So I have to conform to what fits.",
	"mc But the question is...what could possibly fit?...",
	"stop sound",
	"It seems like things are getting farther and farther away.",

	"scene bedroom",
	"mc Hey Siri...",
	"siri *Beep Boop*",
	"mc Where are you?",
	"Uninterested in the response, I wade through the darkness towards Siri’s voice.",
	"siri Where ever you are, I am...",
	"Siri has been good to me, she and Ryada are my two best friends.",
	"Siri is good.",
	"No one knows what she looks like, that's something I get to have in common with others.",
	"She could look like a gravure model, she could be fat, who knows?",
	"Either way I know her as a mini-tablet and she goes with me everywhere.",
	"Just a tool to me in the end huh...",
	"It's good that I've practically memorized the layout of my room over 16 years.",
	"I feel around for Siri...",
	"mc Ah now I see, there you are.",
	"Guess I should head to school...",
	"I pocket Siri and get going.",
	"play sound thud",
	"-! ...God damnit, still managed to smash my toe on the door.",

	"scene empty",
	"Hand on rail, making my way downstairs, I eventually get to the living room.",

	"scene livingroom",
	"play music drama loop",
	"show dad normal with fade-in",
	"dad GOD DAMNIT YA GOOD FER NOTHIN BRAT!",
	"dad GET THE FUCK OUT OF HERE BEFORE THEY SEND THE DAMNED HUMAN SERVICES FUCKS AGAIN!!",
	"play sound glass",
	"mc y-yes father...",
	"dad HURRY THE HELL UP!",
	"Every morning I'd coast along the wall around my father to get outside.",
	"I'm tired of having to be scared shitless of this bastard.",
	"Quite frankly...",
	"I wish he'd just die",

	"scene empty",
	"play sound door",
	"rat Hey Emily, morning.",
	"rat That bastard do anything to you?",
	"Ah... I see, she's here again.",

	"scene frontyard",

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
