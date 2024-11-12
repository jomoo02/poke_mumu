export type TimeOfDay =
  'night'
  | 'day'
  | 'dusk'
  | 'full-moon';

type TimeOfDayText = Record<TimeOfDay, string>;

const timeOfDayKo: TimeOfDayText = {
  night: '밤',
  day: '낮',
  dusk: '황혼',
  'full-moon': '보름달',
};

const timeOfDayEn: TimeOfDayText = {
  night: 'Nighttime',
  day: 'Daytime',
  dusk: 'Dusk',
  'full-moon': 'Full Moon',
};

const localizedTimeOfDay: Record<'en' | 'ko', TimeOfDayText> = {
  en: timeOfDayEn,
  ko: timeOfDayKo,
};

export {
  localizedTimeOfDay,
};
