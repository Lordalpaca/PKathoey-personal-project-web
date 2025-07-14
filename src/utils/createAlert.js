export const createAlert = (type, message) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'info':
      toast.info(message);
      break;
    case 'warn':
      toast.warn(message)
      break;
    default:
      toast(message)
  }
};
