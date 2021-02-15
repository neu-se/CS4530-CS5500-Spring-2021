---
layout: page
title: Promises
permalink: /tutorials/week4-promises
parent: Tutorials
---

This tutorial gives a basic introduction to promises and using axios to make http requests. 

Contents:
* [Promise Basics](#promise-basics)
* [React Applicaion Overview and Setup](#app-overview)
* [Implementing Video Search](#video-search)
* [Implementing Comments Section](#coments)
* [Using Defaults in Axios](#axios-defaults)
* [Generating Your Own API key](#generate-api-key)


# Promise Basics

In Javascript, certain tasks can be performed asynchronously on background threads such as I/O operations, network requests, and timers. The different constructs available to handle such asynchronous events are callbacks, promises. Due to various problems associated with callbacks (such as callback hell), promises are the preferred construct for handling asynchronous behaviour. In simple terms, a promise is a function telling the caller, "I don't have what you need just yet, but I'm going to fetch that data and I *promise* to get back to you once I do; *then* can process the data as you see fit". There is also a reletively newer way of handling promises which processes them synchronously within the given closure called async/await.

Looking at the code examples below should give a comparison between synchronous and asynchronous behaviour.

- Example: Synchronous code:
- ```JS
   function doSomething() {
      console.log('I always execute first.');
      someSynchronousFunction(); // This will perform some tasks and the code stops here while it does so.
      console.log('I always execute after the syncchronous function.');
   }

- Example: Asynchronous function:
- ```JS
   function doSomething() {
      console.log('I always execute first.');
      someAsynchronousFunctionWhichReturnsAPromise()
         .then((data) => {
            // This function will execute one the async task has completed.
            console.log('This is the data you wanted: ', data);
            console.log('I will get printed last');
         });
      console.log('I execute right after the Async task starts executing');
   }

- Example: Async/Await
- ```JS
   async function doSomething() { // This function now returs a promise because it is "async"
      console.log('I always execute first.');
      const data = await someAsynchronousFunctionWhichReturnsAPromise(); // This will perform some tasks and the code stops here while it does so.
      console.log('This is the data you wanted: ', data);
      console.log('I will get printed last');
   }

# React Applicaion Overview and Setup

In this tutorial, we will implement http requests in a React application using the Axios module. We have already implemented the React part of the application, but need some help integrating it with the Youtube API for fetching the required data. Although the code may seem daunting at first glance, we will be working on a very small subset of the code. We will dive deeper into react at a later point in this course.

We are developing a video streaming application which will allow a user to search for videos, watch them, and read comments posted on the video. The final product will look similar to the image shown below.

![image](./assets/week4-promises/app-final.PNG)

## Setting up the project

1. Down the [project starter](./assets/week4-promises/discount-youtube.zip)
2. Unzip the contents to a new directory.
3. Navigate to the new directory and open a terminal.
4. Run "npm install".
5. Run "yarn start" to start the application.
6. This should open a new tab in your web browser at http://localhost:3000/
7. The project base is ready.
![image](./assets/week4-promises/app-base.PNG)

There are 2 key parts we need to implement in this application:
1. Video Search
2. Get Comments

- In order to do this, we will use the "axios" module and the Youtube data v3 API.
   - Axios is already installed in the project.
      - this can be done using `*npm install --save axios*` or `*yarn add axios --save*`
   - We need an API key for the youtube API.
      - Instructions for the same are given in the section [Generating Your Own API Key](#generate-api-key). 

# Implementing Video Search

As we know, at present our application neither shows any video nor does it show any search results. Let us change that.

- Navigate to the src directory and open the file "App.tsx".
- Notice a function on line 13 called "searchYoutubeVideos".
- We want to implement this function so that it will search for the available videos and select the first video from the returned results by default.

## Implementing the code

1. Notice axios is already imported in the file on line 7.
2. In order to get the search results from youtube, we need to do the following:
   - We need to make a GET request to "https://www.googleapis.com/youtube/v3/search".
   - Pass the search term as a query parameter called "q".
   - Pass 'snippet' as a query parameter called "part".
   - Pass '10' as a query parameter called "maxResults". (to fetch only 10 results at a time)
   - Pass the API key as a query parameter called "key".
3. We can make a GET request using axios as below:
   - ```JS
      axios.get('my url', { options });
   - This request will return a promise.
4. Add the below code to make the desired request to youtube to the "searchYoutubeVideos" function:
   - ```JS
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 10,
          key: 'Your api key goes here', // Make sure you update this!
          q: searchTerm
        }
      });
5. This will return a promise with a response containing the below schema:
   - ```JS
      {
        "kind": "youtube#searchListResponse",
        "etag": etag,
        "nextPageToken": string,
        "prevPageToken": string,
        "regionCode": string,
        "pageInfo": {
          "totalResults": integer,
          "resultsPerPage": integer
        },
        "items": [
          {
            "kind": "youtube#searchResult",
            "etag": etag,
            "id": {
              "kind": string,
              "videoId": string,
              "channelId": string,
              "playlistId": string
            },
            "snippet": {
              "publishedAt": datetime,
              "channelId": string,
              "title": string,
              "description": string,
              "thumbnails": {
                (key): {
                  "url": string,
                  "width": unsigned integer,
                  "height": unsigned integer
                }
              },
              "channelTitle": string,
              "liveBroadcastContent": string
            }
          }
        ]
      }
6. Next we need to assign the returned search results (the items array) to videos. Since this is a promise, we need to use the .then() function.
   - ```JS
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 10,
          key: 'Your api key goes here', // Make sure you update this!
          q: searchTerm
        }
      }).then(response => {
        this.setState({ videos: response.data.items }); // setState is React stuff and can be ignored for now.
      });
7. Finally, let us set the selected video to the first item in the list if it is not already selected.
   - ```JS
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 10,
          key: 'Your api key goes here', // Make sure you update this!
          q: searchTerm
        }
      }).then(response => {
        this.setState({ videos: response.data.items }); // setState is React stuff and can be ignored for now.
        if(!this.state.selectedVideo) {
          this.setState({ selectedVideo: response.data.items[0] });
        }
      });
8. Save the file.
9. In the terminal, run `*yarn start*`.
   - You should now see the video and search list populated!
   - *Note:* Default search term is: "Javascript event loop explained".
   - ![image](./assets/week4-promises/video-search-implemented.PNG)

Next, we will implement the comments section.

# Implementing Comments Section

Now we have a working video player and video search section. However, our Comments section is still empty.
In this section, let us implement the comments section by fetching comments related to the video and displaying them.
- Navigate to the src/components directory and open the file "Comments.tsx".
- Notice a function on line 9 called "getAllComments".
- We want to implement this function so that it will fetch all comments related to the video and display them.

## Implementing the code

1. Notice axios is already imported in the file on line 3.
2. In order to get the comments related to a video, we need to do the following:
   - We need to make a GET request to "https://www.googleapis.com/youtube/v3/commentThreads".
   - Pass the video ID as a query parameter called "videoID".
   - Pass 'snippet' as a query parameter called "part".
   - Pass '10' as a query parameter called "maxResults". (to fetch only 10 results at a time)
   - Pass the API key as a query parameter called "key".
3. We can make a GET request using axios as below:
   - ```JS
      axios.get('my url', { options });
   - This request will return a promise.
4. Add the below code to make the desired request to youtube to the "getAllComments" function:
   - ```JS
      axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
        params: {
          part: 'snippet',
          videoId: this.props.video.id.videoId,
          maxResults: 10,
          key: 'Your api key goes here', // Make sure you update this!
        }
      });
5. This will return a promise with a response containing the below schema:
   - ```JS
      {
         "kind": "youtube#commentThreadListResponse",
         "etag": etag,
         "nextPageToken": string,
         "pageInfo": {
            "totalResults": integer,
            "resultsPerPage": integer
         },
         "items": [
            {
               "kind": "youtube#commentThread",
               "etag": etag,
               "id": string,
               "snippet": {
                  "channelId": string,
                  "videoId": string,
                  "topLevelComment": comments Resource,
                  "canReply": boolean,
                  "totalReplyCount": unsigned integer,
                  "isPublic": boolean
               },
               "replies": {
                  "comments": [
                     comments Resource
                  ]
               }
            }
         ]
      }
6. Next we need to extract the commments and assign them to the comments variable. Let us use the async/await syntax as below: 
   - ```JS
      const commentThreads = await axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
        params: {
          part: 'snippet',
          videoId: this.props.video.id.videoId,
          maxResults: 10,
          key: 'Your api key goes here', // Make sure you update this!
        }
      });
      const comments = commentThreads.data.items.map(comment => { return {
          textDisplay: comment.snippet.topLevelComment.snippet.textDisplay, 
          id: comment.snippet.topLevelComment.id,
          img: comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
          author: comment.snippet.topLevelComment.snippet.authorDisplayName, 
        };
      });
      this.setState({ comments: comments });
8. Save the file.
9. In the terminal, run `*yarn start*`.
   - You should now see the Comments populated below the video!
   - ![image](./assets/week4-promises/comments-section-implemented.PNG)

# Using Defaults in Axios

Let us take another look at the two requests we wrote in the previos section.
- ```JS
      axios.get('https://www.googleapis.com/youtube/v3/search', {
         params: {
            part: 'snippet',
            maxResults: 10,
            key: 'Your api key goes here', // Make sure you update this!
            q: searchTerm
         }
      });

      axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
         params: {
            part: 'snippet',
            videoId: this.props.video.id.videoId,
            maxResults: 10,
            key: 'Your api key goes here', // Make sure you update this!
         }
      });

Comparing the two code snippets above, we can see a few parameters which are common to both requests.
- The base URL is same for both requests: (https://www.googleapis.com/youtube/v3)
- The following query parameters are common:
    - `part: 'snippet'`
    - `maxResults: 10`
    - `key: API_KEY`

We can configure axios to use a default base configuration for all requests. This helps to reduce code duplicity and organize the code better. In order to do this in our application, we need to follow the below steps:

1. Navigate to the src/apis directory and open the file "youtube.ts".
2. Notice the default export for axios.create().
    - This function creates an axios object with the desired base configuration.
3. Add your API key on line 4 as below:
    - `const API_KEY = 'Your API Key goes here';`
4. Replace the export default statement with the code below:
    - ```JS
      export default axios.create({
         baseURL: 'https://www.googleapis.com/youtube/v3',
         params: {
            part: 'snippet',
            maxResults: 10,
            key: API_KEY
         }
      });
   - Now we have an axios client with default parameters configured. Let us use this in our code.
5. Navigate to the src directory and open the file "App.tsx".
   - Notice the import statement for youtube on line 8. 
   - The default configured client is already imported. Let us use this instead of axios.
6. Replace the call to `axios.get('https://www.googleapis.com/youtube/v3/search')`:
    - From:
      ```JS
         axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
               part: 'snippet',
               maxResults: 10,
               key: 'AIzaSyCghhuO7OwHrXOBlYd67CqGxmwswskvgL8',
               q: searchTerm
            }
         })
    - To:
      ```JS
         youtube.get('/search', {
            params: {
               q: searchTerm
            }
         })
7. Make a similar change in Comments.tsx.

# Generating Your Own API Key

In this tutorial, we are using the Youtube API v3, provided by google. In order to use this, Google provides a free API key which can be used to make 10,000 requests per day. This tutorial also assumes you have a google account, if you do not have one, please create one before you proceed.

## Steps

1. Create a Project
2. Enable API and generate key

### Creating a new Project

1. Navigate to [Google developer console](https://console.developers.google.com/) and log in if required.
   - ![image](./assets/week4-promises/developer-console-home.PNG)
2. Click on "Create Project".
3. Add in the necessary information as below.
   - ![image](./assets/week4-promises/create-project.PNG)
4. Click on "Create".
   - This will create a new project for which we can create an API key.
5. This will open the new project by default.
   - If not, select the recently created project
   - ![image](./assets/week4-promises/new-project-home.PNG)


### Enable API and generate key

1. Select the new project created. (if not already open)
2. Click on "Go to APIs Overview" in the API section.
3. Click on "Enable APIs and Services" at the top.
   - ![image](./assets/week4-promises/apis-overview.PNG)
4. Search youtube and select "Youtube Data API v3"
   - ![image](./assets/week4-promises/enable-youtube-api.PNG)
5. Click Enable. This will redirect you to the youtube api home page.
   - ![image](./assets/week4-promises/youtube-api-home.PNG)
6. Click on "Create Credentials".
7. Configure the details are required, or shown below.
   - youtube api v3
   - web browser (javascript)
   - public
   - ![image](./assets/week4-promises/configure-credentials.PNG)
8. Click on "what credentials do I need?" and your key is ready!
   - ![image](./assets/week4-promises/credentials-ready.PNG)
9. Copy this key for use in your applications.

