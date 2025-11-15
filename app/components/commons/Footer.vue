<template>
    <UFooter>
        <template #top>
            <USeparator />
        </template>
        <template #left>
            <UContainer>
                <UFooterColumns :columns="columns" />
            </UContainer>
        </template>

        <template #right>
            <UFormField
                name="email"
                label="Subscribe to our newsletter"
                size="lg"
            >
                <UInput type="email" class="w-full">
                    <template #trailing>
                        <UButton
                            type="submit"
                            size="xs"
                            color="neutral"
                            label="Subscribe"
                            class="cursor-pointer"
                        />
                    </template>
                </UInput>
            </UFormField>
        </template>
    </UFooter>
</template>
<script setup lang="ts">
import type { FooterColumn } from "@nuxt/ui";

const columns: FooterColumn[] = [
    {
        label: "About Us",
        children: [
            {
                label: "Our Story",
                to: "https://nuxters.nuxt.com",
                target: "_blank",
            },
        ],
    },
    {
        label: "Categories",
        children: [
            {
                label: "Scented Candles",
                to: "https://content.nuxt.com/",
                target: "_blank",
            },
            {
                label: "Gift Boxes",
                to: "https://devtools.nuxt.com/",
                target: "_blank",
            },
            {
                label: "Candle Mugs",
                to: "https://image.nuxt.com/",
                target: "_blank",
            },
        ],
    },
];
</script>
