#	SAATH- Together Against COVID	



## What I built 

Saath(Meaning "Together" in Hindi) is a covid-19 app for bringing people together. In the tough times like this, confusion and lack of information is the biggest enemy. Bigger than the Covid itself. Saath aims to bring people together. The app consists of 3 parts. The 3 major parts of the app are Emergency workers, Civilians and Vendors. 
The app has seperate logins for all the three. Each of the 3 users register specfically for thier use case. The app lets the civilians know the location of the nearerst Emergency Worker. The civilian can contact the emergency worker if such a situation arises through the twilio api. The live location of the emergency worker is tracked through the app. Civilians also have access to the locations of the nearest shops with their contact details. The civilians can send in an SMS through the twillo api to vendor requesting information about any specific product availability, removing the need to come out just for information. Vendors also the option to upload the basic set of prodcuts they carry and thier availaibility in their shop. The location of the shops is also to be uploaded by the vendor. 
Thus each of the 3 sets of users get their individual dashboards with appropriate information for each. 
There is a common dash board for the all users along with the un registered users with all the latest information and stats of Covid 19 pulled from trustable soruces. The app will update the information live and will also have the necessary precations that are required to be taken the people as suggested by the Government and international organisations. This way the app will also help fight fake information makes sure that only the right information reaches people. 

## How I built it. 
The app is primarly built using the Angular Framework. The angular frame gives us the independence required to incorporate various components that were required for the smooth flow of all the functionalities. 
	MySQL database is used to store all the user data and information about the vendors. MySQL database is fast, secure and robust and can handle large amounts of data seemlessly. \n
	The communication between the front end and the back end was completely handeled by NodeJS, Express.JS was used to speed up the process of development for the communication with database, Express JS helped us to save precious time in development and concentrate more on the features that were to be implemented.  Using JavaScript gave us the seemless integration without having to switch between contexts and allowing us to share the code directly between front end and back end. \n
	All the information showed in app is through official government sources, APIs used were verified to provide latest and accurate information, the data shown in the app is not modified or altered with to make sure only the accurate and relevant information reaches the public. 	\n
Design of the front end and UI is mobile first giving fluid experience to the users. All of the UI aspects are placed in a way that a relatively inexperienced user can use them with no learning curve, thus helping the app spread to large masses. In countries like India, smartphones and apps are still in their nascent stages so a lot of  care has been taken to ensure that anyone with basic experience with a smartphone and some basic english can instantly start using the applications providing help to the needy and helping those in need connect to the right people as soon as possible. 
	All in all we have attempted to design the app as a one stop destination for all the requirements during these tough times, where it has become more important than ever for people to come together and help each other out. 
	
