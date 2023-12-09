
import { Box, Grid, Typography, Button } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import { LoginModal } from "./components/LoginModal";
import { useState } from "react";
import { RegisterModal } from "./components/RegisterModal";

export const SignIn = () => {

  const [visibleModal, setVisibleModal] = useState("");

  return (
    <Grid container height='100vh'>
      <Grid
        item
        xs={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ bgcolor: '#1a93e0' }}
      >
        <TwitterIcon sx={{ fontSize: 50, fill: '#fff' }} color="primary" />
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box width={380}>
          <TwitterIcon fontSize="large" color="primary" />
          <Typography mt={2} lineHeight={1.2} variant="h4" fontWeight={700}>Find out what's happening in the world right now</Typography>
          <Typography variant="body1" mt={6} mb={2} fontWeight={700}>
            Join Twitter now!
          </Typography>
          <Button fullWidth onClick={() => setVisibleModal("login")} sx={{ mb: 2 }} variant="contained">Create account</Button>
          <Button fullWidth onClick={() => setVisibleModal("register")} variant="outlined">Sign In</Button>
          <Typography variant="caption">
            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
          </Typography>
        </Box>
      </Grid>
      <LoginModal open={visibleModal == "login"} onClose={() => setVisibleModal("")}/>
      <RegisterModal open={visibleModal == "login"} 
      //onClose={() => setVisibleModal("")}
      />
    </Grid>
  )
}