import Counter from "~/components/Counter";
import { Link } from "solid-app-router";
// import ScrollShadows from "../lib/solid-scroll-shadows";
import ScrollShadows from "solid-scroll-shadows";
import { For } from "solid-js";

export default function Home() {
  const list = [
    "Home",
    "Docs",
    "Get Started",
    "Examples",
    "Tutorials",
    "Blog",
    "Contact",
    "Join",
  ];
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <Counter />
      <p class="mt-8">
        Visit{" "}
        <Link
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </Link>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <Link href="/about" class="text-sky-600 hover:underline">
          About Page
        </Link>{" "}
      </p>
      <div class="">
        <ScrollShadows
          class="w-[300px] relative"
          shadowsClass="w-[25px] h-full bg-blue-400"
          direction="row"
        >
          <ul class="flex overflow-auto">
            <For each={list}>
              {(item) => <li class="p-2 flex-shrink-0">{item}</li>}
            </For>
          </ul>
        </ScrollShadows>
      </div>
    </main>
  );
}
