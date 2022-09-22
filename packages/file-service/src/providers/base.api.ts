import "dotenv/config"; //To use .env
import axios from "axios";
import * as https from "https";
import * as http from "http";

const api = axios.create({
  httpAgent: new http.Agent({  
    //rejectUnauthorized: false //change this on production with https
  })
});


export const GET = async (url: string, key: string, params: string) => {
  var paramsURL = url + "/" + params;

  return await api.get(paramsURL, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      //"Authorization": "Bearer " + auth.useToken().getToken(),
      "apikey": key
    },
  });
};

export const POST = async (url: string, key: string, params: string, requestBody: any) => {
  var paramsURL = url + "/" + params;
  if (params === "") { paramsURL = url; }
  
  return await api.post(paramsURL, requestBody, {
    headers: {
      "Content-Type": "application/json",
      //"Authorization": "Bearer " + auth.useToken().getToken(),
      "apikey": key
    },
  });
};

export const PUT = async (url: string, params: string, key: string, requestBody: any) => {
  var paramsURL = url + "/" + params;
  return await api.put(paramsURL, requestBody, {
    headers: {
      "Content-Type": "application/json",
      //"Authorization": "Bearer " + auth.useToken().getToken(),
      "apikey": key
    },
  });
};
