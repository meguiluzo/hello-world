const AWS = require("aws-sdk");
const isOffline = process.env.IS_OFFLINE === "true";

const credentials = new AWS.SharedIniFileCredentials({
  profile: "default"
});
AWS.config.credentials = credentials;

const lambda = new AWS.Lambda({
  apiVersion: "2015-03-31",
  region: "us-east-1",
  endpoint: isOffline ? new AWS.Endpoint("http://localhost:3002") : undefined
});

const lambdaInvoke = async () => {
  const params = { name: "everyone" };
  const functionName = "hello-world-index";

  console.log(`Lambda ${functionName} called with params`, params);

  const configuration = {
    FunctionName: functionName,
    InvocationType: "RequestResponse",
    Payload: JSON.stringify(params)
  };

  let response;

  try {
    response = await lambda.invoke(configuration).promise();
    const payload = JSON.parse(response.Payload);
    const { statusCode, body } = payload;
    console.log(`Lambda ${functionName} response with ${statusCode}`, body);
  } catch (error) {
    console.error("ERROR:", error);
  }
};

lambdaInvoke();
