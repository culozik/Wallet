import s from "./List.module.scss";

const List = ({ data }) => {
  const array =
    data?.categoriesSummary?.filter((item) => item.type !== "INCOME") || [];

  return (
    <div>
      <div className={s.table}>
        <div className={s.main}>
          <b>Categories</b>
          <b>Sum</b>
        </div>
      </div>
      <ul className={s.list}>
        {array?.map((el) => (
          <li key={el.name} className={s.item}>
            <div className={s.listColor}>
              <div
                className={s.color}
                style={{ backgroundColor: el.color }}
              ></div>
              <p>{el.name}</p>
            </div>

            <p>{Math.abs(el.total)}</p>
          </li>
        ))}
        <li className={s.expenses}>
          <b>Expenses:</b>
          <b className={s.amountExpenses}>
            {Math.abs(data?.expenseSummary) || "--"}
          </b>
        </li>
        <li className={s.incomes}>
          <b>Incomes:</b>
          <b className={s.amountIncomes}>{data?.incomeSummary || "--"}</b>
        </li>
      </ul>
    </div>
  );
};

export default List;
