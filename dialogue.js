const CLAMPY_NORMAL = "./characters/clampy.png";
const CLAMPY_HAPPY = "./characters/clampy_happy.png";
const CLAMPY_DOUBT = "./characters/clampy_doubt.png";
const CLAMPY_SWEAT = "./characters/clampy_sweat.png";
const FINISH = "FINISH";

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

const DIALOGUE_CONTENT = [
  {
    id: 1,
    text: "Hi there!",
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
    text: "Let's focus on you. What're you doing here?",
    speakerName: "Clampy",
    characterImg: CLAMPY_DOUBT,
    next: 6,
  },
  {
    id: 6,
    characterImg: CLAMPY_NORMAL,
    options: [
      {
        text: "I'm just having fun.",
        nextText: 61,
      },
      {
        text: "I want to learn more about web development.",
        nextText: 62,
      },
      {
        text: "I want to make a game like this",
        nextText: 63,
      },
    ],
  },
  {
    id: 61,
    text: "...fun? You think code is fun",
    speakerName: "Clampy",
    characterImg: CLAMPY_DOUBT,
    next: 611,
  },
  {
    id: 611,
    text: "What a nerd!",
    speakerName: "Clampy",
    characterImg: CLAMPY_HAPPY,
    next: 612,
  },
  {
    id: 612,
    text: "Just kidding, just kidding! Anyway, let me tell you a bit about how this works.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 7,
  },
  {
    id: 62,
    text: "Oh that's great! This project uses the basic building blocks of web development; HTML, CSS, and JS.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 621,
  },
  {
    id: 621,
    text: "Let me tell you a bit about how this works.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 7,
  },
  {
    id: 63,
    text: "That's awesome! itch.io is a great place to find game jams and teammates for projects.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 631,
  },
  {
    id: 631,
    text: "Though I should probably warn you, there are engines out there like Twine and Ren'Py that would make this a lot easier...",
    speakerName: "Clampy",
    characterImg: CLAMPY_SWEAT,
    next: 632,
  },
  {
    id: 632,
    text: "But you have a lot more control when you do it youself. Let me tell you about how this works.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 7,
  },
  {
    id: 7,
    text: "You can advance the text by using space, enter, or clicking on the little arrow.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 8,
  },
  {
    id: 8,
    text: "If I'm talking, clicking space, enter, or just clicking on the text will speed me up. I'll talk for a bit, just so you can try it.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 9,
  },
  {
    id: 9,
    text: "Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    speakerName: "Clampy",
    characterImg: CLAMPY_HAPPY,
    next: 10,
  },
  {
    id: 10,
    text: "Sorry, was that too much?",
    speakerName: "Clampy",
    characterImg: CLAMPY_SWEAT,
    next: 11,
  },
  {
    id: 11,
    text: "In a regular game, you may make choices that ultimately lead to different endings. Since I'm not really telling a story, I'll just let you select an ending here.",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: 13,
  },
  {
    id: 13,
    characterImg: CLAMPY_NORMAL,
    options: [
      {
        text: "happy ending",
        nextText: 14,
        setState: { epilogue: 1 },
      },
      {
        text: "sad ending",
        nextText: 131,
        setState: { epilogue: 2 },
      },
    ],
  },
  {
    id: 131,
    text: "Sad ending? You sure?",
    speakerName: "Clampy",
    characterImg: CLAMPY_DOUBT,
    next: 132,
  },
  {
    id: 132,
    characterImg: CLAMPY_DOUBT,
    options: [
      {
        text: "yes",
        nextText: 133,
      },
      {
        text: "no",
        nextText: 14,
        setState: { epilogue: 1 },
      }
    ],
  },
  {
    id: 133,
    text: "Alright, suit yourself!",
    speakerName: "Clampy",
    characterImg: CLAMPY_HAPPY,
    next: 14,
  },
  {
    id: 14,
    text: "Anyway, that's all I've got for you. If you make your own game with this code, I'd love to see it, so please tag me!",
    speakerName: "Clampy",
    characterImg: CLAMPY_NORMAL,
    next: FINISH
  }
];
