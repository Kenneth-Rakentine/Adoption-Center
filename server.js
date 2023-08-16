const express = require("express");
const app = express();
const PORT = 3000;
require("dotenv").config();
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const dogs = require("./models/dogs");
const Dog = require('./models/Dog')
const cats = require("./models/cats");
const Cat = require('./models/Cat')



// -------MiddleWare
app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(methodOverride('_method'));


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get("/dogs", (req, res) => {
    Dog.find({}).then((allDogs) => {
      res.render("dogs/Index", {
        dogs: allDogs,
      });
    });
  });

  app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Adoption Center!</h1>
        <p><a href="/dogs">Dogs</a></p>
        <p><a href="/cats">Cats</a></p>
    `);
});

app.get('/dogs', (req,res)=>{
    res.render("dogs/Index", {dogs:dogs})
});

  //_______________Index => All Dogs

  app.post("/dogs", async (req, res) => {
    const newDog = await Dog.create(req.body)
    console.log(newDog);
    res.redirect("/dogs");
  });


//________________Post


  app.get("/dogs/new", (req, res) => {
    res.render("dogs/New")
  })

//________________New

app.delete('/dogs/:id', async(req,res)=>{
    await Dog.findByIdAndRemove(req.params.id)
    res.redirect('/dogs')
  })

//________________Delete



app.put('/dogs/:id', async(req, res)=>{
    const updatedDog = await Dog.findByIdAndUpdate(req.params.id,req.body)
        
    res.redirect(`/dogs/${req.params.id}`);
    });


    app.get('/dogs/:id/edit', async(req, res)=>{
const foundDog =  await Dog.findById(req.params.id) 
console.log("FoundDog:", foundDog)
  res.render('dogs/Edit',{
    dog: foundDog
  })
})

    //________________Edit
  
  
  app.get("/dogs/:id", async (req, res) => {
    const eachDog = req.params.id;
    const dog = await Dog.findById(eachDog);

    res.render("dogs/Show", {
        dog: dog 
    })
  });

    //________________Show =>(each dog)
        //////////////////////////
    //___________DOG ROUTES ^


    app.get("/cats", (req, res) => {
      Cat.find({}).then((allCats) => {
        res.render("cats/Index", {
          cats: allCats,
        });
      });
    });

    app.get('/cats', (req,res)=>{
      res.render("cats/Index", {cats:cats})
  });
  
    //_______________Index => All Dogs
  
    app.post("/cats", async (req, res) => {
      console.log("Request Body:", req.body); 
      try {
        const newCat = await Cat.create(req.body);
        console.log(newCat);
        res.redirect("/cats");
      } catch (error) {
        console.error("Error creating cat:", error);
      }
    });
  
  
  //________________Post
  
  
    app.get("/cats/new", (req, res) => {
      res.render("cats/New")
    })
  
  //________________New
  
  app.delete('/cats/:id', async(req,res)=>{
      await Cat.findByIdAndRemove(req.params.id)
      res.redirect('/cats')
    })
  
  //________________Delete
  
  
  
  app.put('/cats/:id', async(req, res)=>{
      const updatedCat = await Cat.findByIdAndUpdate(req.params.id,req.body)
          
      res.redirect(`/cats/${req.params.id}`);
      });
  
  
      app.get('/cats/:id/edit', async(req, res)=>{
  const foundCat =  await Cat.findById(req.params.id) 
  console.log("FoundCat:", foundCat)
    res.render('cats/Edit',{
      cat: foundCat
    })
  })
  
      //________________Edit
    
    
    app.get("/cats/:id", async (req, res) => {
      const eachCat = req.params.id;
      const cat = await Cat.findById(eachCat);
  
      res.render("cats/Show", {
        cat: cat 
      })
    });
  
      //________________Show =>(each cat)
      //////////////////////////
    //___________CAT ROUTES ^




app.listen(PORT, (req, res) => {
    console.log(`Listening 3000`);
  });
  // -----------------{Server}

  



  
  //________________SEED ROUTE