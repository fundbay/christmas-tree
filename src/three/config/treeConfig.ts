/**
 * 圣诞树全局配置，统一管理颜色、粒子数量以及默认图片等参数
 */
export const TREE_CONFIG = {
    colors: {
        bg: 0x050d1a,
        fog: 0x050d1a,
        champagneGold: 0xffd966,
        deepGreen: 0x03180a,
        accentRed: 0x990000,
    },
    particles: {
        count: 1500,
        dustCount: 2000,
        snowCount: 1000,
        treeHeight: 24,
        treeRadius: 8,
    },
    performance: {
        responsiveParticles: true,
        smallDeviceWidth: 768,
        particleScale: {
            ornaments: 0.6,
            dust: 0.5,
            snow: 0.7,
        },
    },
    camera: { z: 50 },
    preload: {
        autoScanLocal: true,
        scanCount: 5,
        images: [
            "https://images.unsplash.com/photo-1545048702-79362596cdc9?q=80&w=600",
            "https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=600",
            "https://images.unsplash.com/photo-1480733992048-df39e3947a38?q=80&w=600",
            "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=600",
        ],
    },
} as const;

export type TreeConfig = typeof TREE_CONFIG;
