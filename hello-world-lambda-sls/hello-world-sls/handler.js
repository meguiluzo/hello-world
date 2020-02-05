"use strict";

module.exports.index = async event => {
  console.log(`Event: ${JSON.stringify(event)}`);
  const hello = process.env.TEXT_HELLO;
  const name = event.name || "world";

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `${hello} ${name}`
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
