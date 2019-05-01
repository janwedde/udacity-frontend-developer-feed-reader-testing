// Placing tests within the $() function to avoid running until DOM is ready.
$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            // Checks if allFeed variable has beedn defined
            expect(allFeeds).toBeDefined();
            // Checkes if allFeed variable is not empty
            expect(allFeeds.length).not.toBe(0);
        });

         it("contain url", function() {
           allFeeds.forEach(function(feed) {
             // Checks if each feed has an url
             expect(feed.url).toBeDefined();
             // Checks if url has a reasonable size
             expect(feed.url.length).not.toBe(0);
             // Checks if url has clear characteristics
             expect(feed.url).toContain("://");
           });
         });

         it("contain name", function() {
           allFeeds.forEach(function(feed) {
             // Checks if each feed has a name
             expect(feed.name).toBeTruthy();
             // Checks if name has a reasonable size
             expect(feed.name.length).not.toBe(0);
           });
         });
    });

    describe("The menu", function() {
      // Creates variable for body
      const body = document.querySelector("body");

         it("is hidden", function() {
           // Checks if class for hidden menu exists in body
           expect(body.classList).toContain("menu-hidden");
         });

         it("changes visibility by click", function() {
           // Creates variable for icon Menu
           const iconMenu = $(".menu-icon-link");
           // Open menu by first click
           iconMenu.click();
           expect(body.classList).not.toContain("menu-hidden");
           // Close menu by second click
           iconMenu.click();
           expect(body.classList).toContain("menu-hidden");
         });
    });

    describe("Initial Entries", function() {
         // Inform testing framework that asynchronous loadFeed has completed
         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });
         // Run test after completion of loadFeed
         it("have at least a count of one", function() {
           // Create variable for feed entrys
           const entry = document.querySelectorAll(".feed .entry");
           // Number of feed entries should be > 0
           expect(entry.length).not.toBe(0);
         });
    });

    describe("New Feed Selection", function() {
      // Create variable for first load of feed
      let firstRun;
      // Create variable for second load of feed
      let secondRun;
         // Inform testing framework that asynchronous loadFeed has completed
         beforeEach(function(done) {
           loadFeed(0, function() {
             // Store html feed of first load in variable
             firstRun = $(".feed").html();
              loadFeed(1, function() {
                // Store html feed of second load in variable
                secondRun = $(".feed").html();
                done();
              });
           });
         });
         // Test if html feed changes after second run
         it("has changed after second load", function() {
           expect(firstRun).not.toEqual(secondRun);
         });
    });
}());
