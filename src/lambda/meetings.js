const axios = require( 'axios' );
const API_ENDPOINT = 'http://bazidna.com/Account/Login?ReturnUrl=%2fBazi%2fCase';
//const API_ENDPOINT = 'https://api.subsume.io/hertingfordbury/v1/meetings';
exports.handler = ( event, context, callback ) => {
	axios.get( API_ENDPOINT )
		.then( ( response ) => {
			callback( null, {
				headers: {
					'content-type': 'text/html;charset=utf-8'
				},
				statusCode: 200,
				body: response.data
			} );
		} )
		.catch( ( error ) => {
			callback( error );
		} );
};
