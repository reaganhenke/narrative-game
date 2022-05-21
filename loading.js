/*~~ Declare assets to load behind loading screen ~~*/

imgChar1 = "./characters/clampy.png";
imgChar2 = "./characters/clampy_doubt.png";
imgChar3 = "./characters/clampy_happy.png";
imgChar4 = "./characters/clampy_sweat.png";

const imageSrcs = [
  imgChar1,
  imgChar2,
  imgChar3,
  imgChar4
];
imagesLoaded = false;

// sound assets
snd1 = "./sounds/typing.mp3";
const soundSrcs = [snd1];
soundsLoaded = false;

allAssetsLoaded = false;

/*~~ Preload assets ~~*/
$(window).load(function () {
  window.preloadedImages = [];
  imagesLoaded = 0;
  totalImages = imageSrcs.length;
  imageSrcs.forEach((imgUrl) => {
    var img = new Image();
    img.src = imgUrl;

    img.onload = (e) => {
      imagesLoaded++;
      window.preloadedImages.push(img);
      if (imagesLoaded === totalImages) {
        this.imagesLoaded = true;
        if (this.imagesLoaded && this.soundsLoaded) {
          donePreloading();
        }
      }
    };
  });

  soundsLoaded = 0;
  totalSounds = soundSrcs.length;
  soundSrcs.forEach((filename) => {
    var audio = new Audio(filename);

    audio.addEventListener("canplaythrough", () => {
      soundsLoaded++;
      if (soundsLoaded === totalSounds) {
        this.soundsLoaded = true;
        if (this.imagesLoaded && this.soundsLoaded) {
          donePreloading();
        }
      }
    });
  });
});