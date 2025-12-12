<template>
    <div class="loader-container">
        <div class="spinner"></div>
        <div class="loader-text">Loading Memories</div>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped>
/* Loading Spinner */
.loader-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #050d1a;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.8s ease-out;
}

.loader-text {
    color: #d4af37;
    font-size: 14px;
    letter-spacing: 4px;
    margin-top: 20px;
    text-transform: uppercase;
    font-weight: 100;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(212, 175, 55, 0.2);
    border-top: 1px solid #d4af37;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
