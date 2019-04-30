# Feed Reader Testing

This project is a web-based application that reads RSS feeds. The development procsess is test-driven and based on the behavior-driven development framework Jasmine (the framework is included). The project is part of the Udacity Front-End Web Developer Nanodegree Program.

## How to run

Just clone or download this git repository to your local operating machine. To load the feeds open the index.html file in the project folder.

## About the tests

- RSS Feeds: The first test checks whether the list for the feed contains at least one name and one functional URL that can be provided by using the allFeeds variable.
- The Menu: The second test checks if the menu is hidden by default and changes visibility when clicked using the menu-hidden class.
- Initial Entries: The third test checks whether the feed consists of at least one entry after loading by using the asynchronous function loadFeed(0).
- New Feed Selection: The fourth test checks whether the content changed after loading a new feed by using the asynchronous loadFeed(1) function.

## Ressources

- [Jasmine](http://jasmine.github.io/)
- [Google Feed Reader API](http://google.com/jsapi)
- [Google Font Roboto](https://fonts.googleapis.com/css?family=Roboto:400,100,300,700)
- [jQuery](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js)
- [Handlebars](https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.min.js)
- [Icomoon](https://icomoon.io/)
- [Normalize CSS](https://necolas.github.io/normalize.css/)
