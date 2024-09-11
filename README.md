## Set Up Instruction

1. Go to the root directory that contains `docker-compose.yaml`
2. Run the following command

```
docker-compose up --build 
```

3. Wait until both `frontend` and `backend` containers have finally been spun up. Then type in `http://localhost:3000/` in your local browser to access the frontend. 


## Libraries and Tools Used

### Frontend

1. `react-google-charts` for chart visualization library
2. `@mui/icons-material` for icons library

### Backend

1. `djangorestframework`
2. `django-cors-headers`


## Thought Process

1. I utilize Docker to containerize both `frontend` and `backend` for easier configuration and submission. The two containers are connected to a network that allows the frontend to access the API from the containerized backend. 
2. The backend serves as the server that handles all the calculation and logic. This is the reason why I put data processing methods from the hard-coded data to be handled in the backend as I believe this separation is the common convention in software development practices! 
3. The frontend displays the user interface that reflects data sent from the backend. I use the Next.js 13 routing feature to handle all the API calls and leverage the server-side rendering for quicker initial load. I was debating between 2 design mechanisms:
    - Fetch everything all at once at the start and store them in an array. Enhancing user experience as switching between chart views is faster. The drawback is that if initial payload is too much, it'll make the page loads way longer than it needs to be. (I decide to go with this one for now for simplicity)
    - Fetch chart data only if it's necessary. Meaning, when user chooses to see a specific chart, that's when the respective API is being called. Then, we can store the fetched data to a cache as we don't want to the app to keep on re-fetching whenever a chart view is requested. (Way more scalable as data grows larger)
4. I also try to mimic the UI from Blockhouse's main branding!
5. I have to be honest that this is my first time using Next.js. My past experiences with React and Gatsby helped me with adapting to this new tool.
