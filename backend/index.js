import dotenv from "dotenv";
import express from "express";
import Cors from "cors";
import axios from "axios";

dotenv.config();

const app = express();

app.use(Cors());

// Route handler for the default home page
app.get("/", (req, res) => {
  res.send("Backend");
});

app.get("/api", (req, res) => {
  let data = {};
  var config1 = {
    method: "post",
    url: "https://devcore02.cimet.io/v1/generate-token",
    headers: {
      "Api-Key": "4NKQ3-815C2-8T5Q2-16318-55301",
      Cookie:
        "laravel_session=eyJpdiI6IndHRDRDNGRqRkdLV0wzdjdJbE1tOUE9PSIsInZhbHVlIjoiXC92anVtdndxWXBjM0dJN0JQV280bzVsRlZvMm8rejNGVTdLdmtyb083VE9yRE8za1F3b2NWZTBMM29LQkpyVFNialdwT2JRSExxRUlxZXg5R1kzVStRPT0iLCJtYWMiOiI5NTA3Yzk2NzgwMWU5YTBhYjAzNTg1MWY2OTIzNDhmYjExZjc5NWNjMTRjYTE3NTU1NTU0NzMzYTNmNzRhODhiIn0%3D",
    },
  };
  axios(config1)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then((res) => {
      var config2 = {
        method: "post",
        url: "https://devcore02.cimet.io/v1/plan-list",
        headers: {
          "Api-Key": "4NKQ3-815C2-8T5Q2-16318-55301",
          "Auth-token": res.data.data.token,
          Cookie:
            "laravel_session=eyJpdiI6IndHRDRDNGRqRkdLV0wzdjdJbE1tOUE9PSIsInZhbHVlIjoiXC92anVtdndxWXBjM0dJN0JQV280bzVsRlZvMm8rejNGVTdLdmtyb083VE9yRE8za1F3b2NWZTBMM29LQkpyVFNialdwT2JRSExxRUlxZXg5R1kzVStRPT0iLCJtYWMiOiI5NTA3Yzk2NzgwMWU5YTBhYjAzNTg1MWY2OTIzNDhmYjExZjc5NWNjMTRjYTE3NTU1NTU0NzMzYTNmNzRhODhiIn0%3D",
        },
      };

      axios(config2, {
        session_id:
          "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9",
      })
        .then(function (response) {
          data = response.data;
          res.status(200).json(data);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    });
});

// Errors
app.all("*", (req, res, next) => {
  res.status(500).send("Error");
});

const port = process.env.PORT || 4000;
// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
