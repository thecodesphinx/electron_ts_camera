// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded",async () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }

  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, (process.versions as any)[type]);
  }

  const live_video = document.getElementById(
    "local_video"
  ) as HTMLVideoElement;

  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  //Set video source object
  live_video.srcObject = stream;
  live_video.play();

});
