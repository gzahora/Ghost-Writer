import axios from "axios";

export default {
  // Gets all stories
  getStories: function () {
    return axios.get("/api/stories");
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
};