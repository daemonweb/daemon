import type { Component } from "solid-js";
import Navbar from "./components/Navbar";
import { Modal, ModalProvider } from "./components/Modal";


export type AppProps = {
    title: string,
    children?: any
}

const App: Component<AppProps> = (props) => {
    return (
        <>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width" />
                    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                    <title>{props.title}</title>
                </head>
                <body>
                    <ModalProvider>

                    <Navbar></Navbar>
                    {props.children}
                    <Modal></Modal>

                    </ModalProvider>
                </body>
            </html>
        </>
    );
};

export default App;