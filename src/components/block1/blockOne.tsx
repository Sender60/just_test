import { useState } from 'react';

export const BlockOne = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="fon">
      <div className="parrent">
        <h1 className="heading">Авторизация</h1>
        <input
          className="first-input"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="two"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button1">Войти</button>
      </div>
    </div>
  );
};
