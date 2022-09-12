import { useForm } from 'react-hook-form';

import defaultValues from './defaultValues';
import {
  AgeField,
  EmailField,
  GenderField,
  MaxDistanceField,
  NameField,
  SaveButton,
  UserBioField,
  UsernameField,
  UserPicField,
  ZipcodeField
} from './UserFormComponents';

const UserSettingsForm: React.FC = () => {
  const { control, handleSubmit } = useForm<User>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues
  });

  return (
    <form onSubmit={handleSubmit(() => console.log('dope'))}>
      <UsernameField control={control} />
      <EmailField control={control} />
      <NameField control={control} />
      <AgeField control={control} />
      <GenderField control={control} />
      <UserPicField control={control} />
      <UserBioField control={control} />
      <MaxDistanceField control={control} />
      <ZipcodeField control={control} />
      <SaveButton />
    </form>
  );
};

export default UserSettingsForm;
