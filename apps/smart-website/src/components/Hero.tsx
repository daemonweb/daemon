export default function Hero() {
    return (
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                <h1>
                    <span class="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">Coming soon</span>
                    <span class="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                    <span class="block text-gray-900">Data to enrich your</span>
                    <span class="block text-indigo-600">online business</span>
                    </span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.</p>
                <div class="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                    <p class="text-base font-medium text-gray-900">Sign up to get notified when it’s ready.</p>
                    <form action="#" method="POST" class="mt-3 sm:flex">
                        <label for="email" class="sr-only">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            class="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1" 
                            placeholder="Enter your email"
                        />
                        <button type="submit" class="mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center">Notify me</button>
                    </form>
                    <p class="mt-3 text-sm text-gray-500">
                    We care about the protection of your data. Read our
                    <a href="#" class="font-medium text-gray-900 underline">Privacy Policy</a>.
                    </p>
                </div>
            </div>
            <div class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                <svg class="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
                    <defs>
                    <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
                    <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                </svg>
                <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                    <button type="button" class="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span class="sr-only">Watch our video to learn more</span>
                    <img class="w-full" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <span class="absolute inset-0 flex h-full w-full items-center justify-center" aria-hidden="true">
                        <svg class="h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 84 84">
                        <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                        <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                        </svg>
                    </span>
                    </button>
                </div>
            </div>
        </div>
    )
}