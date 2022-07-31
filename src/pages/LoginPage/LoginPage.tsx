import { Box, Button, TextField } from "@mui/material";
import logo from "../../assets/logo/logo.svg";


const LoginPage: React.FC = (): React.ReactElement => {
  return (
    <Box>
      <Box>
        <img src={logo} alt={"logo"} />
      </Box>
      <TextField label={"Username"} variant={"outlined"} /> 
      <TextField label={"Password"} variant={"outlined"} /> 
      <Button  variant={"contained"} >Login</Button>
    </Box>
  );
};

export default LoginPage;
