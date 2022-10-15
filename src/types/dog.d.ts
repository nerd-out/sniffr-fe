import { NumberLiteralType } from 'typescript';

interface DogState {
  dog_name: string | null;
  sex: string;
  age: number | null;
  is_vaccinated: boolean;
  breed_name: string | null;
  breed_id: number | null;
  is_fixed: boolean;
  dog_bio: string | null;
  dog_pic: string | null;
  temperament_type: string | null;
  size: string | null;
  dog_id: NumberLiteralType;
}
