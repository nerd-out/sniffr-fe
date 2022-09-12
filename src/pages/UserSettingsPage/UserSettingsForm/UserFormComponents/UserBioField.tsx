import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const UserBioField: React.FC<MUIReactHookFormControl> = ({
  control
}): React.ReactElement => (
  <Controller
    control={control}
    name="user_bio"
    render={({
      field: { ref, onChange, onBlur, value, name },
      fieldState: { isTouched, error },
      formState
    }) => (
      <TextField
        label="User Bio"
        variant="outlined"
        multiline
        minRows={2}
        sx={{ mb: 2, width: '100%' }}
        inputRef={ref}
        helperText={
          !!error && isTouched && <>Please say something about yourself.</>
        }
        error={!!error && isTouched}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
      />
    )}
    rules={{ required: true }}
  />
);

export default UserBioField;
