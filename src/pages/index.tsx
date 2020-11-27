import TextField from 'components/TextField';
import { FormEvent, useState, ChangeEvent } from 'react';

const initialFormData = {
  teste: '',
};

export default function Index() {
  const [data, setData] = useState(initialFormData);

  const teste = (name: string, value: string) => {
    setData({
      ...data,

      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="teste"
        name="teste"
        placeholder="teste"
        onInput={teste}
      />

      <button type="submit">butao</button>
    </form>
  );
}
