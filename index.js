const express     = require("express");
const PORT        = process.env.PORT || 3333;
const path        = require('path');
const app         = express();

app.use(express.static('public'));


// it deliveres front-end files to the client/browser
app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, './public', 'index.html'))
  });


app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
