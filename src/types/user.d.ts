/**
 * Interface for User object. Aside from forms, the request and response to backend API should be similar to this for User object, if not the same
 */
interface User {
  username: string;
  email: string;
  name: string;
  age: number;
  gender: string;
  user_pic: string;
  user_bio: string;
  max_distance: number;
  zipcode: string;
}
