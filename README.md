<h1 align="center">
  <br>
  <a><img src="https://github.com/AbhinavKrishna26/Mailkat-Frontend/blob/main/public/logo.png" width="200"></a>
  <br>  
MailKat
  <br>
</h1>

<p align="center">
   <br>
  <a href="https://material-ui.com/">
    <img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/mat.png" width="60">       
  </a>
  <img src="https://tailwindcss.com/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg" width="50">  &nbsp;&nbsp;&nbsp;
  <img src="https://cpanelplesk.com/wp-content/uploads/2017/07/How-to-Create-and-Drop-Users-in-MongoDB.jpg" width="50">
  &nbsp;&nbsp;&nbsp;
  <a href="https://expressjs.com/"><img src="https://github.com/rishav4101/eth-supplychain-dapp/blob/main/images/express.svg" width="50"></a>
   &nbsp;&nbsp;&nbsp;
    <a href="https://expressjs.com/"><img src="https://nodejs.org/static/images/logo.svg" width="50"></a>
    &nbsp;&nbsp;&nbsp;
  <a href=""><img src="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67" width="50"></a>&nbsp;&nbsp;&nbsp;
   <img src="https://miro.medium.com/max/312/1*zcK3vvoVjsqkqB0oja8RWw.png" width="50"> &nbsp;&nbsp;&nbsp;
  <img src="https://www.downloadclipart.net/medium/smtp-png-photos.png" width="50"> &nbsp;&nbsp;&nbsp;
  <br> 
</p>

<h3 align="center">A Mailing and Mail Scheduling App.</h3>

# Description
MailKat is a MERN-based full-stack web app where users can register and login to send recurring and scheduled mails to the recipients.
MailKat has options for custom as well as google sign-in methods. User can create mails, edit them and schedule the mails as well as send recurring mails.
It also has option to create Campaigns with multiple recipients and reuse the campaigns to send emails to same audience.
The scheduling can be done in different ways like-
| Schedule         	| Action                              	    |
|------------------	|-------------------------------------------|
| Once             	| Sends the email once                    	|
| Timely Schedule  	| Keeps sending at a set number of seconds  |
| Daily Schedule   	| Sends daily at a set time            	    |
| Weekly Schedule  	| Sends weekly at a set time           	    |
| Monthly Schedule 	| Sends monthly at a set date and time 	    |
| Yearly Schedule  	| Sends yearly at a set date and time  	    |
<br/>
 
 # Features
 * MailKat features Login and SignUp via Username - Password as well as Gmail Sync (Login with Gmail).
 * A Home page that has the list of all the mails scheduled for future.
 * Create a campaign to form a set of recipients to schedule mail to.
 * View all your email campaigns
 * A History Page that has the list of mails sent till now.
 * Create new mail, Edit it with MailKat's own Text Editor.
 * The Editor has features of bold, italics, text colour and many more.
 
## Mail Features
### Send mail via campaign:
Create a campaign to form a set of recipients to schedule mail to and reuse it whenever needed!
* Subject
* Schedule Selector (type of schedule and timings)
* Mail Body
* Campaign Selector
### Without campaign:
* To
* CC
* BCC
* Subject
* Mail Body
* Schedule Selector (type of schedule and timings)


# Architecture Diagram
<p align="center">
   <br>
  <a><img src="https://github.com/AbhinavKrishna26/Mailkat-Frontend/blob/main/public/Screenshot%202021-06-27%20at%2012.23.57%20AM.png" width="800"></a>
  <br> 
</p>

# Installation and Setup 

## For frontend:
* ### Clone the repository 
```Bash
git clone https://github.com/rishav4101/Mailkat-Frontend.git && cd Mailkat-Frontend
```
* ### Install dependencies
```Bash
npm install
```
* ### Start the Application
```Bash
npm run dev
```
 
### The app gets hosted by default at port 3000.
<br>

## For backend:

* ### Clone the repository 
```Bash
git clone https://github.com/deadlycoder07/mailkat-backend.git && cd mailkat-backend
```
* ### Install dependencies
```Bash
npm install
```

* ### Create .env and add the environment variable values as mentioned in .env.example

```
cp .env.example .env
```

* ### Start the Application
```Bash
npm start
```
 
* ### The app gets hosted by default at port 8000.
