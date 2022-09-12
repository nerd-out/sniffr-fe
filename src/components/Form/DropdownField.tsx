import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FieldError, RefCallBack, UseFormStateReturn } from 'react-hook-form';

interface DropdownOption {
  label: string;
  value: string | number;
}

interface DropdownFieldProps {
  label: string;
  name: string;
  options: DropdownOption[];
  ref: RefCallBack;
  onChange: () => void;
  onBlur: () => void;
  value: any;
  isTouched: boolean;
  isDirty: boolean;
  error?: FieldError;
  formState: UseFormStateReturn<any>;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  name,
  options,
  ref,
  onChange,
  onBlur,
  value,
  isTouched,
  isDirty,
  error,
  formState
}) => {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel ref={ref} id={name}>{label}</InputLabel>
      <Select labelId={name} id={name} label={name}>
        {options.map((option: DropdownOption) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownField;
