import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";


const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Not Found Expense</h2>;
    }
    
    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};
export default ExpensesList;



// import ExpenseItem from "./ExpenseItem";
// import "./ExpenseList.css";

// function ExpenseList(props) {
//   if (props.item.length === 0) {
//     return <h2 className="expenses-list__fallback">Not Found Expense</h2>;
//   }

//   return (
//     <ul className="expenses-list">
//       {props.item.map((data) => (
//         <ExpenseItem
//           key={data.id}
//           title={data.title}
//           amount={data.amount}
//           date={data.date}
//         />
//       ))}
//     </ul>
//   );
// }
// export default ExpenseList;