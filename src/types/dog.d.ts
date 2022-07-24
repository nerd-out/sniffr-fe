interface DogState {
    name: string | null;
    sex: string;
    age: number | null;
    isVaccinated: boolean;
    breed: string | null;
    breedId: number | null;
    isFixed: boolean;
    bio: string | null;
    pic: string | null;
    // add these in once the tables are made in the BE 
    // temperament: string | null;
    // size: string;
  }