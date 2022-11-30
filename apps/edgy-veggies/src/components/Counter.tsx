
export interface ICounterProps {
    count: number;
    increment(): void,
    decrement(): void;
}

export default function Counter(props: ICounterProps) {
    return (
        <div class="flex flex-row h-8 rounded-lg bg-transparent">
            <button onClick={() => props.decrement()} data-action="decrement" class="text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-7 rounded-l cursor-pointer outline-none">
                <span class="m-auto text-2xl font-thin">−</span>
            </button>
            <div class="flex items-center justify-center w-8 h-full font-semibold text-md hover:text-black focus:text-black relative">
                {props.count}
            </div>
            <button onClick={() => props.increment()} data-action="increment" class="text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-7 rounded-r cursor-pointer">
                <span class="m-auto text-2xl font-thin">+</span>
            </button>
        </div>
    )
}