const axios = require("axios");

async function catchUrlError() {
  try {
    await axios.get("https://qauto.forstudy.space/api/wrongURL");
  } catch (error) {
    expect(error.response.status).toBe(404);
    console.log(error.response.status)
    return error.message;
  }
}

async function testingRequestHeadersAndParams(headers, params) {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1", {
    headers,
    params,
  });
  return response;
}

async function statusCode(status_code) {
  try {
    const responseStatus = await axios.get(`https://httpbin.org/status/${status_code}`);
    return responseStatus.status;
  } catch (error) {
    throw new Error (`Error Status Code ${error.response?.status}`)
  }
}

module.exports = { catchUrlError, testingRequestHeadersAndParams, statusCode };
