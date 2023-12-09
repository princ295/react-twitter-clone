import React from "react";
import { ModalBlock } from "../../../components/ModalBlock";
import { Controller, useForm } from "react-hook-form";

import { TextField, FormControl, Button } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface RegisterModalProps {
  open: boolean
}

interface RegisterFormData{
  email: string,
  username: string,
  fullname: string,
  password: string,
  password2?: string
}

const RegisterFormSchema = yup.object({
  email: yup.string().email().required(),
  username: yup.string().required(),
  fullname: yup.string().required(),
  password: yup.string().min(6, "​Minimum password length 6 characters").required(),
  password2: yup.string().oneOf([yup.ref("password")], "Password do not match")
})


export const RegisterModal: React.FC<RegisterModalProps> = ({ open }): React.ReactElement => {

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: yupResolver(RegisterFormSchema)
  })

  const onSubmit = (data: RegisterFormData) => { 
    console.log(data, 'data')
  }

  return (
    <ModalBlock visible={open} title="Register to account">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth component="fieldset" >
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
            name="username"
            render={({ field }) => <TextField
              type="text"
              label="Username"
              sx={{ mb: 3 }}
              variant="filled"
              autoFocus
              error={!!errors.username}
              helperText={errors.username?.message}
              {...field}
            />}
          />

          <Controller
            control={control}
            name="fullname"
            render={({ field }) => <TextField
              type="text"
              label="Full name"
              sx={{ mb: 3 }}
              variant="filled"
              autoFocus
              error={!!errors.fullname}
              helperText={errors.fullname?.message}
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
              autoFocus
              error={!!errors.password}
              helperText={errors.password?.message}
              {...field}
            />}
          />
          <Controller
            control={control}
            name="password2"
            render={({ field }) => <TextField
              type="password"
              label="Conform Password"
              sx={{ mb: 3 }}
              variant="filled"
              autoFocus
              error={!!errors.password2}
              helperText={errors.password2?.message}
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
            Sign up
          </Button>
        </FormControl>

      </form>
    </ModalBlock>
  )
}