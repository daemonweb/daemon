// @refresh reload
import { ColorModeScript, HopeProvider, injectCriticalStyle } from "@hope-ui/core";
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { CartProvider } from "~/components/CartProvider";
import "./root.css";

export default function Root() {
  injectCriticalStyle();

  return (
    <Html lang="en">
      <Head>
        <Title>Edgy Veggies</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <ColorModeScript/>
        <HopeProvider >
        <CartProvider >

          <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        
        </CartProvider>
        </HopeProvider>
        <Scripts />
      </Body>
    </Html>
  );
}
