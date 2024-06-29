//Start a thread
threads.start(function () {
  //Print "thread 1" every 1 second in the thread
  while (true) {
    log("thread 1");
    sleep(1000);
  }
});

//Start another thread
threads.start(function () {
  //Print "thread 1" every 2 seconds in the thread
  while (true) {
    log("thread 2");
    sleep(2000);
  }
});

//Print "main thread" every 3 seconds in the main thread
for (var i = 0; i < 10; i++) {
  log("main thread");
  sleep(3000);
}
//Exit all threads after printing 100 times
threads.shutDownAll();