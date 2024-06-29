//Start an infinite loop thread
var thread = threads.start(function () {
  while (true) {
    log("Child thread running...");
    sleep(1000);
  }
});

//Close the thread after 5 seconds
sleep(5000);
thread.interrupt();