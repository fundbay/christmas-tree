import { nextTick, onMounted, onUnmounted } from "vue";
import { HandTrackerService } from "../services/HandTrackerService";
import type { HandTrackingData } from "../types";

interface UseHandTrackerParams {
    getVideoElement: () => HTMLVideoElement | null;
    getDebugElement: () => HTMLElement | null;
    delegate: "CPU" | "GPU";
    numHands: number;
    debugMode: boolean;
    emitters: {
        onTrackingData: (data: HandTrackingData) => void;
        onReady: () => void;
        onError: (message: string) => void;
    };
}

/**
 * 将 HandTrackerService 封装为组合式函数，供组件复用
 */
export function useHandTracker(params: UseHandTrackerParams) {
    let service: HandTrackerService | null = null;

    /** 初始化 MediaPipe 服务（等待 DOM 渲染完成） */
    const start = async () => {
        await nextTick();
        const video = params.getVideoElement();
        if (!video) return;
        service = new HandTrackerService(
            video,
            {
                delegate: params.delegate,
                numHands: params.numHands,
                debugElement: params.getDebugElement(),
                debugMode: params.debugMode,
            },
            {
                onData: (data) => params.emitters.onTrackingData(data),
                onReady: params.emitters.onReady,
                onError: params.emitters.onError,
            }
        );
        service.init();
    };

    /** 销毁 service，并在视图卸载时自动调用 */
    const stop = () => {
        service?.dispose();
        service = null;
    };

    onMounted(start);
    onUnmounted(stop);

    return { start, stop };
}
