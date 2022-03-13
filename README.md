## Inspiration
San Francisco is a place of cultural diversity. There are many people from different parts of the world who are different from each other. Sometimes they feel reluctant to share their mental health struggles, and how they overcame their struggles online. Mental Health struggles involve alcohol abuse, depression, drug abuse, and others. 

The web application ‘FocusUp’ has been developed with dedicated focus groups where people can share their struggles via posting photos, videos. The app provides chat forums where people can consult each other for online help. 

According to CDC, The coronavirus disease 2019 (COVID-19) pandemic has been associated with mental health challenges, 40% of US adults reported struggling with mental health. We decided to act on this alarming rate via ‘FocusUp’ focusing on personal recovery and providing multiple ways that people can help their recovery. 

## What it does
Users shall be able to search for focus groups based on different interests for example OCD, PTSD, Anxiety, Depression, etc. People in the group facing similar issues shall be able to share their experiences with photos, stories, and group chat.

Users shall be able to browse other users' posts and read their struggle stories,  personal recovery stories. When users find any stories interesting or related they shall be able to comment on those stories.

Users shall be able to create their own struggle stories, recovery stories anonymously.

Users shall be able to chat with each other if they have something in common and are planning a meetup in person.

## How we built it

The tech stack we used was react, nodejs and Google Cloud. We built the entire front end using react. We built our backend and API services using nodejs. We hosted our react web application and nodejs server as microservices on the Google cloud app engine.

Our react application consists of three pages, where the home page is the list of focus groups.

Each focus group will consist of posts that talk about individual struggles and their success stories. It also has a chat forum, which helps users in the focus group connect with each other.

All our data is stored on cloud firestore, and any media files that are uploaded through posts are uploaded on firebase storage.  We also used the firebase notification service to provide real-time updates to the chat forum.

## Challenges we ran into

Since this hackathon is virtual, it was difficult to manage and coordinate with other members of the team.

We also worked for approximately 40 hours on this app, as we spent a few hours, setting up, and clearing bugs.

We also had a team member leave us at the last moment, which was kind of demotivating, however, the entire team put their best performance. 

## Accomplishments that we're proud of

We are very proud that we developed something which will raise public awareness towards mental health. Also, the precision of the application outlines all of our hard work as well as dedication. We started it from scratch and finished all the small details in time. 

We also built the entire API, backend services, front-end and hosted them on the app engine in a span of 42 hours.

We also made sure to keep our app scalable, if there is a large user load.

## What we learned

Domain knowledge
How to act on time in a team settings
Designing UI/UX
Frontend and Backend development
Strategic planning

## What's next for FocusUp

Users shall be able to post live videos.
Collaboration with Centers for Disease Control and Prevention.
Adding more focus groups. 
Adding features to find a nearby mental health therapy center.
Enable phone call to 911 in case of emergency.