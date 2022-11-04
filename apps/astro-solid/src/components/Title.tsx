import type { Component } from "solid-js";


const Title: Component = () => {
    return (
        <h1>{import.meta.env.TITLE_TEST}</h1>
    );
}

export default Title;