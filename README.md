https://github.com/tonykieling/zehner

# Instalation
In order to install and run the **front-end application**:

 ```
 # git clone https://github.com/tonykieling/zehner.git
 # cd zehner/app
 # npm i
 # npm start
 ```
- The first line copies the sorce code to your machine.
Second line is about installing the depencies automatically.  
- For record, it depends on React, React-router-dom, and React-icon.  
- The last line runs the system locally, enabling navegation in the browser.  
  
    
To **install and run the server** - after following above directions:
- First, in the terminal, close the application (CTRL + z in Linux OS), and
```
# cd ..
# npm i
# npm start
```
- The second line installs the server application dependencies. Express and Path JS libraries will be installed.
- Note that the TCP port 3333 has to be available.
- Open the browser and type `http://localhost:3333/` and the web application will be sent by the server to your browser.

# User Scenarios
## User scenario 1  
  Home page contains:

  - Header:
    - Black bar on top => full width + 40 px height (2.5rem)
    - White navegation bar => full width + 100px (6.25 rem)
    - Itens (left to right):
      - Shop
      - Company's About
      - Company's Icon
      - Country (options: United States, Canada and United Kingdom)
      - Support
      - Search (icon)
      - User (icon)
      - Cart (icon)


  - Body
      - Products presentation
      - Others

  - Footer
    - Left side with 4 menus
    - Right side with subscription + social medias
    *** ? Should it present in the other menus ?

  *** Setting above is present for both mobile and large screen with some adaptations to mobile.
  - Navegation bar modifications - Itens (left to right):
    - Shop is going to be a Hambuguer Menu Icon
    - User (icon)
    - Company's Icon
    - Search (icon)
    - Cart (icon)


## User scenario 2
**User clicks Shop** and it shows a menu with products categories.

## User scenario 3
**User clicks Search** and it shows a text box over the navegation bar.

## User scenario 4
**User clicks Country** and it shows a menu with the 3 options.

