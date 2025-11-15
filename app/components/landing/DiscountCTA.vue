<script setup lang="ts">
const links = ref([
    {
        label: "Learn more",
        color: "neutral",
        variant: "subtle",
        trailingIcon: "i-lucide-arrow-right",
        class: "cursor-pointer",
    },
]);
</script>

<template>
    <UContainer class="mt-12">
        <div
            class="flex justify-center text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted"
        >
            Lifetime Discount
        </div>
        <NuxtImg
            src="/image 2.png"
            alt="Discount Image"
            class="w-full h-auto rounded-lg mt-12"
        />
        <p class="text-lg sm:text-xl/8 text-muted text-balance mt-6">
            Discover our 20/10 Women’s Day Gift Collection, thoughtfully
            designed with complete accessories and refined elegance—perfect for
            expressing your heartfelt appreciation to your mother, wife,
            girlfriend, or female colleagues on this special occasion.
        </p>
        <div class="flex justify-center mt-16">
            <UButton
                size="xl"
                label="Learn more"
                class="cursor-pointer"
                @click="navigateTo('/women-day')"
            />
        </div>
    </UContainer>
</template>
