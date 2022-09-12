import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const UserNameField: React.FC<MUIReactHookFormControl> = ({ control }): React.ReactElement => (
    <Controller
    control={control}
      name="username"
      render={({
        field: { ref, onChange, onBlur, value, name },
        fieldState: { isTouched, error },
        formState
      }) => (
        <TextField
          label="Username"
          variant="outlined"
          sx={{ mb: 2, width: '100%' }}
          inputRef={ref}
          helperText={
            !!error &&
            isTouched && (
              <>
                This field <em>may</em> be required.
              </>
            )
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

export default UserNameField;