## Here's a potential bug I may have found with the WDIO Video Reporter.

It seems that the video only starts recording inside the 'it' blocks.
This means if an error is encountered in one of the test's "before" hooks, no video will be exported.
This can be demonstrated in the "example.spec.js" file.

Notice in the unskipped test, that I'm waiting for an element to display that does not exist inside the Mocha Before hook.
When the test fails, no video will be output inside my "videos" folder.
Also, no "rawSeleniumVideoGrabs" directory will be created either.
It seems that this directory is only created as soon as the test reaches one of the "it" blocks.
If you skip the bottom test, and unskip the first test - you'll see that the test will correctly fail and output a video.
This is because the element was marked as "none-existent" inside the "it" block as apposed the before hook.