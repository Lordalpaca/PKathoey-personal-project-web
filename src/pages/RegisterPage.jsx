import { useNavigate } from "react-router";
import useAuthStore from "../stores/useAuthStore";

function RegisterPage() {
  const navigate = useNavigate();
  const registerUser = useAuthStore((state) => state.register);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const {
    regsiter,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(registerSchema) });

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data) => {
    const { confirmPassword, ...registerData } = data;
    const response = await registerUser(registerData);

    if (response.success) {
      navigate("/dashboard");
    }
  };

  return <div>RegisterPage</div>;
}
export default RegisterPage;
