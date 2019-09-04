const mongoose = require("mongoose");
const db = require("../models");

// This file empties the storyboards collection and inserts the storyboards below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ghostwriter"
);

const storySeed = [
  {
    title: "The Path to Choose: Coffee or Sleep",
    contributors: "Greg Zahora",
    story_section:
      "It was 10:30 pm on a Monday night and the man had to make a choice. He had just been offered a prestigious spot on the Peasant Destroyers, a top-tier competitive gaming league, but only if he could prove his worth at midnight in a battle-royale. He knew he would have to be at work at 6:30 am the next day, but was loathe to give up the opportunity to join his idols. The choice was this: coffee or sleep. Should he head to sleep for the night to be well-rested for the shareholder presentation? Or, could he stay up and risk the side-effects of the multiple cups of coffee needed to counteract the only four hours of sleep he could expect to get if he accepted the Peasant Destroyer's offer?",
    active: true,
    date: new Date(Date.now())
  },
  {
    title: "Test",
    contributors: "Testing",
    story_section:
      "This is a test",
    active: false,
    date: new Date(Date.now())
  }
];

db.Stories
  .remove({})
  .then(() => db.Stories.collection.insertMany(storySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
