<template>
    <section class="h-screen flex flex-col text-green-300 bg-slate-900 justify-between content-center">
        <NavHeader />
        <slot />
        <NavFooter />
    </section>
</template>

<style>
a {
    @apply hover:underline;
}
</style>