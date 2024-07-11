# dvlpenergy-task

The dvlpenergy-task web application is a Fullstack application developed with React and the Django REST Framework. The ElephantSQL database is used to store the geoJSON data that feeds the geometry polygon onto the map.
The application therefore renders a basemap of Brandenburg and indicates with polygon layers where solar plants are situated. The total land area of the solar plants are displayed in square meters upon a click.  

The live link can be found here: [Live Site - dvlpenergy](https://dvlpenergy-task-4229b9c60fd6.herokuapp.com/)

![Mock Up](./docs/dvlp-mockup-gif.gif)

## Table of Contents
- [dvlpenergy](#dvlpenergy)
  - [Table of Contents](#table-of-contents)
- [User-Experience-Design](#user-experience-design)
  - [The-Strategy-Plane](#the-strategy-plane)
    - [Site-Goal](#site-goal)
    - [Agile Planning-and-Process](#planning-and-process)
      - [Steps](#steps)
          - [Backend Django Setup](#Backend-Django-Setup)
          - [ElephantSQL Database Setup](#ElephantSQL-Database-Setup)
          - [Frontend React Setup](#Frontend-React-Setup)
          - [Model Creation](#Model-Creation)
          - [URL Configuratgion](#URL-Configuratgion)
          - [Map Integration and Data Fetching](#Map-Integration-and-Data-Fetching)
          - [Home Page](#Home-Page)
      - [User Stories](#user-stories)
  - [The-Skeleton-Plane](#the-skeleton-plane)
    - [Database-Design](#database-design)
    - [Security](#security)
  - [The-Surface-Plane](#the-surface-plane)
    - [Design](#design)
    - [Colour-Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
  - [Technolgies](#technolgies)
  - [Testing](#testing)
  - [Deployment](#deployment)
    - [Version Control](#version-control)
    - [Heroku Deployment](#heroku-deployment)
  - [Credits](#credits)

# User-Experience-Design

## The-Strategy-Plane

### Site-Goals

This web application is aimed at displaying the map of Brandenburg with plotted polygon layers of solar plants.
When the user clicks on the polygon layer marked red, the total area of the polygon pops up in square meters.


### Agile Planning-and-Process

As soon as I got the task, I begun to brainstorm.
I thought it wise to make use of almost all the applicable technologies I have learnt so far.
I then started researching into the feasibility of my plan to use React with Vite for the frontend and the Django REST Framework for creating the API endpoint for the backend.

As soon as I was certain, I created a sample logo for patency reasons with Canva.
I then created the [dvlpenergy-task repository](https://github.com/samuelandersoncodes/dvlpenergy-task) and begun to jot down the rough idea I have and how to go about it, as well as the order in which I will be building the web application.

Subsequently, I used the Kanban board to plan the main segments of the development.
![Kanban board](./docs/dvlp-energy-kanban.png)
With that, I had only four main issues set in order of priority due to time constraints. ![Issues](./docs/dvlp-kanban-issues.png)
It comes along with its respective user stories, acceptance criteria and tasks. For example, the main priority was to get the map well integrated so that I can continue to build upon it. ![Issues](./docs/main-user-story.png)

## Steps

### 1. Backend Django Setup 
I first created my Django project in the [dvlpenergy-task repository](https://github.com/samuelandersoncodes/dvlpenergy-task) with the command 'django-admin startproject solar_farm_map .' after I have cloned the aforementioned repository with 'git clone https://github.com/samuelandersoncodes/dvlpenergy-task.git'

I then changed the directory to the Django project level with the 'cd solar_farm_map' command.

Thereafter, I created my 'brandenburg_plants' app with the 'python manage.py startapp brandenburg_plants' command.

I straight away created my virtual environment with 'python3 -m venv .venv' and activated it with '. .venv\Scripts\activate', always making sure that it is activated before I hit a key. 

Furthermore, I installed Django and the core necessary libraries. For instance, the Django RESTframework with the 'pip install django djangorestframework' and subsequently did so for the other libraries as needed.

I configured settings in the 'settings.py' file of the project, created the env.py file to store the django secret key and also added the new app to the installed apps section. Afterwards, I created my superuser with the 'python manage.py createsuperuser' command, migrated changes with 'python manage.py migrate' and made sure the site fires without errors. I finally added the .venv, sqlite3 and subsequently the staticfiles files to the gitignore file.

### 2. ElephantSQL Database Setup

Since I already have an ElephantSQL account, I just signed in and created a new instance for this particular project. I chose the 'Tiny Turtle' plan since the data is not so huge, named it 'dvlp' and selected the nearest region 'amazon-web-services::eu-west-1' as seen here;![elephantsql db](./docs/dvlp-elephantsql-db.png)
I copied the database url and added it to my env.py file.

After that, I set up the database in the settings file. In my bash terminal, I ran 'pip3 install dj_database_url==0.5.0 psycopg2' for the database connection dependencies and updated the requirements.txt file with which I created earlier on 'pip freeze > requirements.txt' and then imported the 'dj_database_url'. To confirm the connection, I 'ran python3 manage.py showmigrations' and then migrated the changes. I then created a 'management/command/load_data function to load the geoJSON fixture and confirmed the data in the browser/Table queries section of the ElephantSQL database.

### 3. Frontend React Setup

In the repository's root directory, I created the react app with Vite; 'npm create-vite@latest frontend --template' and chose TypeScript. I swichted to the frontend directory with 'cd frontend', ran installation; 'npm install", and run the server with 'npm run dev'. I then did all the vital additional installations including mapbox-gl which I will most definitely need. After confriming that my server runs smoothly, I created a .env file to keep frontend secret keys, ignored it in the gitignore file and got it committed.

### 4. Model Creation

In my Models.py file of the brandenburg_plants app, I defined the SolarPlant model with name and geometry fields, made migrations with the 'python manage.py makemigrations' and the 'python manage.py migrate' commands.

To enable API interactions with the SolarPlant model, I used the Django REST Framework serializer to ensure that instances of the SolarPlant can be converted to JSON and parsed back into model instances, facilitating smooth data exchange in the API. I only serialized the id, name and geometry fields for the purpose of the project. The name field seemed redundant since the solar plants in the 'bb_solar_plants.geojson' file had no names but I felt it could be useful for a later data enrichment and API usability.

I then created a viewset for viewing and editing SolarPlant instances. It provides CRUD actions for solar plant objects. It also uses the Solar plant serializer for data serialization and deserialization.

### 5. URL Configuratgion

I created a urls.py file at the app level, imported path, include, DefaultRouter from the restframework. I then set the router and registered it to the SolarPlantViewSet. I added the path to the urlpatterns and included the app url in the main urls.py file at the project level.

### 6. Map Integration and Data Fetching

The data fetching was done with the JavaScript 'fetch' method in the frontend, after I mocked the API to confirm that the data loads properly.
Before I fetched the data, I imported mapbox-gl (mapbox-gl already installed in previous steps) and made sure that it is well integrated into the frontend React component 'solarplantsmap/SolarPlantsMap.tsx' with the given access token (access token stored in the git ignored .env file).

Integration with Mapbox involved initializing a map instance within a React useEffect hook. This initialization process included setting up the map's container, style, center coordinates and zoom level. An event listener was implemented to handle map loading events, ensuring that the map initializes properly before proceeding with data visualization.

I configured the component to asynchronously request data from the Django backend API endpoint. The fetching process was thoroughly tested, ensuring that data loads reliably and conforms to the expected format. 

Upon successful retrieval, I transformed the fetched data(initially in JSON format) into geoJSON features suitable for mapping with Mapbox.

Each solar plant entry was mapped to a geoJSON feature with the forEach method (I used the forEach method in order for me to manipulate the existing data and not its copy). 
Alongside the Installation and importation of the proj4 library, I created a function outside of the 'SolarplantsMap' component to normalize the geometries from the EPSG:3857 projection to EPSG:4326 for compatibility with Mapbox's mapping interface and parse it to the geometry of the features. I also set the properties with index as its id for proper data retrieval and manipulation, especially for adding layers and the popup functionality.

Data visualization on the map was then achieved by dynamically adding geoJSON sources with mapbox's 'addSource' method and polygon layers with the 'addLayer' method for each solar plant feature. Each layer was styled with the mapbox-gl css library to visually represent solar plant locations, using the red color and opacity to distinguish different data points (I used the [mapbox documentation](https://docs.mapbox.com/mapbox-gl-js/guides/) as a guide). 
I implemented Popups displaying total area information on clicking each solar plant polygon layer with the turf library.

I used the 'try-catch' block to make sure data-fetching errors are handled properly and finally cleaned up the map initialization upon component unmount.

### 7. Home Page 

In the end, I built a home page for the web app to look aesthetic. The home page comes with a video background of a solar farm with a 'Open Map' button that leads to the map.

A simple navbar(with logo, home and project repository link) as well as a footer(with copyright and project repository link) were implemented.

The project was finally tested (test can be found here; [Testing](#testing) ) and deployed to heroku(the deployment details can be found here; [Deployment](#deployment) )

### Database-Design

The database was designed to allow CRUD functionality on the Django [REST Framework interface](https://dvlpenergy-task-4229b9c60fd6.herokuapp.com/api/solar_plants/) of the project and was purposefully created to serve geoJSON data to the frontend.

It has only one simple model without any Foreign key so I therefore feel no need to make an Entity Relationship Diagram for it.

### Security

Environment variables were stored in an env.py and .env files respectively for local development for security purposes to ensure no secret keys, access token or sensitive information were commited to the repository. In production, these variables were added to the heroku config vars.

Django corsheader and CRSF settings were configured to secure the site in production.

## The-Surface-Plane
### Design

### Colour-Scheme

The main color schemes for the website are orange rgb(222, 153, 33) mostly found on the links, logo and the 'Open Map' button. While gray #242424 is used as background colour. The copyright text comes as an exeption with a white colour.

### Typography

The Inter font together with (system-ui, Avenir, Helvetica, Arial, sans-serif in order of priority as backup fonts) was used throughout the website for text.

### Imagery

The logo was created with [Canva](https://www.canva.com/design/DAGIkq4s8nM/4wymCabDc6tKMTlBwaIvPg/edit) while its background was removed with [removebg](https://www.remove.bg/upload).

The background video was taken from [Pexels](https://www.pexels.com/search/videos/solar%20panels/) wich is for free and therefore does not infringe on patency rights.

## Technolgies

React was used with vite and TypeScript for the frontend in order to build a modern web app.
TypeScript was chosen purposefully to check errors at runtime to alleviate bugs.

Django and its RESTframework was used to create the backend rest API endpoint.

AWS S3 Bucket was used to stoe the logo and the video background files.

ElephantSQL database was also used to store the fixture loaded from the bb_solar_plants.geojson.

Django's whitenoise was used to serve static files in Production.

Heroku was used to host the web application.

Related libraries like the 'turf' used for the total area calculation, 'mapbox-gl' for the map initialization, 'proj4' for the EPSG:3857 and EPSG:4326 coordinate reference systems definition, 'mapbox-gl.css' for the map and map layer popup styling were used alongside to facilitate that developement.

Metatags were also used to boost the app's Search Engine Optimization.

## Testing

## Automated Testing

The unittest framework was used to test the backed code. All files were testes except the serializers.py file where, I had problems with the GDAL installation on my sytem. Nothwithstanding data was thoroughly logged in the console to ensure its correctly serialized. ![unittest coverage report](./docs/coverage-test-result.png)

For the frontend, TypeScript was used to ensure that any error is caught at runtime.

## Functional Testing

**Open Map Button**

Description:

Steps:

1. Navigate to [dvlpenergy-task](https://dvlpenergy-task-4229b9c60fd6.herokuapp.com/)
3. Click the Open Map button

Expected:

Redirects to the  Brandenburg map with red polygon layers.

Actual: 

The Brandenburg map opens upon clcking the Open Map button with polygon layers.


**Polygon Layer Popup**

Description:

Steps:

1. Navigate to [dvlpenergy-task](https://dvlpenergy-task-4229b9c60fd6.herokuapp.com/)
3. Click the Open Map button
3. While on the map, zoom into the particular polygon layer you want to check.
4. Click on the layer

Expected:

A white popup with black text is expected to show up with the total area in square meters. 

Actual: 

The area of the polygon is displayed clearly as expected.

**Links and Logo**

Description:

Steps:

1. Navigate to [dvlpenergy-task](https://dvlpenergy-task-4229b9c60fd6.herokuapp.com/)
3. Click on any link or the logo.


Expected:

The Project repo link should open in an external tab while the logo redirects to the home page 

Actual: 

The the links and the logo work exactly as expected.

## Lighthouse Report

![Lighthouse report](./docs/dvlp-lighthouse.png)

**If I had more time, I would have loved to clean up the code further and run validator tests too**

## Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and above as defined in WCAG 2.1 Reflow criteria for responsive design on Chrome, Edge, Firefox and Opera browsers.

Steps to test:

- Open a browser and navigate to [dvlpenergy-task](https://dvlpenergy-task-4229b9c60fd6.herokuapp.com/)
- Open the developer tools (right click and inspect or hit the F12 key)
- Set to responsive and decrease width to 320px
- Set the zoom to 50%
- Click and drag the responsive window to maximum width

Expected:

Web application is responsive on all screen sizes and no images are pixelated or stretched. No horizontal scroll is present. No elements overlap as well.

Actual:

Web application behaved as expected.

Web application was also opened on the following devices and no responsive issues were found(except on some smaller phone like the phone 11, where the background video appears an image):
                                                           
-Huawei mipad 10                                                       
-Iphone 10                                                        
-Iphone 12 Xs max                                                         
-Iphone 12                                                              
-Iphone 14                                                                                            
-Samsung A 12                                                                 
-Samsung Galaxy 20                                                                   
-Samsung Galaxy Tab S7                                                                     
-Hp EliteBook 8440p                                                        
-Hp laptop 14s                                                               
-Dell Latitude 5430   

## Bugs (fixed)

At the production stage, the database was realized to be empty. After conducting unittests and switching to from the sqlite3 databas eto the postgresSQL. This was resolved by reloading the fixtures with the 'load_geojson' custom command I created and using the Heroku Command Line Interface in my Vscode terminal to load the data onto my ElephantSQL databse. 

Inversely, on some mobile phones, it was realized that the background video displays as a mere image which is not the intended feature. I am still trying to fish this out. For now I found that the video file is too large even after I compressed it. I will be working on compressing it further to see if that fixes the malfunctionality.

Besides, the web Application functions fully as expected.

# Deployment

### Version Control

The web application was created using the VScode editor and pushed to github to the [dvlpenergy-task](https://github.com/samuelandersoncodes/dvlpenergy-task) remote repository.

The following git commands were the most used during the development stage to push code to the repository:

```git add <filename>``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queued for the final push.

```git push``` - This command was used to push all committed code to the remote repository on github.

```git commit --amend -m "Amended git commit message"``` - This command was used to correct mistakenly/misspelt pushed commit messages.

```git push -f``` - This command was used to force push an amended commit message.

### Heroku Deployment

The site was deployed to Heroku. The steps to deploy are as follows:

- Add a Procfile in the in the project directory
- Set up the app's wsgi with gunicorn
- Build the frontend up by running the 'npm run build' command in its directory
- In the templates/index.html wrapper file, update the static build
- Collect static files by running the 'python manage.py collectstatic'  
- Navigate to heroku
- Click the 'new' button on the top right corner
- Select create new app 
- Enter app name (dvlpenergy-task)
- Select region and click create app
- Click the resources tab and search for Heroku Postgres
- Select hobby dev and continue
- Go to the settings tab and then click reveal config vars
- Add the following config vars:
  - SECRET_KEY(s): (***********)
  - DATABASE_URL: (postgres url)
- Click the deploy tab
- Scroll down to Connect to GitHub and sign in / authorize when prompted
- In the search box, find the repositoy you want to deploy and click connect
- Scroll down to Manual deploy and choose the main branch
- Click deploy

The app should now be deployed.

The live link can be found here: [Live Site](https://dvlpenergy-task-4229b9c60fd6.herokuapp.com/)

## Credits 

* Persons
    * I thank Oliwia Zaremba for giving me such a practical task. I have really learnt a lot through the development of this project, most especially with maps and geoJSON data.

* [Mapbox docs](https://docs.mapbox.com/style-spec/reference/sources/#geojson)
    * The mapbox documentation was very helpful as a guide to my code execution with map rendering.

* [Vite docs](https://vitejs.dev/guide/)
    * Additionally, the Vite documentation helped in finding my way around using the 'import.meta' instead of the 'process' I know in CRA and also using the 'VITE' prefix keyword to access the token in my .env file.

* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)
    * When I got stack with the database loading at the production level, the above Heroku resource was my guide to connect to the ElephantSQL database through my VS code terminal.

