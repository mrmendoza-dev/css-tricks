


// Function to copy the text "Hello World" to the clipboard
navigator.clipboard.writeText("Hello World").then(() => {
  console.log("Copied to clipboard");
});

// Function to read text from the clipboard
navigator.clipboard.readText().then(() => {
  console.log("Read from clipboard");
});

// Function to access the user's camera and microphone
navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
  console.log(stream);
});

// Function to share content via the Web Share API
navigator.share({
  title: "Web Share API",
  text: "Check out Web Share API!",
  url: "https://web.dev/web-share/",
}).then(() => {
  console.log("Thanks for sharing!");
}).catch(console.error);

// Function to vibrate the device with a pattern
window.navigator.vibrate([200, 50, 200]);



const keyframes = [
    {color: "#000000"}, {color: "#ffffff"}
];
const options: any = {
    duration: 1000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out"
};
document.getElementById("item")?.animate(keyframes, options);



function utility() {
  console.log("utility");
}


export default utility();