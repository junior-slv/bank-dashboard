import axios from 'axios';

const url = "https://robby-bank.herokuapp.com/users"

function getUser(){
  axios.get(url)
  .then(response =>{
    console.log(response)
  })
  .catch(error => console.log(error))
}
getUser()