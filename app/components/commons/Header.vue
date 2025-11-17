<template>
    <UHeader>
        <template #title>
            <NuxtImg src="/logo.svg" alt="Logo" format="webp" width='120' />
        </template>
        <UInput class='w-[550px]' type="search" placeholder="Search an item" variant="subtle"  size="lg" icon='ion:search-sharp'/>
        <template #right>
            <CommonsColorMode/>
            <UButton icon="lets-icons:bag" variant="ghost" class="cursor-pointer"/>
            <NuxtLink to='/login'>
                <UButton label="Sign in" variant="outline" class="cursor-pointer"/>
            </NuxtLink>
        </template>
    </UHeader>
</template>
