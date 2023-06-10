import { formatDistanceToNow } from 'date-fns';

const FormatDate = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export default FormatDate;
