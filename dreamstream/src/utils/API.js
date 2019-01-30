import axios from "axios";

export default {
 getSearches: function(q) {
   return axios.get("http://api.tvmaze.com/singlesearch/shows?q=/search/api/tvm", { params: { q }});
 },
 getProfileSearches: function(id) {
   return axios.get("/api/search/" + id);
 },
 saveSearch: function(body) {
   return axios.post("/api/search/save", body)
 },
 deleteSearch: function(id) {
   return axios.delete("/api/profile/" + id);
 }
};