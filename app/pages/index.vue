<template>
    <div>
        <LandingDiscountCTA/>
        <UPageHero
            title="Lumière Candle"
            description="A premium handcrafted candle brand offering beautifully designed, soothingly aromatic, and thoughtfully curated scents to elevate your everyday living."
            :links="links"
        />
        <UContainer>
            <LandingBentoDisplay />
            <LandingFeaturesCards/>
            <LandingHotsProduct />
        </UContainer>
        
    </div>
</template>
<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

definePageMeta({
    layout: "common",
});
const links = ref<ButtonProps[]>([
    {
        label: "Get started",
        to: "/docs/getting-started",
        icon: "i-lucide-square-play",
    },
    {
        label: "Learn more",
        to: "/docs/getting-started/theme/design-system",
        color: "neutral",
        variant: "subtle",
        trailingIcon: "i-lucide-arrow-right",
    },
]);
</script>
