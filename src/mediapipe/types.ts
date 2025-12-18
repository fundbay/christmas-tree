/** 归一化手部中心位置（-1 到 1） */
export interface HandPosition {
    x: number;
    y: number;
}

/** 用于判断不同手势模式的比例参数 */
export interface HandRatios {
    extensionRatio: number;
    pinchRatio: number;
    handSize: number;
}

/** WebcamHandTracker 对外输出的数据结构 */
export interface HandTrackingData {
    detected: boolean;
    position: HandPosition;
    ratios: HandRatios;
}
