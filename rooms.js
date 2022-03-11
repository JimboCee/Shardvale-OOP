var rooms = {
    "start": {
        "description": "You wake up in a dark, cold Dungeon. You can't see for a few feet around you. A foul ichor reaches your nostrils and you hold in whatever you ate before you ended up down here. To the <b>West</b>, you see a small <i>Torch</i>. To the <b>East</b>, you see the faint outline of a figure, but can't quite make out any details without a light source.",
        "directions": {
            "east": "gary02",
            "west": "dungeontorch"
            
        }
    },
    "dungeonTorch": {
        "description": "You grasp around in the darkness and find a <i>Torch</i> fixed to the wall. With some effort you are able to restart the embers and use it to survey the area.<br> You wave the torch, illuminating a dark, damp cell. Moss has grown rampant, free from disturbance for years. You can see a door leading out of the Dungeon. To the <b>West</b> the figure becomes more easy to see in the gloom, but you'll have to conquer your fears and investigate...",
        "directions": {
            "east": "gary01"
            
        }
    },
    "gary01": {
        "description": "Using the <b>Torch</b> to light the room, you see what looks to be an unassuming Skeleton, most likely the remains of the last poor soul down here. As you look away, it springs to life!<br> The Skeleton rattles inquisitively, motioning at its neck bone before furiously pointing at a boulder, rattling encouragingly",
        "directions": {
            "south": "start",
            "north": "hallway01"
        }
    },
    "gary02": {
        "description": "Is that a... Skeleton? I can't see much down here, I should really find a <i>Light Source</i> to see what it is.",
        "directions": {
            "west": "dungeonTorch"
            
        }
    },
    "hallway01": {
        "description": "The Skeleton rattles with glee, before moving a small boulder away from what seems to be a crawlspace in the aged brickwork. You decide that the Skeleton must be looking for <i>Something</i> and decide to keep that in mind as you crawl through a small opening in the Dungeon wall. You alight a spiral Staircase that seems to go on forever, finding yourself in a Hallway. Heavy flagstones cover the floor. Bookcases line the walls, carrying dusty, heavy volumes written in languages you've never seen before. There is a heavy door at the end of the Hall. You can see a crude note nailed to the door - 'KEEP OUT! Doing Wizard stuff. Frank (Wizard)",
        "directions": {
            "north": "wizard01",
            "east": "book02"
            
        }
    },
    "wizard01": {
        "description": "You ignore the note on the door (What even <i>IS</i> 'Wizard Stuff'?), making your way into the room at the end of the hallway. The first thing you notice is the smell - it envelops the room, while potions and unmarked fluids bubble and react fervently. A figure approaches you<br> 'Hello there! How can I help you?' You explain waking up in the dungeon, and the Skeletons impassioned plea.<br> The Wizard grumbles to himself and walks away, he clearly has something on his mind",
        "directions": {
            "south": "hallway01"
        }
    },
    "wizard02": {
        "description": "You ignore the note on the door; What even <i>IS</i> 'Wizard Stuff'? - Making your way into the room at the end of the hallway. The first thing you notice is the smell - it envelops the room, while potions and unmarked fluids bubble and react fervently. A figure approaches you<br> 'Hello there! How can I help you? The Wizard squints to get a better look at you, before noticing the book-shaped bulge poking from your abdomen. 'Is that.... my book?' As the Wizard lunges forward, a small <i>Amulet</i> tumbles out of his sleeve.",
        "directions": {
            "south": "endNoAmu",
            "north": "amu01"
        }
    },
    "book02": {
        "description": "You approach one of the shelves, running your finger along the dusty tomes. As you run your finger over one in particular, you feel a strange sensation course through your body. Whispers of a thousand ages enter your conscious. You feel a bizarre elation, as if everything in your life has led to this moment. You take the <i>Book</i> and hurriedly stuff it under your shirt. Why are we here again? Oh yes, Wizard.<br>Head to the <b> North</b> with your fancy book and see the Wizard wants",
        "directions": {
            "north": "wizard02"
            
        }
    },
    "amu01": {
        "description": "You remember the Skeletons' impassioned, percussive pleas and swipe the <b>Amulet</b> before making an about turn and sprinting out of the Wizards' study. The Wizard seems engrossed by the book you surrendered in fear of his bearded assault. Probably best not to bother him, you think to yourself as you stare down the staircase leading back to the Dungeon",
        "directions": {
            "south": "dungeonReturn"
        }
    },
    "dungeonReturn": {
        "description": "You follow the staircase back to the <i>Dungeon</i>...<br> The Skeleton is caught by surprise on your arrival, leaping to its bony limbs, seemingly interested by your return and any accoutrements you found in your absence",
        "directions": {
            "east": "endAmu"
            
        }
    },
    "endAmu": {
        "description": "The Skeleton points at your pocket, sensing there is something it might be interested in. You take the Amulet and hand it to the Skeleton. He places it around his neck...<br> Greetings!! I thought I'd never be able to speak again!' He introduces himself as Gary, a peculiar name. Perhaps he's from a distant land?'That Wizard only seems to care about those blasted books! I used to own this Amulet, but he stole it off me! He mentioned something about the black market? Is that the same as a regular market, but it's only open at night?<br> The Skeleton continues 'This Amulet lets me speak to humans! Now I've got it, I can tell you about this hoard of treasure! It's not far from here, I mean it's literally right there' Gary makes a gesture as if to exemplify the distance, while making it seem its not that far at all. I guess it's better than sitting around in this Dungeon... <i>Quest Complete! - 'It's all Bones to me' - 50 XP! - Items Gained - 0 - Items Lost - Amulet of Bonespeak ( -> Gary)",
        "directions": {
            
            
        }
    },
    "endNoAmu": {
        "description": "The Skeleton celebrates your return! It seems that it's been waiting for you to come back with <i>Something</i>. On realising you have returned to the Dungeon empty handed, the Skeleton takes a seat, deflated. I hope you know how to speak Skeleton, because unless you feel ready to see that Wizard again, he's the only company you'll have...",
        "directions": {
                       
        }
    },
    "hallway03": {
        "description": "You pocket the Amulet, remembering the charades pulled by your Bony friend in the Dungeon before high-tailing it out of the Wizard's study. The Book enraptures the Wizard, he shouldn't be a problem now.<br> I should get back to the <b>Dungeon</b>",
        "directions": {
            "south": "dungeonReturn"
            
        }
    }
}