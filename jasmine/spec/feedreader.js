/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it("contain url", function() {
           allFeeds.forEach(function(feed) {
             // Checks if each feed has an url
             expect(feed.url).toBeDefined();
             // Checks if url has a reasonable size
             expect(feed.url.length).toBeGreaterThan(10);
             // Checks if url has clear characteristics
             expect(feed.url).toContain("://");
           });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it("contain name", function() {
           allFeeds.forEach(function(feed) {
             // Checks if each feed has a name
             expect(feed.name).toBeDefined();
             // Checks if name has a reasonable size
             expect(feed.name.length).not.toBe(0);
           });
         });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function() {
      // Creates variable for body
      const body = document.querySelector("body");
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it("is hidden", function() {
           // Checks if class for hidden menu exists in body
           expect(body.classList).toContain("menu-hidden");
         });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it("changes visibility by click", function() {
           // Creates variable for icon Menu
           const iconMenu = $(".menu-icon-link");
           // Open menu by first click
           iconMenu.trigger("click");
           expect(body.classList).not.toContain("menu-hidden");
           // Close menu by second click
           iconMenu.trigger("click");
           expect(body.classList).toContain("menu-hidden");
         });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         // Inform testing framework that asynchronous loadFeed has completed
         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });
         // Run test after completion of loadFeed
         it("have at least a count of one", function (done) {
           // Create variable for feed entrys
           const entry = document.querySelector(".feed .entry");
           // Number of feed entries should be > 0
           expect(entry.length).not.toBe(0);
           done();
         });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {
      // Create variable for first load of feed
      let firstRun;
      // Create variable for second load of feed
      let secondRun;
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
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
         it("has changed after second load", function(done) {
           expect(firstRun).not.toEqual(secondRun);
           done();
         });
    });
}());
