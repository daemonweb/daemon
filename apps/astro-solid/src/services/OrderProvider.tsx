// import { createSignal, createContext, useContext } from "solid-js";
// import { Item, LineItem } from "../../clover";

// const OrderContext = createContext();

// const toLineItem = (item: Item) => {
//     return {
//         id: item.id,
//         item: item,
//         name: item.name,
//         price: item.price,
//         itemCode: item.code,
//         unitName: item.unitName
//     } as LineItem
// } 

// export const OrderProvider = (props) => {
//     const [lineItems, setLineItems] = createSignal([] as LineItem[]);
//     const state = [
//         lineItems,
//         {
//             add(item: Item) {
//                 setLineItems([...lineItems(), toLineItem(item)])
//             },
//             remove(i: number) {
//                 setLineItems[lineItems.]
//             }
//         }
//     ]

//     return (
//         <OrderContext.Provider value={}>
//           {props.children}
//         </OrderContext.Provider>
//       );
// }