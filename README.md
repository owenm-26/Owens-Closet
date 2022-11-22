# Owens-Closet
Web app that uses firebase for both user-authentication and a database for the client to add clothing items to.

## User Authentication
Uses Firebase to set differing permissions for viewers of page.  If client is not logged in, they must do so or sign up to be able to view the contents of the closet.  In the future I hope to make a more correct version of the 'contributions' characteristic of the profile page to represent not just contributions made that session, but all contributions ever made.

## Adding Data
Once logged in, users can contribute to the closet by filling out a form to create new guides.  Since this is not a realtime database, the page must be refreshed to reflect this change.  In the future I would like to make this a realtime database and limit contributions only to users with certain  admin permissions.




