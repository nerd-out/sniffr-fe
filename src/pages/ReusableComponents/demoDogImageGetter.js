import demoAstro from './demoAstro.png';
import demoAugie from './demoAugie.png';
import demoCerberus from './demoCerberus.png';
import demoMax from './demoMax.png';
import demoSiri from './demoSiri.png';
import demoSlinky from './demoSlinky.png';

export const demoDogImages = {
  Augie: demoAugie,
  Max: demoMax,
  Siri: demoSiri,
  Cerberus: demoCerberus,
  Slink: demoSlinky,
  Astro: demoAstro
};

export const demoDogImageGetter = dog => {
  return demoDogImages[dog.dog_name];
};
