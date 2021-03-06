import axios from "axios";

export default {
  // Gets all stories
  getStories: function () {
    return axios.get("/api/stories");
  },
  findNextSection: function (storyId) {
    console.log("API checking for next section");
    console.log(storyId + " is the story Id");
    return axios.get("/api/stories/next/" + storyId);
  },
  // Gets the story with the given id
  getStory: function (id) {
    return axios.get("/api/stories/" + id);
  },
  // Deletes the stories with the given id
  deleteStories: function (id) {
    return axios.delete("/api/stories/" + id);
  },
  // Saves a stories to the database
  saveStory: function (storiesData) {
    return axios.post("/api/stories", storiesData);
  },
  // Gets the story with the given id
  getStoryProgress: function (id) {
    return axios.get("/api/inProgress/" + id);
  },
  // Saves a stories to the database
  updateStory: function (sectionUpdate) {
    return axios.post("/api/sections/" + sectionUpdate.story_id, sectionUpdate);
  },

  updateActive: function (activeUpdate) {
    return axios.put("/api/stories/" + activeUpdate.story_id, activeUpdate);
  },

   //this ^ was added

  getUser: function () {
    return axios.get("/user/");
  }
};