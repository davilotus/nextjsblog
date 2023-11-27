import format from 'date-fns/format';

export const formatDate = (date: Date) => {
  const formatedDate = format(new Date(date), 'dd/MM/yyyy');
  return formatedDate;
};
