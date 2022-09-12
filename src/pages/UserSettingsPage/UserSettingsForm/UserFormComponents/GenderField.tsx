import { DropdownField } from 'components';
import React from 'react';
import { Controller } from 'react-hook-form';

const genderOptions = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
  { label: 'Non-binary', value: 'non-binary' },
  { label: 'Transgender', value: 'trans' },
  { label: 'Intersex', value: 'intersex' },
  { label: 'Other', value: 'other' },
  { label: 'Not-Disclose', value: 'not-disclosed' }
];

const GenderField: React.FC<MUIReactHookFormControl> = ({
  control
}): React.ReactElement => (
  <Controller
    control={control}
    name="gender"
    render={({
      field: { ref, onChange, onBlur, value, name },
      fieldState: { isTouched, isDirty, error },
      formState
    }) => (
      <DropdownField
        error={error}
        isDirty={isDirty}
        isTouched={isTouched}
        formState={formState}
        label="Gender"
        name="gender"
        onBlur={onBlur}
        onChange={onChange}
        options={genderOptions}
        ref={ref}
        value={value}
      />
    )}
    rules={{ required: true }}
  />
);

export default GenderField;
