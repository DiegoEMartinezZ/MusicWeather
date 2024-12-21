const client_id = "369f914aa851497f8699d6565d38e5e0";
const client_secret = "ebee50db7b394bfdb1141b7aa11e0f5b";

export const spotify = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " +
      new Buffer.from(client_id + ":" + client_secret).toString("base64"),
  },
  form: {
    grant_type: "client_credentials",
  },
  json: true,
};

request.post(spotify, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const token = body.access_token;
    console.log(token);
  }
});
