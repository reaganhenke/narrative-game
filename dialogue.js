const CLAMPY = "./characters/clampy_sprites.png";
// These arrays represent character sprites. The first item in the array is the url of the sprite sheet. 
// The second is the background-position-x used to show the specific sprite you want, and the third is the background-position-y. 
const CLAMPY_NORMAL = [CLAMPY, 0, 0];
const CLAMPY_HAPPY = [CLAMPY, 0, -300];
const CLAMPY_DOUBT = [CLAMPY, -300, 0];
const CLAMPY_SWEAT = [CLAMPY, -300, -300];

// This is just a constant that checks if the game is over. 
const FINISH = "FINISH";

const DIALOGUE_CONTENT = [
  {
    id: 1,
    text: "Hi there! Welcome to Narrative Game Template, by IfThenCreate.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 2,
  },
  {
    id: 2,
    text: "I'm so happy you're here!",
    speakerName: "Clampy",
    characterImg: CLAMPY_HAPPY,
    next: 3,
  },
  {
    id: 3,
    text: "My name is Clampy.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 4,
  },
  {
    id: 4,
    text: "I'm definitely not a rip off of any other character, so uh, don't worry about that.",
    speakerName: "Clampy",
    characterImg: CLAMPY_SWEAT,
    next: 5,
  },
  {
    id: 5,
    text: "Anyway, this isn't really a game, just an example of what the narrative game template can do. There's no engine behind this, just HTML, CSS, and Javascript.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 6,
  },
  {
    id: 6,
    text: "Let's focus on you. What're you doing here?",
    speakerName: "Clampy",
    characterImg: CLAMPY_DOUBT,
    next: 7,
  },
  
  {
    id: 7,
    characterImg: CLAMPY_NORMAL,
    options: [
      {
        text: "I think coding is fun!",
        nextText: 71,
      },
      {
        text: "I want to learn more about web development.",
        nextText: 72,
      },
      {
        text: "I want to make games like this.",
        nextText: 73,
      },
    ],
  },
  {
    id: 71,
    text: "...fun? You think coding is fun??",
    speakerName: "Clampy",
    characterImg: CLAMPY_DOUBT,
    next: 711,
  },
  {
    id: 711,
    text: "What a nerd!",
    speakerName: "Clampy",
    characterImg: CLAMPY_HAPPY,
    next: 712,
  },
  {
    id: 712,
    text: "Just kidding, just kidding! This is a great template for people who enjoy writing their own code.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 8,
  },
  {
    id: 72,
    text: "Oh that's great! This project uses the basic building blocks of web development; HTML, CSS, and JS.",
    speakerName: "Clampy",
    characterImg: CLAMPY_HAPPY,
    next: 721,
  },
  {
    id: 721,
    text: "So even though it's a game template, you can still learn a lot about web apps. Let me tell you a bit about how this works.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 8,
  },
  {
    id: 73,
    text: "That's awesome! itch.io is a great place to find game jams and teammates if you're looking for inspiration.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 731,
  },
  {
    id: 731,
    text: "Though I should probably warn you, there are engines out there like Twine and Ren'Py that would make this a lot easier...",
    speakerName: "Clampy",
    characterImg: CLAMPY_SWEAT,
    next: 732,
  },
  {
    id: 732,
    text: "But you have a lot more control when you do it youself. Let me tell you about how this works.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 8,
  },
  {
    id: 8,
    text: "You can advance the text by using space, enter, or clicking on the little arrow.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 9,
  },
  {
    id: 9,
    text: "If I'm talking, clicking space, enter, or just clicking on the text will speed me up. I'll talk for a bit, just so you can try it.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 10,
  },
  {
    id: 10,
    text: "Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    speakerName: "Clampy",
    characterImg: CLAMPY_HAPPY,
    next: 11,
  },
  {
    id: 11,
    text: "Sorry, was that too much?",
    speakerName: "Clampy",
    characterImg: CLAMPY_SWEAT,
    next: 12,
  },
  {
    id: 12,
    text: "Anyway, the github repository is linked in the description, so you can clone it and make your own version!",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 13,
  },
  {
    id: 13,
    text: "You can swap out the spritesheet to add your own characters and edit the dialogue file to add your own text.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 14,
  },
  {
    id: 14,
    text: "In a regular game, a player may make choices that ultimately lead to different endings. Since I'm not really telling a story, I'll just let you select an ending here.",
    speakerName: "Clampy",
    characterImg: CLAMPY_SWEAT,
    next: 15,
  },
  {
    id: 15,
    characterImg: CLAMPY_NORMAL,
    options: [
      {
        text: "happy ending",
        nextText: 16,
        setState: { epilogue: 1 },
      },
      {
        text: "sad ending",
        nextText: 161,
        setState: { epilogue: 2 },
      },
    ],
  },
  {
    id: 161,
    text: "Sad ending? You sure?",
    speakerName: "Clampy",
    characterImg: CLAMPY_DOUBT,
    next: 162,
  },
  {
    id: 162,
    characterImg: CLAMPY_DOUBT,
    options: [
      {
        text: "yes",
        nextText: 163,
      },
      {
        text: "no",
        nextText: 16,
        setState: { epilogue: 1 },
      }
    ],
  },
  {
    id: 163,
    text: "Alright, suit yourself!",
    speakerName: "Clampy",
    characterImg: CLAMPY_HAPPY,
    next: 16,
  },
  {
    id: 16,
    text: "Anyway, that's all I've got for you. If you make your own game with this code, I'd love to see it, so please tag me!",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: FINISH
  }
];

const EPILOGUES = [
  {
    id: 1,
    text: "Wow. What an incredible accomplishment. What an incredible game. You are a wonderful person and a great success. I love you.",
  },
  {
    id: 2,
    text: "Uh. I didn't think anyone would actually want a sad ending. There wasn't much of a storyline to build on. That's ok though. Everyone feels sad sometimes. I still love you.",
  },
];