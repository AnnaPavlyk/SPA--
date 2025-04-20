import React from "react";
import "./MyFuture.css";

const MyFuture = () => {
  return (
    <div className="page future">
      <h1>Мій розвиток</h1>

      <section className="future-steps">
        <h2>Мої 3 кроки до майбутнього:</h2>
        <ol>
          <li>
            Поглиблене вивчення JavaScript, TypeScript та бібліотек React / Next.js для створення
            сучасних SPA.
          </li>
          <li>
            Вивчення дизайну інтерфейсів, а також практичний досвід у створенні UI/UX прототипів.
          </li>
          <li>
            Освоєння геймдеву на Unity та Unreal Engine, адже мрію створити власну інді-гру з
            неймовірною атмосферою.
          </li>
        </ol>
      </section>

      <section className="dream-job">
        <h2>Робота мрії</h2>
        <p>
          Мрію працювати в команді, яка створює корисні, естетичні та технологічно інноваційні продукти.
          Це може бути IT-компанія, дизайн-студія або геймдев-команда. Головне — робити те, що надихає.
        </p>
      </section>

      <section className="quote">
        <blockquote>
          “Ніколи не здавайся, бо шлях може бути складним, але результат вартий зусиль.”
        </blockquote>
      </section>
    </div>
  );
};

export default MyFuture;
