import { useForm, Controller } from "react-hook-form";
import { ModalBlock } from "../../../components/ModalBlock";

import { FormControl, TextField, Button } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

interface LoginFormData {
  email: string;
  password: string;
}



const LoginFormSchema = yup.object({
  email: yup.string().email("Enter valid mail id").required(),
  password: yup.string().min(6, "​Minimum password length 6 characters").required()
})

export const LoginModal: React.FC<LoginModalProps> = ({onClose, open}) => {

  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(LoginFormSchema)
  })


  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  }

  return (
    <ModalBlock visible={open} title="Login to account" handleClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl component="fieldset" fullWidth>
          <Controller
            control={control}
            name="email"
            render={({ field }) => <TextField
              type="email"
              label="E-Mail"
              sx={{ mb: 3 }}
              variant="filled"
              autoFocus
              error={!!errors.email}
              helperText={errors.email?.message}
              {...field}
            />}
          />

          <Controller
            control={control}
            name="password"
            render={({ field }) => <TextField
              type="password"
              label="Password"
              sx={{ mb: 3 }}
              variant="filled"
              helperText={errors.password?.message}
              error={!!errors.password}
              {...field}
            />}
          />

          <Button
            onClick={handleSubmit(data => console.log(data)
            )}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth>
            Sign in
          </Button>
        </FormControl>
      </form>
    </ModalBlock>
  )
}