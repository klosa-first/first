import jwt from 'jsonwebtoken';
import responses from '../utils/responses';

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('req.headers req.headers req.headers req.headers',req.headers)
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      token.replace(/(^"|"$)/g, '');
  
      jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
        if (err) {
          return   res.status(401)
          .json(responses.error(401, 'unauthorized'));
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(401)
      .json(responses.error(401, 'unauthorized'));
    }


};
export default auth;
