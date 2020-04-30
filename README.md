
# SAATH- Together Against COVID	



## What I built 

Saath (Meaning "Together" in Hindi) is a COVID-19 app for bringing people together. In the tough times like this, confusion and lack of information is the biggest enemy. Bigger than the COVID itself. Saath aims to bring people together. The app consists of 3 parts. The 3 major parts of the app are Emergency workers, Civilians and Vendors. 
The app has separate logins for all the three. Each of the 3 users register specifically for their use case. The app lets the civilians know the location of the nearest Emergency Worker. The civilian can contact the emergency worker if such a situation arises through the Twilio API. The live location of the emergency worker is tracked through the app. Civilians also have access to the locations of the nearest shops with their contact details. The civilians can send in an SMS through the Twillo API to vendor requesting information about any specific product availability, removing the need to come out just for information. Vendors also the option to upload the basic set of products they carry and their availability in their shop. The location of the shops is also to be uploaded by the vendor. 
Thus each of the 3 sets of users get their individual dashboards with appropriate information for each. 
There is a common dashboard for the all users with all the latest information and stats of COVID 19 pulled from trusted sources. The app will update the information live and will also have the necessary precautions that are required to be taken the people as suggested by the Government and international organisations. This way the app will also help fight fake information makes sure that only the right information reaches people. 

## How I built it. 
The app is primary built using the Angular Framework. The angular frame gives us the independence required to incorporate various components that were required for the smooth flow of all the functionalities. 
	MySQL database is used to store all the user data and information about the vendors. MySQL database is fast, secure and robust and can handle large amounts of data seamlessly. 
	The communication between the front end and the back end was completely handled by NodeJS, Express.JS was used to speed up the process of development of API necessary for the communication with database, Express JS helped us to save precious time in development and concentrate more on the features that were to be implemented.  Using JavaScript gave us the seamless integration without having to switch between contexts and allowing us to share the code directly between front end and back end.
	All the information showed in app is through official government sources, APIs used were verified to provide latest and accurate information, the data shown in the app is not modified or altered with to make sure only the accurate and relevant information reaches the public. 
Design of the front end and UI is mobile first giving fluid experience to the users. All of the UI aspects are placed in a way that a relatively inexperienced user can use them with no learning curve, thus helping the app spread to large masses. In countries like India, smartphones and apps are still in their nascent stages so a lot of  care has been taken to ensure that anyone with basic experience with a smartphone and some basic English can instantly start using the applications providing help to the needy and helping those in need connect to the right people as soon as possible. 
	All in all we have attempted to design the app as a one stop destination for all the requirements during these tough times, where it has become more important than ever for people to come together and help each other out. 

### Links to Repos
 - Frontend - Angular Project
	- Link to GitHub: [Frontend](https://github.com/nanduri1998/dev-twilio-hackathon)
 - Backend - Express MySQL NodeJs
	- Link to GitHub: [Backend](https://github.com/nanduri1998/dev-twilio-server)
 - The Web App is hosted on Firebase Hosting at the URL [Saath-COVID19](http://saath-covid19.web.app/)
 - The Backed is hosted on Heroku
 - The MySQL database is hosted on AWS RDS.

### Twilio APIs Used
1. Twilio Authy API for Passwordless Authentication
2. Twilio Programmable SMS for sending SMS

### Contributors
- Ideas and Testing: Neeraj Durgaprasad Singh Rajput [@neon-github](https://github.com/neon-github)
- Design and Frontend: [@charan9999](https://github.com/charan9999)
- Backend and APIs: [@nanduri1998](https://github.com/nanduri1998) [@ncsrikar](https://github.com/ncsrikar)
