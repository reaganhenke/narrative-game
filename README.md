# Narrative Game Template

A template for a narrative game, using HTML, CSS, and JS. There are lots of engines that will build visual novels for you. For some reason, I decided not to use any.

A few months ago, I wrote the code for [Ghost Whisperer](https://ifthencreate.itch.io/ghost-whisperer) so I could customize the audio puzzle. I'm sharing this simplified version so you can clone it and use it as a basis for your own narrative game. 

See more of my work through [IfThenCreate](https://linktr.ee/ifthencreate).

## Credits

[Fast Keyboard Typing](https://mixkit.co/free-sound-effects/keyboard/) from Mixkit

Clampy is a parody of Microsoft Clippy. I hope that counts as fair use. 

# How To Use

## Dialogue
Dialogue goes in [dialogue.js](./dialogue.js). A dialogue object looks like this:

```js
{
  id: 1,
  text: "Hi there!",
  speakerName: "Clampy",
  characterImg: CLAMPY_NORMAL,
  next: 2,
}
```
`id`: the ID of the dialogue object
`text`: the content of the dialogue, this shows up on screen
`speakerName`: the name of the speaker
`characterImg`: a url to the image of the speaker
`next`: the ID of the next dialogue object

Dialogue objects may have response options, instead of text. 

```js
{
  id: 3,
  characterImg: CLAMPY_NORMAL,
  options: [
    {
      text: "response 1",
      nextText: 4,
    },
    {
      text: "response 2",
      nextText: 5,
    },
    {
      text: "response 3",
      nextText: 6,
    }
  ]
}
```
`id`: the ID of the dialogue object
`characterImg`: a url to the image of the speaker
`options`: a list of response options that will show up on the screen, and the IDs they lead to

## Loading
Any assets you use should be added to the arrays in [loading.js](./loading.js). The game will show a loading screen while assets load in the background, so the transitions between characters are smoother. 

## Epilogues
Different gameplay can lead to different endings. A response option can select to an epilogue with `setState: { epilogue: 1 }` (the number is the epilogue ID). Epilogues can be defined in [dialogue.js](./dialogue.js). When a text option leads to `FINISH`, instead of another ID, the game will show the selected epilogue. 

## Styling
Customize whatever you want!
