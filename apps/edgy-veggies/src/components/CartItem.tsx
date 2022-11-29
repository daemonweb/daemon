import { HiSolidTrash, HiSolidCurrencyDollar, HiOutlineX } from "solid-icons/hi";

export type CardItemProps = {
    name: string,
    price: number,
    count: number,
    imgSrc: string
}

export default function CartItem(props: CardItemProps) {
    return (
        <li class="flex space-x-6 py-6">
            <img src={props.imgSrc} alt="thing" class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"/>
            <div class="flex-auto space-y-1">
              <h3 class="text-gray-900">
                <a href="#">Basic Tee</a>
              </h3>
              <p>Charcoal</p>
              <p>L</p>
            </div>
            <p class="flex-none font-medium text-gray-900">$36.00</p>
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