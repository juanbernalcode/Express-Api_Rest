const express = require('express');


// ------------ Initializing express --------
const app = express();



//-------------- Defining the port ----------
const port = process.env.PORT || 3001;





// -------------- Settings ------------------
app.set('port', process.env.PORT || 3001);



// ----------------- Routes -------------
app.use(require('./routes/indexRoutes')); // route = /
app.use(require('./routes/phonebook')); // route = api/persons





// ----------------- Server Listen ---------------
app.listen(port, () => {
    console.log(`Server on port ${port}`);
});
