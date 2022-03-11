class Room {
    constructor (name, _description){
        this._name = name;
        this._description = _description;
        this._linkedRooms = {}
    }
    
    linkRoom(Direction, Room){
        this._linkedRooms[Direction] = Room;

    }

    get name() {
        return this._name;
    }
    
    get description() {
        return this._description
        
    }

    move(Direction){
        if (Direction in this._linkedRooms) {
            return this._linkedRooms[Direction]
        } else {
            alert("You can't go that way!")
            return this;
        }
    }

    
}

class Character{
    constructor(name, description, conversation){
        this._name = name
        this._description = description;
        this._conversation = conversation;
    }

    get name(){
        return this._name;
    }

    get description(){
        return this._description;
    }

    get conversation(){
        return this._conversation;
    }

    set name(value) {
        if (value.length <4){
        console.log("name is too short")
        return;
        }
        this._name = value;
    }

    talk () {
        return this._name + " says " + this._conversation;
    }

    describe (){
        return "You can see " + this._name + " They are " + this._description;
    }
}

// all characters built from this class, they will have all the above properties as part of their makeup

    class Enemy extends Character {
        constructor(name, description, conversation, weakness){
        super(name, description, conversation)
        this._weakness = weakness
        }

        fight(item){
            if(item === this._weakness)
            return true;
            else {
            return false;
        }
    }
        talk() {
            return this._name +" growls " + this._conversation
        }
    }
const Gary = new Character("Gary", "a Skeleton.", "*rattles*")
console.log(Gary.describe())
console.log(Gary.talk())

const Frank = new Character ("Frank", "a Wizard", " Hello there adventurer!")
console.log(Frank.describe())
console.log(Frank.talk())
//example console.log commands during delivered teaching

const start = new Room ("start", "You wake up in a dark, cold Dungeon. You can't see for a few feet around you. A foul ichor reaches your nostrils and you hold in whatever you ate before you ended up down here.<br><br> To the <b>West</b>, you see a small <i>Torch</i>. To the <b>East</b>, you see the faint outline of a figure, but can't quite make out any details without a light source.<br><br>Go <b>West</b> To search for a light source,  or <b>East</b> to investigate the figure")

const dungeonTorch = new Room ("dungeonTorch", "You grasp around in the darkness and find a <i>Torch</i> fixed to the wall. With some effort you are able to restart the embers and use it to survey the area.<br> You wave the torch, illuminating a dark, damp cell. Moss has grown rampant, free from disturbance for years. You can see a door leading out of the Dungeon.<br><br> To the <b>West</b> the figure becomes more easy to see in the gloom, but you'll have to conquer your fears and investigate...")
const gary01 = new Room ("gary01", "Using the <b>Torch</b> to light the room, you see what looks to be an unassuming Skeleton, most likely the remains of the last poor soul down here.<br><br> As you look away, it springs to life!<br><br> The Skeleton rattles inquisitively, motioning at its neck bone before furiously pointing at a boulder, rattling encouragingly<br><br>Go<b> North</b> to help your Calcium chum, or stay here and start getting used to the Rats...")
const gary02 = new Room ("gary02", "Is that a... Skeleton? I can't see much down here, I should really find a <i>Light Source</i> to see what it is.<br><br>Go <b>West</b> to look for a torch to illuminate the darkness.")
const hallway01 = new Room ("hallway01", "The Skeleton rattles with glee, before moving a small boulder away from what seems to be a crawlspace in the aged brickwork.<br><br> You decide that the Skeleton must be looking for <i>Something</i> and decide to keep that in mind as you crawl through a small opening in the Dungeon wall. You alight a spiral Staircase that seems to go on forever, finding yourself in a Hallway.<br><br> Heavy flagstones cover the floor. Bookcases line the walls, carrying dusty, heavy volumes written in languages you've never seen before. <br><br>There is a heavy door at the end of the Hall. You can see a crude note nailed to the door - '<b>KEEP OUT! Doing Wizard stuff. Frank (Wizard)</b><br><br>Go <b>North</b> to enquire further into 'Wizard Stuff' or go <b>East</b> and get a better look at those <i>Books</>")
const wizard01 = new Room ("wizard01", "You ignore the note on the door (What even <i>IS</i> 'Wizard Stuff'?), making your way into the room at the end of the hallway. The first thing you notice is the smell - it envelops the room, while potions and unmarked fluids bubble and react fervently.<br><br> A figure approaches you...<br> 'Hello there! How can I help you?' You explain waking up in the dungeon, and the Skeletons impassioned plea.<br> The Wizard grumbles to himself and walks away, he clearly has something on his mind.<br>The Wizard looks like he's searching for something... <br><br>Perhaps somewhere to the <b>South</b> might be something he's looking for")
const wizard02 = new Room ("wizard02", "You ignore the note on the door; What even <i>IS</i> 'Wizard Stuff'? - Making your way into the room at the end of the hallway. The first thing you notice is the smell - it envelops the room, while potions and unmarked fluids bubble and react fervently.<br><br> A figure approaches you...<br> 'Hello there! How can I help you? The Wizard squints to get a better look at you, before noticing the book-shaped bulge poking from your abdomen. 'Is that.... my book?!'<br><br> As the Wizard lunges forward, a small <i>Amulet</i> tumbles out of his sleeve.<br>An Amulet! You recall the Skeleton and its silent, impassioned plea.<br><br> Reach to the <b>North</b> and grab the Amulet, or go <b>South</b> to return to the Skeleton. It probably wanted a scarf or something...")
const hallway02 = new Room ("hallway02", "You approach one of the shelves, running your finger along the dusty tomes.<br><br> As you run your finger over one in particular, you feel a strange sensation course through your body. Whispers of a thousand ages enter your conscious. You feel a bizarre elation, as if everything in your life has led to this moment...<br><br> You take the <i>Book</i> and hurriedly stuff it under your shirt. Why are we here again? Oh yes, Wizard.<br><br> Go <b>North</b> to make tracks for the <i>Wizard</i>")
const amu01 = new Room ("amu01", "You remember the Skeletons' impassioned, percussive pleas and swipe the <b>Amulet</b> before making an about turn and sprinting out of the Wizards' study. The Wizard seems engrossed by the book you surrendered in fear of his bearded assault.<br><br> Probably best not to bother him, you think to yourself as you stare down the staircase leading back to the Dungeon<br><br> Nice Amulet! The <i>Skeleton</i> might like to see this. Head <b>South</b> if you agree.")
const dungeonReturn = new Room ("dungeonReturn", "You follow the staircase back to the <i>Dungeon</i>...<br> The Skeleton is caught by surprise on your arrival, leaping to its bony limbs, seemingly interested by your return and any accoutrements you found in your absence<br><br> Reach into your pocket facing the <b>East</b> to show the Skeleton the Amulet.")
const endAmu = new Room ("endAmu", "The Skeleton points at your pocket, sensing there is something it might be interested in. You take the Amulet and hand it to the Skeleton. He places it around his neck...<br><br> Greetings!! I thought I'd never be able to speak again!' He introduces himself as Gary, a peculiar name. Perhaps he's from a distant land?'That Wizard only seems to care about those blasted books! I used to own this Amulet, but he stole it off me! He mentioned something about the black market? Is that the same as a regular market, but it's only open at night?<br><br> The Skeleton continues 'This Amulet lets me speak to humans! Now I've got it, I can tell you about this hoard of treasure! It's not far from here, I mean it's literally right there' Gary makes a gesture as if to exemplify the distance, while making it seem its not that far at all. I guess it's better than sitting around in this Dungeon...<br><br> <i>Quest Complete! - 'It's all Bones to me' - 50 XP! - Items Gained - 0 - Items Lost - <i>Amulet of Bonespeak</i> ( -> Gary)<br> Congratulations! You have completed 'No Bones About It' - The First Quest of this Text-Based Adventure!")
const endNoAmu = new Room ("endNoAmu", "The Skeleton celebrates your return! It seems that it's been waiting for you to come back with <i>Something</i>. On realising you have returned to the Dungeon empty handed, the Skeleton takes a seat, deflated.<br><br> I hope you know how to speak Skeleton, because unless you feel ready to see that Wizard again, he's the only company you'll have...<br><br> Close, but no Cigar... Without the Amulet the Skeleton rattles glumly, resigning both your fates. This Dungeon was where your adventure began. Now, it is your tomb. Not the Skeletons Tomb, obviously. He's gotten quite used to it. You lose, is what I'm getting at here.")
const hallway03 = new Room ("hallway03", "You pocket the Amulet, remembering the charades pulled by your Bony friend in the Dungeon before high-tailing it out of the Wizard's study. The Book enraptures the Wizard, he shouldn't be a problem now.<br><br> I should head <b>South</b> get back to the <b>Dungeon</b>")
const book02 = new Room ("book02", "You approach one of the shelves, running your finger along the dusty tomes. As you run your finger over one in particular, you feel a strange sensation course through your body. Whispers of a thousand ages enter your conscious. You feel a bizarre elation, as if everything in your life has led to this moment. You take the <i>Book</i> and hurriedly stuff it under your shirt. Why are we here again? Oh yes, Wizard.<br><br>Head to the <b> North</b> with your fancy book and see the Wizard wants" )
//rooms and descriptions - client facing - 100
start.linkRoom("west", dungeonTorch);
start.linkRoom("east", gary02);
dungeonTorch.linkRoom("west", gary01);
gary01.linkRoom("south", start);
gary01.linkRoom("north", hallway01);
gary02.linkRoom("west", dungeonTorch);
gary02.linkRoom("south", start);
hallway01.linkRoom("north", wizard01);
hallway01.linkRoom("east", hallway02);
wizard01.linkRoom("south", hallway01);
wizard02.linkRoom("north", amu01);
wizard02.linkRoom("south", endNoAmu);
hallway02.linkRoom("east", hallway01);
hallway02.linkRoom("north", wizard02);
amu01.linkRoom("south", dungeonReturn);
dungeonReturn.linkRoom("east", endAmu);
endNoAmu.linkRoom("north", hallway01);
hallway03.linkRoom("south", dungeonReturn);
book02.linkRoom("north", wizard02);
//rooms + descriptions - to be added into here from rooms.js - 100


function display(currentRoom) {
    const textcontent = currentRoom.description;
    document.getElementById ("textArea").innerHTML = textcontent;
    document.getElementById ("userInput").focus();
    
}

function startGame(){
    currentRoom = start;
    display(currentRoom);

   document.addEventListener("keydown", function (event){
       if(event.key === "Enter") {
        const command = document.getElementById("userInput").value.toLowerCase();
        const Direction = ["north", "south", "east", "west"]
        if (Direction.includes(command)){
            currentRoom = currentRoom.move(command);
            display(currentRoom);
            document.getElementById("userInput").value = "";
        
       } else {
            document.getElementById("userInput").value = "";
            alert("That is not a valid command")
       }
   }})//startGame - event listener for user interactions - 100 -
}
startGame()