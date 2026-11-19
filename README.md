
About This Project

For this assignment, I took my Animal Adoption Board from Assignment 5 and added an Express server. Instead of loading the animals from a JSON file, the app now gets the animal information from the server through API requests. I also added routes to show all animals, available animals, adopted animals, and individual animals.

How to Run the Project

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Run `npm install`.
4. Open the first terminal and run `npm run server`.
5. Open a second terminal and run `npm run dev`.
6. Open the localhost link provided by Vite.

 API Routes

- `GET /api/animals` - Shows all animals.
- `GET /api/available-animals` - Shows available animals.
- `GET /api/adopted-animals` - Shows adopted animals.
- `GET /api/animals/:id` - Shows one animal by ID.
- Invalid animal IDs return a 404 error.

 Reflections

### 1. What is the point of separating the app into a client and server component?

I think separating the client and server makes the project more organized. Vue handles what the user sees and clicks, while Express handles the animal data and requests. Keeping them separate also makes it easier to work on different parts of the project without everything being in one file.

 2. How do you think you will use the client/server combination in your final project?

For my final project, I could use Vue for the pages, buttons, and anything the user interacts with. Express could handle the data and requests behind the scenes. This would make the project easier to organize and allow the client and server to have different responsibilities.

 3. Do you prefer working with Vue or vanilla JavaScript, and why?

I prefer Vue because it keeps the code more organized by splitting things into components. I also like how it updates the page when data changes instead of having to manually update everything with JavaScript. It takes some getting used to, but I think it makes bigger projects easier to manage.
