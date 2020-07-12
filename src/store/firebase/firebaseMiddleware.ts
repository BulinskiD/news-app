export default (store: any) => (next: (action: any) => void) => (
  action: any
) => {
  next(action);
};
