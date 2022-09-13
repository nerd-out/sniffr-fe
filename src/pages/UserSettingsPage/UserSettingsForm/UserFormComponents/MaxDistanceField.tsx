import React from 'react';
import { Controller } from 'react-hook-form';

import { DropdownField } from '../../../../components';

const distanceOptions = [
  { label: '2 Miles', value: 2 },
  { label: '5 Miles', value: 5 },
  { label: '10 Miles', value: 10 },
  { label: '20 Miles', value: 20 },
  { label: '50 Miles', value: 50 },
  { label: '100 Miles', value: 100 }
];

const MaxDistanceField: React.FC<MUIReactHookFormControl> = ({
  control
}): React.ReactElement => (
  <Controller
    control={control}
    name="max_distance"
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
        label="Max Distance (miles)"
        name="max_distance"
        onBlur={onBlur}
        onChange={onChange}
        options={distanceOptions}
        ref={ref}
        value={value}
      />
    )}
    rules={{ required: true }}
  />
);

export default MaxDistanceField;
