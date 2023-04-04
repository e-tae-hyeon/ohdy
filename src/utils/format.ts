import {format} from 'date-fns';

export function getFormatDate(date: Date) {
  return format(date, 'yyyy-MM-dd');
}
