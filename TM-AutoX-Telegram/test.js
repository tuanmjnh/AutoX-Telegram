// if (!requestScreenCapture()) toast("Screenshot request failed");
auto();

// Check if the required permissions are granted
if (!auto.service) {
  toast("Please enable accessibility service for Auto.js.");
  exit();
}

console.log(`width: ${device.width} - height: ${device.height}`)
console.log(device)