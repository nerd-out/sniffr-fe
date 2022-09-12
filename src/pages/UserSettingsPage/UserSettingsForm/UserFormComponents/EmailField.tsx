import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const EmailField: React.FC<MUIReactHookFormControl> = ({
  control
}): React.ReactElement => (
  <Controller
    control={control}
    name="email"
    render={({
      field: { ref, onChange, onBlur, value, name },
      fieldState: { isTouched, error },
      formState
    }) => (
      <TextField
        label="Email"
        variant="outlined"
        sx={{ mb: 2, width: '100%' }}
        inputRef={ref}
        helperText={
          !!error && isTouched && <>Please enter a valid email format.</>
        }
        error={!!error && isTouched}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
      />
    )}
    rules={{
      required: true,
      pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
    }}
  />
);

export default EmailField;
