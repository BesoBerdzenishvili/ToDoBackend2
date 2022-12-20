require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
// const workoutRoutes = require('./routes/workouts')

mongoose.set("strictQuery", true);

const PORT = process.env.PORT || 4000;

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// app.use('/api/workouts', workoutRoutes)

app.get("/", (req, res) => {
  const routesText = `
  <h1>Available methods</h1>
  <div>
    <pre><b>Check ./routes.js</b></pre>
  </div>
  
  <pre>
  WORKOUT: 111

  router.post('/api/workout'),
  router.get('/api/ workout/:id'),
  router.get('/api/workouts’),
  router.patch('/api/workouts/:id),
  router.delete('/api/workouts/:id),
  </pre>
    `;
  res.status(200).send(routesText);
});

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Connecter to DB and listening on port http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
