import { HiSolidTrash, HiSolidCurrencyDollar, HiOutlineX } from "solid-icons/hi";

export type CardItemProps = {
    name: string,
    price: number,
    count: number,
}

export default function CartItem(props: CardItemProps) {
    return (
        <div class="flex justify-between flex-nowrap h-12">
            <div class="flex flex-col">
                <span>{props.name}</span>
                <HiOutlineX/><span>{props.count}</span>
            </div>
            <div class="flex flex-col">
                <HiSolidCurrencyDollar /><span>{props.price}</span>
                <HiSolidTrash class="w-6 h-6" />
            </div>
        </div>
    );
}