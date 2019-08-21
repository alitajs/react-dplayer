/**
 * 将字符串的首字母改为大写
 * @param str
 */
export function upperFirst(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
}

/**
 * 转换事件名称
 * @param eventName
 *
 * @example
 * play >> onPlay
 * quality_end >> onQualityEnd
 */
export function capitalizeEventName(eventName: string): string {
  return eventName.split('_').map(upperFirst).join('');
}


