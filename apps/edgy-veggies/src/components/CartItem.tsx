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
                <span>x{props.count}</span>
            </div>
            <div class="flex flex-col">
                <span>{props.price}</span>
                <span>GARBAGE</span>
            </div>
        </div>
    );
}