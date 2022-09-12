import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const AgeField: React.FC<MUIReactHookFormControl> = ({
  control
}): React.ReactElement => (
  <Controller
    control={control}
    name="age"
    render={({
      field: { ref, onChange, onBlur, value, name },
      fieldState: { isTouched, error },
    }) => (
      <TextField
        label="Age"
        variant="outlined"
        sx={{ mb: 2, width: '100%' }}
        inputRef={ref}
        helperText={
          !!error && isTouched && <>Users must be at least 18 years old.</>
        }
        error={!!error && isTouched}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
      />
    )}
    rules={{ required: true, min: 18 }}
  />
);

export default AgeField;
