import { Button, TextField, Typography, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../../validation/authSchema";

import PasswordField from "../../components/auth/PasswordField";

import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

import toast from "react-hot-toast";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    const result = await dispatch(login(data));

    if (login.fulfilled.match(result)) {
      toast.success("Login Successful");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <TextField
        fullWidth
        label="Email"
        margin="normal"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <PasswordField
        label="Password"
        register={register}
        name="password"
        error={errors.password}
      />

      <Button
        fullWidth
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
        type="submit"
        disabled={loading}
      >
        {loading ? "Signing In..." : "Login"}
      </Button>

      <Stack
        direction="row"
        justifyContent="center"
        mt={3}
      >
        <Typography>
          Don't have an account?
        </Typography>

        <Link
          to="/register"
          style={{
            marginLeft: 5,
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Register
        </Link>
      </Stack>

    </form>
  );
}

export default LoginForm;