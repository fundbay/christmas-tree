/** 手部关键点的位置信息 */
export interface HandPosition {
    x: number;
    y: number;
}

/** 手势的相对比例数据，用于父组件判断模式 */
export interface HandRatios {
    extensionRatio: number; // 手指伸展比 (握拳 vs 张开)
    pinchRatio: number; // 捏合比 (拇指与食指的距离)
    handSize: number; // 归一化基准大小
}

/**
 * 组件每次检测到的完整手部数据
 * - detected: 是否检测到手部
 * - position: 手部位置 (归一化坐标)
 * - ratios: 手势的相对比例数据
 */
export interface HandTrackingData {
    detected: boolean;
    position: HandPosition;
    ratios: HandRatios;
    // rawLandmarks: any; // 可选，如果需要输出原始关键点
}
