import { Button } from '../../UI';

import React, { useMemo } from 'react';

export const OrderSummary = ({
  modalClosed,
  modalContinue,
  price,
  ingredients,
}: Props): Node => {
  // TODO: сделать красиво
  const transformed = ingredients.reduce((acc, value): Node => {
    acc[value] = acc[value] ? acc[value] + 1 : 1;

    return acc;
  }, {});

  const ingredientSummary = useMemo(
    (): Node =>
      Object.keys(transformed).map((igKey, index): Node => {
        return (
          <li key={igKey + index}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            {transformed[igKey]}
          </li>
        );
      }),
    [transformed],
  );

  return (
    <>
      <h3>Ваш заказ</h3>
      <p>Цифровой бургер из:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Конечная цена: {price.toFixed(2)}</strong>
      </p>
      <p>Что дальше?</p>
      <Button clicked={modalClosed} btnType="danger">
        ЗАКРЫТЬ
      </Button>
      <Button clicked={modalContinue} btnType="success">
        ПРОДОЛЖИТЬ
      </Button>
    </>
  );
};
