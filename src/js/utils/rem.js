export default function remToPx(remValue) {
    // Получаем текущий базовый размер шрифта (font-size) из элемента <html>
    const htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Переводим значение из rem в px
    const pxValue = remValue * htmlFontSize;

    // Округляем значение до целых пикселей (по желанию)
    return `${Math.round(pxValue)}px`;
}
