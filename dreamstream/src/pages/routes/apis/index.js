import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

export const checkJwt = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and
    // the signing keys provided by the JWKS endpoint
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5, 
        jwksUri: "https://carson-curry.auth0.com/.well-known/jwks.json"
    }),

    // Validate the audience and the issuer
    audience: 'https://api.dreamstream.com',
    issuer: "https://carson-curry.auth0.com/",
    algorithms: ['RS256']
});