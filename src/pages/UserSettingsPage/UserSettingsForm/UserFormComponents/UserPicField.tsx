import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const UserPicField: React.FC<MUIReactHookFormControl> = ({
  control
}): React.ReactElement => (
  <Controller
    control={control}
    name="user_pic"
    render={({
      field: { ref, onChange, onBlur, value, name },
      fieldState: { isTouched, error },
      formState
    }) => (
      <TextField
        label="User Picture"
        variant="outlined"
        sx={{ mb: 2, width: '100%' }}
        inputRef={ref}
        helperText={!!error && isTouched && <>URL to picture. May be blank.</>}
        error={!!error && isTouched}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="https://example.com/picture.jpg"
        value={value}
        name={name}
      />
    )}
    rules={{
      required: false,
      pattern: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$/
    }}
  />
);

export default UserPicField;
