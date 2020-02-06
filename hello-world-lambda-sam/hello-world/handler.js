const hello = process.env.TEXT_HELLO;
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.index = async (event, context) => {
  console.log(`Event: ${JSON.stringify(event)}`);
  const name = event.name || "world";
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: `${hello} ${name}`
        },
        null,
        2
      )
    };
  } catch (err) {
    console.error("ERROR:", err);
    response = err;
  }
  return response;
};
