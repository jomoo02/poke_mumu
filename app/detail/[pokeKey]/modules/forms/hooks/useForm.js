import { useLanguage } from '@/app/language-provider';

function setImageSrc(id) {
  const basicUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  const specialIdCase = {
    666: '/vivillon-icy-snow.png',
    '666-meadow': '/vivillon-meadow.png',
  };

  const src = specialIdCase[id] || `${basicUrl}/${id}.png`;

  return src;
}

export default function useForm(form) {
  const { language } = useLanguage();

  const {
    id,
    name,
  } = form;

  const src = setImageSrc(id);

  const localeFormName = name[language] || name.ko || '모습';

  const alt = id;

  return {
    src,
    alt,
    formName: localeFormName,
  };
}
