import { FormEvent } from 'react';
import { BiSearch } from 'react-icons/bi';

import { useRouter } from 'next/navigation';

import * as S from './styles';

export function SearchForm() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);

    const term = formValues.s;
    router.push(`/busca/?s=${term}`);
  };

  return (
    <S.Form action="/busca/" onSubmit={(form) => handleSubmit(form)}>
      <input
        type="text"
        name="s"
        id="s"
        placeholder="Faça sua busca"
        required
      />
      <button type="submit">
        <BiSearch />
      </button>
    </S.Form>
  );
}
