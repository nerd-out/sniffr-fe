import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const ZipcodeField: React.FC<MUIReactHookFormControl> = ({ control }): React.ReactElement  => (
    <Controller
      control={control}
      name="zipcode"
      render={({
        field: { ref, onChange, onBlur, value, name },
        fieldState: { isTouched, error },
        formState
      }) => (
        <TextField
          label="Zipcode"
          variant="outlined"
          sx={{ mb: 2, width: '100%' }}
          inputRef={ref}
          placeholder={'20036'}
          helperText={
            !!error && isTouched && <>Please enter a valid zip code.</>
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
        pattern: /^\d{5}(?:[-\s]\d{4})?$/
      }}
    />
  );

export default ZipcodeField;
