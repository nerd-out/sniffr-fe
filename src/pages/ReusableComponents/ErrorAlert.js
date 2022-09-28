import { Alert } from "@mui/material"

export const ErrorAlert = (error) => {
    return (
      <Alert sx={{ mb: 2 }} severity="error">
        {error}
      </Alert>
    )
}