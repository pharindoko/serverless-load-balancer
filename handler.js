
module.exports.handler = async (event, context, callback) => {

    response = {
      statusCode: 200,
      statusDescription: '200 OK',
      headers: { 'Set-cookie': 'cookies', 'Content-Type': 'application/json' },
      body: 'Successfully executed lambda call via loadbalancer',
    };
    return callback(null, response);
  }
