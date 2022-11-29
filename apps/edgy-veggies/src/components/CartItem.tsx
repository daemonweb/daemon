import { HiSolidTrash, HiSolidCurrencyDollar, HiOutlineX } from "solid-icons/hi";

export type CardItemProps = {
    name: string,
    price: string,
    totalPrice: string,
    count: number,
    imgSrc: string
}

export default function CartItem(props: CardItemProps) {
    return (
        <li class="flex space-x-6 py-6">
            <img src={props.imgSrc} alt="thing" class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"/>
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
            <div class="flex items-start">
              <div class="flex items-center">
                <HiSolidCurrencyDollar />
              <span class=" font-medium text-gray-900">{props.totalPrice}</span>
              </div>
            </div>
            
          </li>
    );
}

{/* <div class="flex justify-between flex-nowrap h-12">
<div class="flex flex-col">
    <span>{props.name}</span>
    <HiOutlineX/><span>{props.count}</span>
</div>
<div class="flex flex-col">
    <HiSolidCurrencyDollar /><span>{props.price}</span>
    <HiSolidTrash class="w-6 h-6" />
</div>
</div> */}