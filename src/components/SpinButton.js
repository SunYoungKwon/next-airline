import React, { useState } from 'react';

const SpinButton = () => {
  const [numberOfPerson, setNumberOfPerson] = useState(1);

  const onDecrease = () => {
    if (numberOfPerson < 0) return;

    setNumberOfPerson((prev) => prev - 1);
  };

  const onIncrease = () => {
    if (numberOfPerson >= 3) return;

    setNumberOfPerson((prev) => prev + 1);
  };

  const onChange = ({ target }) => {
    const value = Number(target.value);
    const prevNumberOfPerson = numberOfPerson;

    if (value < 0 || value > 3 || numberOfPerson === value) return;

    setNumberOfPerson(value);
  };

  return (
    <div lang="ko">
      <h1>승객 선택</h1>
      <h2>성인</h2>
      <div>
        <button
          type="button"
          onClick={onDecrease}
          disabled={numberOfPerson === 1}
          aria-disabled={numberOfPerson === 1}
          aria-label="성인 탑승자 한 명 줄이기"
        >
          -
        </button>
        <input
          type="number"
          min="1"
          max="3"
          aria-label="성인 탑승 승객 수"
          value={numberOfPerson}
          onChange={onChange}
        />
        <button
          type="button"
          onClick={onIncrease}
          disabled={numberOfPerson === 3}
          aria-disabled={numberOfPerson === 3}
          aria-label="성인 탑승자 한 명 늘리기"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SpinButton;
