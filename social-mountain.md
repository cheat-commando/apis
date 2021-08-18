In this section, you’ll be looking through the documentation for the Social Mountain API and answering questions. You’ll also be making requests and recording the URLs and some information about the responses. Run the requests in Postman. Note: this API is live and viewable by your classmates and staff. Keep things appropriate for class.

Check if the POST request accepts params, queries, and/or a body. Which one(s) and what information is it expecting to be sent?
The POST request’s body is an object, and that object contains a single property (“text”), which is a string.

What data type does the GET request return?
It returns an array of all the posts

What would the URL look like for deleting the post with the id 555? (This post does not exist anymore, but the syntax is the same for existing posts)
https://practiceapi.devmountain.com/api/posts?id=555

List the possible response codes from the GET request at ‘/posts/filter’
200 & 409

Create a post whose text is your name, record the URL and body here:
https://practiceapi.devmountain.com/api/posts
{ "id": 6845, "text": "clint", "date": "18 Aug 2021"  }
{ "id": 6850, "text": "Carston Work", "date": "18 Aug 2021" }

What would the URL and body object be to update the post you just made to contain your favorite color instead of your name?
{ "id": 6850, "text": "Royal Blue", "date": "18 Aug 2021" } https://practiceapi.devmountain.com/api/posts?id=6850
{ "id": 6845, "text": "Blue", "date": "18 Aug 2021" } https://practiceapi.devmountain.com/api/posts?id=6845

What is the URL to get posts that contain the text “blue”?
https://practiceapi.devmountain.com/api/posts/filter?text=blue

Make a request to GET all the posts. What are the content type and charset of the response? (Hint: look on the Headers)
application/json; charset=utf-8

What would cause a PUT request to return a 409 status?
Request was missing req.query.id or req.body.text

What happens if you try to send a query in the GET request URL? Why do you get that response?
We get back all of the posts. This happens because the /posts endpoint is not set up to receive queries. It is programmed to simply send back all of the posts.
