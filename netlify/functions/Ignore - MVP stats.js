// 1) Place recent scores/scoreboard on index.html

// 2) Create MVP stats html page
// List each players name, pic (from bios page) and stats (from stats page)
// Pull stats from api for each button pressed

let firebase = require('./firebase')

exports.handler = async function(event) {
  let returnValue = []

// Start api process
window.addEventListener('DOMContentLoaded', async function() {

// Select see morex4(?) button
let seemoreButton = document.querySelector(`.see-more`)
seemoreButton.addEventListener(`click`, async function(event){
event.preventDefault()

// See more button 2
// See more button 3
// See more button 4

// If see more button 1 selected, then player name = XYZ, else if see more button 2 selected, then player name = ABC...

// Embed player name in url
let url = `https://api.NBAxyz.com/v1/forecast.json?key=663b1ce3b2e54644b16153852212704&q=${playername}`

// Convert url to json
let response = await fetch(url)
let json = await response.json()
console.log(json)

// Select HTML (?)
let Body = document.querySelector(`.body`)

// Make sentence w/json data points
Body.innerHTML = `
<div class="text-center space-y-2">
<div class="font-bold text-3xl">current season ppg ${playername.ppg}, current season rbg ${playername.rpg}, current season apg ${playername.apg}, current season spg ${playername.spg}</div>
<div class="font-bold">
         




  return {
    statusCode: 200,
    body: JSON.stringify(returnValue)
  }
}