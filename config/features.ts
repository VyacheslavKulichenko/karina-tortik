/**
 * Feature Flags Configuration
 * Легко включать/выключать функции приложения
 */

export const FEATURES = {
  /**
   * Показывать интро-видео при загрузке страницы
   * true = видео показывается
   * false = видео не показывается, сразу основное приложение
   */
  SHOW_INTRO_VIDEO: true,
} as const;
