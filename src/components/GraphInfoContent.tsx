import React from 'react';
import CheckIcon from './CheckIcon';

const GraphInfoContent = () => {
  return (
    <div className="container pt-5 my-5">
      <div className="row">
        <div className="col-lg-7 order-2 order-lg-1 content">
          <h2>Перегляньте пройдений шлях</h2>
          <p>
            Переходьте на особисту сторінку користувача для аналізу ваших дій та ефективності
            навчання за останні роки на ресурсі E-Olymp. Зробіть якісну оцінку вашим знанням для
            кожного року окремо. Отримайте:
          </p>
          <ul>
            <li>
              <CheckIcon />
              Картку користувача із статистикою виконаних завдань
            </li>
            <li>
              <CheckIcon />
              Детально побудований графік із аналізом відправлених рішень
            </li>
          </ul>
        </div>
        <div className="col-lg-5 order-1 order-lg-2">
          <img className="img-fluid" src={'/img/chart.png'} alt="Графік" />
        </div>
      </div>
    </div>
  );
};

export default GraphInfoContent;
