'use strict';

module.exports.hello = async (event) => {
    const { v4: uuidv4 } = require('uuid');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        uuid: uuidv4(),
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
