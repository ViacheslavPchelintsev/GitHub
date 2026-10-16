const axios = require("axios");

const {
  catchUrlError,
  testingRequestHeadersAndParams,
  statusCode,
} = require("./apiTaskFunctions");

describe("Advanced configuration api tests", () => {
  test("Catch URL Error", async () => {
    const urlErrorMessage = await catchUrlError();
    console.log(urlErrorMessage);
  });

  test("Testing Request Headers and Params", async () => {
    const headers = { "User-Agent": "Testing Headers" };
    const params = { carId: 1 };

    const response = await testingRequestHeadersAndParams(headers, params);

    expect(response.config.headers["User-Agent"]).toBe(headers["User-Agent"]);
    expect(response.config.params).toEqual(params);
    console.log(response.config);
  });

  test("Testing status code 200", async () => {
    const checkCode = await statusCode(200);
    expect(checkCode).toBe(200);
    console.log(checkCode);
  });

  test("Testing status code 404", async () => {
    await statusCode(404).catch((error) => {
      console.log(error.message);
      expect(error.message).toBe("Error Status Code 404");
    });
  });

  test("Testing status code 500", async () => {
    await statusCode(500).catch((error) => {
      console.log(error.message);
      expect(error.message).toBe("Error Status Code 500");
    });
  });
});
