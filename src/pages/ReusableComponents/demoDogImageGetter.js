import demoAugie from './demoAugie.png';
import demoCerberus from './demoCerberus.png';
import demoMax from './demoMax.png';
import demoSiri from './demoSiri.png';

export const demoDogImages = {
  Augie: demoAugie,
  Max: demoMax,
  Siri: demoSiri,
  Cerberus: demoCerberus
};

export const demoDogImageGetter = dog => {
  return demoDogImages[dog.dog_name];
};
