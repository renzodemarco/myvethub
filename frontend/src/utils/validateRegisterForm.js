const validateForm = ({username, email, password, passwordConf}) => {

  if (!username) return 'El nombre es obligatorio';
  if (!email) return 'El correo electrónico es obligatorio';
  if (!password) return 'La contraseña es obligatoria';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'El correo electrónico no es válido';

  if (password !== passwordConf) return'Las contraseñas no coinciden';

  if (password.length < 8) return 'La contraseña debe tener al menos 8 caracteres';

  return null;
};

export default validateForm