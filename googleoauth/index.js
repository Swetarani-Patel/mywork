
const express = require('express');
const passport = require('passport')
const app = express();


app.get('/',(req, res)=>{
    res.send('working fine')
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(8000, ()=>{
    console.log('listening to port 8000')
})

