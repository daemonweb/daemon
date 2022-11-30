import { /*HiSolidTrash,*/ HiSolidCurrencyDollar } from "solid-icons/hi";
import { ICardItemProps } from "../types";


export default function CartItem(props: ICardItemProps) {
    return (
        <li class="flex justify-between space-x-6 py-6">
          <div class="flex">
            <img 
              src={props.imgSrc} 
              alt="thing" 
              class="
                h-24 w-24 
                mr-3
                flex-none 
                rounded-md 
                bg-gray-100 
                object-cover object-center"/>
            <div class="flex flex-col justify-between items-start space-y-1">
              <h3 class="text-gray-900">{props.name}</h3>
              <div class="flex flex-col justify-between h-10">
                <div class="flex items-center">
                  <p class="mr-2">Price:</p>
                  <HiSolidCurrencyDollar />
                  <p>{props.price}</p>
                </div>
                <div class="flex items-center">
                  <p class="mr-5">Qty:</p>
                  <p>{props.count}</p>
                </div>
              </div>
            </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center">
                <HiSolidCurrencyDollar />
              <span class=" font-medium text-gray-900">{props.totalPrice}</span>
              </div>
            </div>
          </li>
    );
}